import React, { Component } from "react";
import { boardMembers } from './board.js';

class Team extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="max-w-7xl mx-auto bg-[#a61c31] relative p-10">
          <h1 className="text-white text-center text-4xl font-bold mb-12">
            Board of Directors 2024-25
          </h1>
          <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center group"
              >
                {/* Image container with fixed aspect ratio */}
                <div className="relative w-full max-w-md aspect-square mb-4 overflow-hidden">
                  <img
                    src={member.imagePath}
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover group-hover:brightness-50 transition duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <p className="text-white text-lg font-medium text-center px-4">
                      {member.desc}
                    </p>
                  </div>
                </div>

                {/* Name and title */}
                <h2 className="text-white text-2xl font-semibold text-center">
                  {member.name}
                </h2>
                <p className="text-white text-lg text-center">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
          <br /><br />
        </div>
      </div>
    );
  }
}
export default Team;