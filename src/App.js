import React, { useState } from "react";

import "./components/page.css";
import "./App.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Footer from "./components/common/Footer";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import { CgArrowUpR } from "react-icons/cg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectInfo from "./components/pages/ProjectInfo";
import Header from "./components/common/Header";
import ScrollToTop from "./hooks/scrollToTop";
import { useEffect } from "react";

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
        <Switch>
          <ScrollToTop>
            <Header />
            <CgArrowUpR
              className="scrollTop"
              onClick={scrollTop}
              style={{ height: 40, display: showScroll ? "flex" : "none" }}
            />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/project/:id" component={ProjectInfo} />
            {/* <Route component={NotFound}/> */}
            <Footer />
          </ScrollToTop>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
