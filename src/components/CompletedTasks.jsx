import { useEffect, useState } from "react";

export default function CompletedTasks({ tasks, setTasks }) {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    setCompletedTasks(tasks.filter((task) => task.isCompleted));
  }, [tasks]);

  // Function to undo task completion
  const unmarkCompleted = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: false } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">✅ Completed Tasks</h2>

      {/* Card UI for better appearance */}
      {completedTasks.length === 0 ? (
        <div className="p-5 border rounded-lg shadow-md bg-white text-center">
          <p className="text-gray-500">No completed tasks yet.</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {completedTasks.map((task) => (
            <li
              key={task.id}
              className="p-3 border rounded-lg shadow flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="text-gray-800 font-medium">
                {task.name} -{" "}
                <span className="text-sm text-gray-500">{task.date}</span>
              </span>
              <button
                onClick={() => unmarkCompleted(task.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                ❌ Undo
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
