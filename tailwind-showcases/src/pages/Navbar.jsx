import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col bg-cyan-100 text-black font-mono text-xl h-screen text-center ">
        <div className="mt-12 font-extrabold text-red-800 underline underline-offset-8">
          Welcome to Vignesh Kanna's Navbar components showcase 🚀
        </div>
        <div className="border-4 border-cyan-600 rounded-xl mx-auto my-auto w-1/2 p-8">
          <div>
            <ul>
              <li className="mb-5 p-3 hover:bg-red-400 hover:rounded-lg">
                <Link to="/navbars/navbar1"> 🚀Left logo with center links and right hamburger (mobile)</Link>
              </li>
              <li className="mb-4 p-3 hover:bg-red-400 hover:rounded-lg">
                <Link to="/navbars/centered-navbrand">
                  🚀Brand logo in center with links in both side and right hamburger (mobile)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
