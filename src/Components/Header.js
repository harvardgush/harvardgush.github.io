import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="header-nav-list">
          <img className="header-nav-item" src="gush-logo.png" alt="GUSH logo"/>
          <h2 className="header-nav-item"><a className="header-link" href="/about">About</a></h2>
          <h2 className="header-nav-item"><a className="header-link" href="/team">Team</a></h2>
          <h2 className="header-nav-item"><a className="header-link" href="/events">Events</a></h2>
          <h2 className="header-nav-item"><a className="header-link" href="/contact">Contact</a></h2>
          <h2 className="header-nav-item"><a className="header-link" href="/sponsors">Sponsors</a></h2>
        </nav>
      </header>
      );
  }
} export default Header;

