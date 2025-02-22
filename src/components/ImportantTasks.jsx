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
      <h2 className="text-xl font-bold mb-3 text-yellow-600">
        ⭐ Important Tasks
      </h2>
      {importantTasks.length === 0 ? (
        <p className="text-gray-500 text-center">No important tasks yet.</p>
      ) : (
        <div className="grid gap-4">
          {importantTasks.map((task) => (
            <div
              key={task.id}
              className="border p-4 rounded-lg shadow-md bg-yellow-100 flex justify-between items-center hover:shadow-lg transition"
            >
              <span className="font-medium">
                {task.name} - {task.date}
              </span>
              <button
                onClick={() => unmarkImportant(task.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                ❌ Unmark
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
