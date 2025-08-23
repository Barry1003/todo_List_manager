// src/components/Header.tsx
import { useLocation } from "react-router-dom";
import { Search, Bell, Calendar } from "lucide-react";

const routeTitles: Record<string, string> = {
  "/": "Dashboard",
  "/vital-task": "Vital Task",
  "/my-task": "My Task",
  "/task-categories": "Task Categories",
  "/settings": "Settings",
  "/help": "Help",
};

export default function Header() {
  const location = useLocation();
  const title = routeTitles[location.pathname] || "Dashboard";

  // format date
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const dateStr = today.toLocaleDateString("en-GB", options); // Tuesday, 20/06/2023

  return (
    <header className="w-full flex items-center justify-between bg-gray-50 px-6 py-4 shadow-sm">
      {/* Title */}
      <h1 className="text-2xl font-bold">
        <span className="text-[#F45B5B]">{title.slice(0, 4)}</span>
        {title.slice(4)}
      </h1>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl mx-8 relative">
        <input
          type="text"
          placeholder="Search your task here..."
          className="w-full rounded-full pl-4 pr-12 py-2 bg-white shadow focus:outline-none"
        />
        <Search className="absolute right-4 top-2.5 text-[#F45B5B]" size={20} />
      </div>

      {/* Icons + Date */}
      <div className="flex items-center gap-6">
        <button className="bg-[#F45B5B] p-2 rounded-lg text-white shadow">
          <Bell size={18} />
        </button>
        <button className="bg-[#F45B5B] p-2 rounded-lg text-white shadow">
          <Calendar size={18} />
        </button>
        <div className="text-right">
          <p className="font-medium">Tuesday</p>
          <p className="text-blue-500 text-sm">{dateStr}</p>
        </div>
      </div>
    </header>
  );
}
