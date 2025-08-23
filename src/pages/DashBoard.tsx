import CircularProgress from "@/components/CircularProgress"

const tasks = [
  {
    title: "Attend Nischal's Birthday Party",
    desc: "Buy gifts on the way and pick up cake from Fresh Elements. (6 PM)",
    meta: "Priority: High • Status: Not Started • Created: 20/06/2023",
  },
  {
    title: "Landing Page Design for TravelDays",
    desc: "Get the work done by EOD and discuss with client before leaving. (4 PM)",
    meta: "Priority: High • Status: In Progress • Created: 20/06/2023",
  },
  {
    title: "Presentation on Final Product",
    desc: "Make sure everything is prepared: docs, meeting room, and demo files.",
    meta: "Priority: Medium • Status: In Progress • Created: 18/06/2023",
  },
]

const progressData = [
  { label: "Completed", value: 84, color: "stroke-green-500" },
  { label: "In Progress", value: 46, color: "stroke-blue-500" },
  { label: "Not Started", value: 13, color: "stroke-red-500" },
]

const miniCards = [
  { title: "Walk the dog", desc: "Take the dog to the park", bg: "bg-green-50" },
  { title: "Conduct meeting", desc: "Meet with the client and finalize requirements", bg: "bg-yellow-50" },
  { title: "Pending follow-up", desc: "Status: 7 days", bg: "bg-red-50" },
]

const Dashboard: React.FC = () => {
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
              <button className="text-sm text-blue-600 hover:underline">+ Add task</button>
            </div>

            <div className="space-y-4">
              {tasks.map((task, i) => (
                <article
                  key={i}
                  className="rounded-xl border border-gray-100 bg-blue-50 p-4 shadow-sm"
                >
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-gray-600">{task.desc}</p>
                  <p className="text-xs text-gray-500 mt-1">{task.meta}</p>
                </article>
              ))}
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
                <div
                  key={i}
                  className={`rounded-xl ${card.bg} p-4 shadow-sm`}
                >
                  <p className="text-sm font-medium">{card.title}</p>
                  <p className="text-xs text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
