import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ImportantTasks from "./components/ImportantTasks";
import CompletedTasks from "./components/CompletedTasks";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="w-4/5 h-screen bg-green-50">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<TaskList tasks={tasks} setTasks={setTasks} />}
            />
            <Route
              path="/important"
              element={<ImportantTasks tasks={tasks} setTasks={setTasks} />}
            />
            <Route
              path="/completed"
              element={<CompletedTasks tasks={tasks} setTasks={setTasks} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
