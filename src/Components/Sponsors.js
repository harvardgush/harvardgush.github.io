import React, { Component } from "react";
import { FaInstagram, FaMailBulk } from "react-icons/fa";
import { sponsors } from "./sponsor.js"

class Sponsors extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="bg-[#a61c31] relative p-10 max-w-7xl mx-auto">
          <h1 className="text-white text-4xl font-bold text-center mb-16">
            Our Sponsors
          </h1>
          {sponsors.map((tier, tierIndex) => (
            <div key={`tier-${tierIndex}`} className="bg-white rounded-3xl py-12 px-5 md:px-12 mb-12">
              <h2 className="text-[#a61c31] text-3xl font-bold text-center mb-12">
                {tier.name}
              </h2>

              <div className="flex justify-center items-center flex-wrap gap-12">
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <a key={`sponsor-${sponsorIndex}`} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="block max-w-2xl">
                    <img src={sponsor.imagePath} alt={sponsor.name} className="w-auto max-h-[15vw]" />
                  </a>
                ))}
              </div>
            </div>
          ))}

          <h1 className="text-white text-center text-4xl font-bold my-12">
            Contact Us
          </h1>
          <div className="px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-20">
            <a href="mailto:harvardgush@gmail.com" target="_blank" rel="noopener noreferrer" className="w-full justify-center items-center col-span-1">
              <FaMailBulk size={30} color="white" className="block justify-self-center" />
              <p className="text-white text-center text-xl font-normal justify-self-center">
                harvardgush@gmail.com
              </p>
            </a>
            <a href="https://www.instagram.com/harvardgush/" target="_blank" rel="noopener noreferrer" className="w-full justify-center items-center col-span-1">
              <FaInstagram size={30} color="white" className="block justify-self-center" />
              <p className="text-white text-center text-xl font-normal justify-self-center">
                @harvardgush
              </p>
            </a>
          </div>
          <br /><br />
        </div>
      </div>
    );
  }
}
export default Sponsors;