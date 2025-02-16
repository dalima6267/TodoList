import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div
      className="w-1/4 h-screen bg-green-100
        p-4 flex flex-col"
    >
      <h2
        className="text-green-800 text-xl font-bold
        flex items-center gap-2"
      >
        📋 TO-DO
      </h2>
      <nav className="mt-6">
        <Link
          to="/"
          className="block px-4 py-2
        my-1 rounded-md bg-green-200 hover:bg-pink-50"
        >
          ✔️ Tasks
        </Link>
        <Link
          to="/important"
          className="block px-4 py-2
        my-1 rounded-md  bg-green-200 hover:bg-pink-50"
        >
          ⭐ Important
        </Link>
        <Link
          to="/completed"
          className="block px-4 py-2
        my-1 rounded-md  bg-green-200 hover:bg-pink-50"
        >
          🗑️ Completed
        </Link>
      </nav>
    </div>
  );
}
