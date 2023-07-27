import React, { useState } from "react";
import "./components/page.css";
import "./App.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Footer from "./components/common/Footer";
import About from "./components/pages/About";
import { CgArrowUpR } from "react-icons/cg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import ScrollToTop from "./hooks/scrollToTop";
import Technology from "./components/common/technology/Technology";
import Portfolio from "./components/pages/Portfolio";
import { AppContainer, AppContent } from "./styled";
import { useResponsive } from "./hooks/useResponsive";

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const { mobile } = useResponsive();

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
    <AppContainer>
      <Router>
        <Switch>
          <ScrollToTop>
            <Header />
            <CgArrowUpR
              className="scrollTop"
              onClick={scrollTop}
              style={{ height: 40, display: showScroll ? "flex" : "none" }}
            />
            <AppContent>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/tech" component={Technology} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/skills" component={Technology} />
              <Route path="/contact" component={Contact} />
              <Footer />
            </AppContent>
          </ScrollToTop>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
