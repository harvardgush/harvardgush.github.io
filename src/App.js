import React, { Component } from "react";
import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";
import Team from "./Components/Team";
import Events from "./Components/Events";
import Sponsors from "./Components/Sponsors";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="min-h-screen bg-white font-sans">
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/team" element={<Team />} />
              <Route exact path="/events" element={<Events />} />
              <Route exact path="/sponsors" element={<Sponsors />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
