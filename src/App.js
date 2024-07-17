import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Events from "./pages/Events";

function App() {
  return (
    <div className="App font-raleway">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
