import React, { useState } from "react";

interface Task {
  title: string;
  date: string;
  description: string;
  priority: string;
  image: File | null;
}

interface AddFileProps {
  onAddTask: (task: Task) => void;
  onClose: () => void;
}

const AddFile: React.FC<AddFileProps> = ({ onAddTask, onClose }) => {
  const [formData, setFormData] = useState<Task>({
    title: "",
    date: "",
    description: "",
    priority: "",
    image: null,
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "image" && files) {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(formData); // ✅ send task up to Dashboard
    setFormData({
      title: "",
      date: "",
      description: "",
      priority: "",
      image: null,
    });
  };

  return (
    <div className="w-full h-full fixed top-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-[700px] rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h1 className="text-xl font-semibold">Add New Task</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            Go Back
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border rounded p-2 outline-none"
          />

          {/* Date */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded p-2 outline-none"
          />

          {/* Priority */}
          <div>
            <p className="font-medium mb-1">Priority</p>
            <div className="flex gap-4">
              {["Extreme", "Moderate", "Low"].map((level) => (
                <label key={level} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="priority"
                    value={level}
                    checked={formData.priority === level}
                    onChange={handleChange}
                  />
                  <span
                    className={
                      level === "Extreme"
                        ? "text-red-600"
                        : level === "Moderate"
                        ? "text-blue-600"
                        : "text-green-600"
                    }
                  >
                    {level}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Task Description */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Task Description"
            rows={4}
            className="w-full border rounded p-2 outline-none"
          />

          {/* Upload Image */}
          <div className="border-2 border-dashed rounded-lg p-6 text-center">
            <p className="mb-2">Upload Image</p>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="hidden"
              id="upload"
            />
            <label
              htmlFor="upload"
              className="cursor-pointer bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              Browse
            </label>
            {formData.image && (
              <p className="mt-2 text-sm text-gray-600">
                Selected: {formData.image.name}
              </p>
            )}
          </div>

          {/* Done button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFile;
