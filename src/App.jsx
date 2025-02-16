import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import TaskList from "./components/TaskList";
function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="w-4/5 h-screen bg-green-50">
          <Navbar />
          <div className="p-10">
            <TaskList />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
