import { useEffect, useState } from "react";

export default function ImportantTasks({ tasks, setTasks }) {
  const [importantTasks, setImportantTasks] = useState([]);

  useEffect(() => {
    setImportantTasks(tasks.filter((task) => task.isImportant));
  }, [tasks]);

  // Function to unmark important
  const unmarkImportant = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isImportant: false } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">⭐ Important Tasks</h2>
      {importantTasks.length === 0 ? (
        <p className="text-gray-500 text-center">No important tasks yet.</p>
      ) : (
        <ul>
          {importantTasks.map((task) => (
            <li
              key={task.id}
              className="border p-2 rounded mb-2 flex justify-between items-center"
            >
              <span>
                {task.name} - {task.date}
              </span>
              <button
                onClick={() => unmarkImportant(task.id)}
                className="px-2 py-1 bg-gray-400 text-white rounded"
              >
                ❌ Unmark
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
