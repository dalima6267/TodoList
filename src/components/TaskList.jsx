import { useState } from "react";
import Taskbutton from "./Taskbutton";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    if (!taskName.trim()) {
      alert("Please enter a task name!"); // Prevent empty tasks
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      date: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, newTask]);
    setTaskName("");
  };

  return (
    <div className="p-5">
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border p-2 rounded-md w-50 focus:ring focus:ring-green-300"
          placeholder="Enter task name..."
        />
        <Taskbutton onClick={addTask} />
      </div>
      <div className="mt-5">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center"> No tasks added yet</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300 mt-3">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Index</th>
                <th className="border p-2">Task Name</th>
                <th className="border p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={task.id} className="text-center">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{task.name}</td>
                  <td className="border p-2">{task.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
