import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="flex justify-center mt-6 items-center">
    
        <div className="space-x-4">
          <Link to="/" className="text-white text-2xl px-6 py-4 bg-black rounded-lg hover:text-blue-400 transition">
            J
          </Link>
          <Link to="/c" className="text-white text-2xl px-6 py-4 bg-black rounded-lg hover:text-blue-400 transition">
            C
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
