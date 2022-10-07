import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col bg-cyan-100 text-black font-mono text-xl h-screen text-center ">
        <div className="mt-12 font-extrabold text-red-800 underline underline-offset-8">
          Welcome to Vignesh Kanna's Navbar components showcase 🚀
        </div>
        <div className="border-4 border-cyan-600 rounded-xl mx-auto my-auto w-1/2 h-1/2 p-8">
          <div>
            <ul>
              <li>
                <Link to="/navbars/navbar1">Navbar - 1</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
