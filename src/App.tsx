// src/App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

// Import your pages
import Dashboard from "./pages/DashBoard";
// import VitalTask from "./pages/VitalTask";
// import MyTask from "./pages/MyTask";
// import TaskCategories from "./pages/TaskCategories";
// import Settings from "./pages/Settings";
// import Help from "./pages/Help";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
           <Route path="/" element={<Dashboard />} />
          {/*<Route path="/vital-task" element={<VitalTask />} />
          <Route path="/my-task" element={<MyTask />} />
          <Route path="/task-categories" element={<TaskCategories />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
