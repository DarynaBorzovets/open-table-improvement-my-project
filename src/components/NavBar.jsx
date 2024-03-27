import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <Link to="/" className="text-white text-lg mr-8">Problem & Solution</Link>
        <Link to="/project" className="text-white text-lg mr-8">Project</Link>
      </div>
    </nav>
  );
}

export default Navbar;
