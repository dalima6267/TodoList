import { useState, useEffect } from "react";

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
      {completedTasks.length === 0 ? (
        <p className="text-gray-500 text-center">No completed tasks yet.</p>
      ) : (
        <ul>
          {completedTasks.map((task) => (
            <li
              key={task.id}
              className="border p-2 rounded mb-2 flex justify-between items-center"
            >
              <span>
                {task.name} - {task.date}
              </span>
              <button
                onClick={() => unmarkCompleted(task.id)}
                className="px-2 py-1 bg-gray-500 text-white rounded"
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
