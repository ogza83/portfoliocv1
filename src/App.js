import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
