import { useState } from "react";
import Taskbutton from "./Taskbutton";

export default function TaskList({ tasks, setTasks }) {
  const [taskName, setTaskName] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState("");

  // Add a new task
  const addTask = () => {
    if (!taskName.trim()) {
      alert("Please enter a task name!");
      return;
    }
    const newTask = {
      id: Date.now(),
      name: taskName,
      date: new Date().toLocaleDateString(),
      isImportant: false,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]); // Update global state
    setTaskName("");
  };

  // Toggle task importance
  const markImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isImportant: !task.isImportant } : task
      )
    );
  };

  // Toggle task completion
  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Enable editing mode
  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setEditedTaskName(task.name);
  };

  // Save edited task
  const saveEditedTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editingTaskId ? { ...task, name: editedTaskName } : task
      )
    );
    setEditingTaskId(null);
    setEditedTaskName("");
  };

  return (
    <div className="p-5">
      {/* Input and Add Task Button */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border p-2 rounded-md w-full focus:ring focus:ring-green-300"
          placeholder="Enter task name..."
        />
        <Taskbutton onClick={addTask} />
      </div>

      {/* Task List Display */}
      <div className="mt-5">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks added yet.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300 mt-3">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Index</th>
                <th className="border p-2">Task Name</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={task.id} className="text-center">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">
                    {editingTaskId === task.id ? (
                      <input
                        type="text"
                        value={editedTaskName}
                        onChange={(e) => setEditedTaskName(e.target.value)}
                        className="border p-1 rounded"
                      />
                    ) : (
                      <span
                        className={`cursor-pointer ${
                          task.isCompleted ? "line-through text-gray-500" : ""
                        } ${
                          task.isImportant ? "text-yellow-600 font-bold" : ""
                        }`}
                        onClick={() => toggleCompletion(task.id)}
                      >
                        {task.name}
                      </span>
                    )}
                  </td>
                  <td className="border p-2">{task.date}</td>
                  <td className="border p-2">
                    {editingTaskId === task.id ? (
                      <button
                        onClick={saveEditedTask}
                        className="px-2 py-1 bg-blue-500 text-white rounded"
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => startEditing(task)}
                          className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => markImportant(task.id)}
                          className={`px-2 py-1 ${
                            task.isImportant ? "bg-yellow-600" : "bg-gray-300"
                          } text-white rounded mr-2`}
                        >
                          ⭐
                        </button>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="px-2 py-1 bg-red-500 text-white rounded"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => toggleCompletion(task.id)}
                          className={`px-2 py-1 rounded ${
                            task.isCompleted ? "bg-gray-500" : "bg-green-500"
                          } text-white`}
                        >
                          {task.isCompleted ? "✅ Undo" : "✔️ Complete"}
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
