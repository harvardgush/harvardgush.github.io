import React, { Component } from "react";
import InstaLogo from "../Assets/instagram.svg";

class Footer extends Component{
    render(){
        return(
            <footer className="bg-[#a81c34] text-white px-4 md:px-6 py-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className = "flex flex-col space-y-4">
                    <p className="text-2xl text-center md:text-left">
                        Group for Undergraduates in Statistics at Harvard (GUSH)
                    </p>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"               >
                        <img src={InstaLogo} alt="Instagram" className="h-6 md:h-8 transition duration-300 hover:filter hover:invert-0 filter invert"/>
                    </a>
                </div>
              
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                    <a href="#/about" className="hover:text-gray-300">
                    About
                    </a>
                    <a href="#/team" className="hover:text-gray-300">
                    Team
                    </a>
                    <a href="#/events" className="hover:text-gray-300">
                    Events
                    </a>
                    <a href="#/sponsors" className="hover:text-gray-300">
                    Sponsors
                    </a>
                </div>
            </div>
          </footer>
        );
    }
} export default Footer