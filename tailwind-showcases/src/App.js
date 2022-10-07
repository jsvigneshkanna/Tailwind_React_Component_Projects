import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Pages
import { Home, Navbar } from "./pages";

// Importing all the components
import Navbar1 from "./components/navbars/Navbar1";
import CenteredNavBrand from "./components/navbars/CenteredNavBrand";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbars">
          <Route index={true} element={<Navbar />} />
          <Route path="navbar1" element={<Navbar1 />} />
          <Route path="centered-navbrand" element={<CenteredNavBrand />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
