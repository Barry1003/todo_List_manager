import AddFile from "@/components/AddFile";
import CircularProgress from "@/components/CircularProgress";
import { useEffect, useState } from "react";

interface Task {
  title: string;
  date: string;
  description: string;
  priority: string;
  image: File | null;
}

const progressData = [
  { label: "Completed", value: 84, color: "stroke-green-500" },
  { label: "In Progress", value: 46, color: "stroke-blue-500" },
  { label: "Not Started", value: 13, color: "stroke-red-500" },
];

const miniCards = [
  { title: "Walk the dog", desc: "Take the dog to the park", bg: "bg-green-50" },
  { title: "Conduct meeting", desc: "Meet with the client and finalize requirements", bg: "bg-yellow-50" },
  { title: "Pending follow-up", desc: "Status: 7 days", bg: "bg-red-50" },
];

const Dashboard: React.FC = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Handle adding a new task
  const handleAddTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
    setShowAddTask(false);
  };

  return (
    <section className="w-full">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Welcome back, Sundar 👋</h1>
          <div className="flex gap-2">
            <button className="bg-red-500 text-white px-3 py-1 rounded-lg shadow">✂️</button>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg shadow">📸</button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* LEFT — To-Do */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">To-Do</h2>
              <button
                onClick={() => setShowAddTask(true)} // Only show the form
                className="text-sm text-blue-600 hover:underline"
              >
                + Add task
              </button>
            </div>

            <div className="space-y-4">
              {tasks.length === 0 ? (
                <p className="text-gray-500 text-sm">No tasks yet. Add one!</p>
              ) : (
                tasks.map((task, i) => (
                  <article
                    key={i}
                    className="rounded-xl border border-gray-100 bg-blue-50 p-4 shadow-sm"
                  >
                    <h3 className="font-medium">{task.title}</h3>
                    <p className="text-gray-600">{task.description}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Priority: {task.priority || "None"} • Date:{" "}
                      {task.date || "Not set"}
                    </p>
                  </article>
                ))
              )}
            </div>
          </div>

          {/* RIGHT — Task Status + mini list */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Task Status</h2>

            {/* Circular Progress Section */}
            <div className="flex justify-around mb-6">
              {progressData.map((item, i) => (
                <CircularProgress
                  key={i}
                  value={item.value}
                  label={item.label}
                  color={item.color}
                  size={100}
                  strokeWidth={8}
                />
              ))}
            </div>

            {/* Mini Cards */}
            <div className="mt-6 space-y-3">
              {miniCards.map((card, i) => (
                <div key={i} className={`rounded-xl ${card.bg} p-4 shadow-sm`}>
                  <p className="text-sm font-medium">{card.title}</p>
                  <p className="text-xs text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showAddTask && (
        <AddFile onAddTask={handleAddTask} onClose={() => setShowAddTask(false)} />
      )}
    </section>
  );
};

export default Dashboard;