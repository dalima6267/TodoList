import { useState } from "react";
import Taskbutton from "./Taskbutton";

export default function TaskList({ tasks, setTasks }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setTaskName("");
    setIsImportant(false);
    setIsCompleted(false);
  };

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
      isImportant,
      isCompleted,
    };
    setTasks([...tasks, newTask]);
    closeModal();
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

  return (
    <div className="p-5">
      {/* Task Button Component */}
      <div className="flex  mb-4">
        <Taskbutton onClick={openModal} />
      </div>

      {/* Modal Dialog for Adding a Task */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-3">Add New Task</h2>

            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="border p-2 rounded-md w-full mb-3"
              placeholder="Enter task name..."
            />

            {/* Options for Important and Completed */}
            <div className="flex gap-3 mb-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isImportant}
                  onChange={() => setIsImportant(!isImportant)}
                  className="mr-2"
                />
                ⭐ Mark as Important
              </label>

              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isCompleted}
                  onChange={() => setIsCompleted(!isCompleted)}
                  className="mr-2"
                />
                ✅ Mark as Completed
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={addTask}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}

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
                    <span
                      className={`cursor-pointer ${
                        task.isCompleted ? "line-through text-gray-500" : ""
                      } ${task.isImportant ? "text-yellow-600 font-bold" : ""}`}
                    >
                      {task.name}
                    </span>
                  </td>
                  <td className="border p-2">{task.date}</td>
                  <td className="border p-2 flex justify-center gap-2">
                    <button
                      onClick={() => markImportant(task.id)}
                      className={`px-2 py-1 rounded ${
                        task.isImportant
                          ? "bg-yellow-500 text-white"
                          : "bg-gray-300"
                      }`}
                    >
                      ⭐
                    </button>
                    <button
                      onClick={() => toggleCompletion(task.id)}
                      className={`px-2 py-1 rounded ${
                        task.isCompleted
                          ? "bg-green-500 text-white"
                          : "bg-gray-300"
                      }`}
                    >
                      ✅
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      🗑️
                    </button>
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
