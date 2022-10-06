// Importing tailwind input css file
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Navbar, About } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/navbars" element={<Navbar />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
