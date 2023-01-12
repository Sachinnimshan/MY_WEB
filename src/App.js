import React, { useEffect, useState } from "react";

import "./components/page.css";
import "./App.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Footer from "./components/shared/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import { CgArrowUpR } from "react-icons/cg";
import Header from "./components/shared/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import ProjectInfo from "./components/pages/ProjectInfo";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div className="app">
      <Router>
        <div className="header">
          <Header />
        </div>
        <div style={{ height: "3.5rem" }}></div>
        <CgArrowUpR
          className="scrollTop"
          onClick={scrollTop}
          style={{ height: 40, display: showScroll ? "flex" : "none" }}
        />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/project/:id" component={ProjectInfo} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
