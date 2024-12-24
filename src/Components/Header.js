import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="bg-[#a61c31] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center mt-4 mb-4 ml-10 mr-10">
          <a href="/" className="flex items-center space-x-2">
            <img src="gush-logo.png" alt="GUSH Logo" className="h-10 m-auto" />
          </a>
          <div className="flex space-x-6">
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

