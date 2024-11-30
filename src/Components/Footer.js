import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <nav className="header-nav-list">
          <h3 className="header-nav-item">Group for Undergraduates in Statistics at Harvard (GUSH)
          </h3>
          <h2 className="header-nav-item"><a className="header-link" href="/about">About</a></h2>
          <h2 className="header-nav-item"><a className="header-link" href="/team">Team</a></h2>
          <h2 className="header-nav-item"><a className="header-link" href="/events">Events</a></h2>
          <h2 className="header-nav-item"><a className="header-link" href="/contact">Contact</a></h2>
          <h2 className="header-nav-item"><a className="header-link" href="/sponsors">Sponsors</a></h2>
        </nav>
      </footer>);
  }
}
export default Footer;