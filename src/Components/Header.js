import React, { Component } from "react";

class Header extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <nav className="bg-[#a61c31] text-white px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center mt-4 mb-4 md:ml-10 md:mr-10">
          <a href="/" className="flex items-center space-x-1.5">
            <img src="gush-logo.png" alt="GUSH Logo" className="h-6 md:h-10 m-auto object-cover" />
          </a>
          <div className="flex md:space-x-6 space-x-1.5">
            <a href="#/about" className="hover:text-gray-300">About</a>
            <a href="#/team" className="hover:text-gray-300">Team</a>
            <a href="#/events" className="hover:text-gray-300">Events</a>
            <a href="#/sponsors" className="hover:text-gray-300">Sponsors</a>
          </div>
        </div>
      </nav>
    );
  }
} export default Header;

