import { useState } from "react";
import Home from "./Pages/Home";
import Demo from "./Pages/Demo";
import About from "./Pages/About";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="demo/" element={<Demo />} />
          <Route path="about/" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
