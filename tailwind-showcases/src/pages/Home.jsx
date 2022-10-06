import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <div className="flex bg-purple-400 text-white font-mono text-xl h-screen text-center ">
        <div className="border-4 border-violet-800 border-spacing-4 rounded-xl mx-auto my-auto w-3/4 h-3/4 p-8">
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
