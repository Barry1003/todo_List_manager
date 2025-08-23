// src/components/Sidebar.tsx
import { NavLink } from "react-router-dom"
import profile from "../assets/Hyouka.jpeg"
import {
  LayoutDashboard,
  AlertCircle,
  CheckSquare,
  List,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface MenuItem {
  name: string
  path: string
  icon: React.ReactNode
}

export default function Sidebar() {
  const menuItems: MenuItem[] = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={18} /> },
    { name: "Vital Task", path: "/vital-task", icon: <AlertCircle size={18} /> },
    { name: "My Task", path: "/my-task", icon: <CheckSquare size={18} /> },
    { name: "Task Categories", path: "/task-categories", icon: <List size={18} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
    { name: "Help", path: "/help", icon: <HelpCircle size={18} /> },
  ]

  return (
    <div className="w-[15%] h-full bg-[#F45B5B] text-white relative flex flex-col justify-between rounded-r-2xl shadow-lg">
      {/* Profile */}
      <div className="flex flex-col   items-center py-6">
        <Avatar className="w-20 h-20">
          <AvatarImage src={profile} alt="Profile" />
          <AvatarFallback>SG</AvatarFallback>
        </Avatar>
        <h2 className="mt-3 font-semibold text-lg">Sundar Gurung</h2>
        <p className="text-sm text-white/80">sundargurung360@gmail.com</p>
      </div>

      {/* Menu with Scroll */}
      <ScrollArea className="flex-1 px-2">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-2 rounded-lg transition",
                  isActive
                    ? "bg-white text-[#F45B5B] font-medium"
                    : "hover:bg-white/20"
                )
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
      </ScrollArea>

      {/* Logout */}
      <div className="mb-6 px-2">
        <NavLink
          to="/logout"
          className="flex items-center gap-3 px-4 py-2 hover:bg-white/20 rounded-lg transition"
        >
          <LogOut size={18} />
          Logout
        </NavLink>
      </div>
    </div>
  )
}
