import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <div className="flex flex-col bg-violet-500 text-white font-mono text-xl h-screen text-center ">
        <div className="mt-12 font-extrabold text-amber-300 underline underline-offset-8">
          Welcome to Vignesh Kanna's Tailwind components showcase 🚀
        </div>
        <div className="border-4 border-violet-800 rounded-xl mx-auto my-auto w-1/2 h-1/2 p-8">
          <div>
            <ul>
              <li>
                <Link to="/navbars">Navbars Components 🧭</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
