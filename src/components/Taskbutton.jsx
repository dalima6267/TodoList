export default function Taskbutton({ onClick }) {
  return (
    <div
      className="w-40 h-40
        rounded-2xl flex flex-col 
        justify-center items-center
        shadow-md cursor-pointer
        bg-green-200
        hover:bg-gray-300 transition"
      onClick={onClick}
    >
      <p className="text-gray-700 font-medium">add a task</p>
      <span className="text-4xl text-gray-600">+</span>
    </div>
  );
}
