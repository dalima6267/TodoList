import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-end gap-5 bg-gray-100 p-3">
      <NavButton path="/about" title="About" />
      <NavButton path="/contact" title="Contact" />
    </div>
  );
}
function NavButton({ path, title }) {
  return (
    <Link to={path}>
      <div
        className="bg-gray-200 px-2 
        py-1 rounded hover:bg-gray-400"
      >
        {title}
      </div>
    </Link>
  );
}
