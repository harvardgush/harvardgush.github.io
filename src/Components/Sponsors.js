import React from 'react';
import { FaInstagram, FaMailBulk } from 'react-icons/fa';
import { sponsors } from './sponsor.js';

const ContactLink = ({ href, icon: Icon, text }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-row items-center justify-center gap-4 hover:opacity-80 transition-opacity"
  >
    <Icon size={30} color="white" />
    <p className="text-white text-xl font-normal">
      {text}
    </p>
  </a>
);

const Sponsors = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#a61c31] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-white text-4xl font-bold text-center mb-16">
          Our Sponsors
        </h1>

        {sponsors.map((tier, tierIndex) => (
          <div 
            key={`tier-${tierIndex}`} 
            className="bg-white rounded-3xl py-12 px-5 md:px-12 mb-12"
          >
            <h2 className="text-[#a61c31] text-3xl font-bold text-center mb-12">
              {tier.name}
            </h2>
            <div className="flex flex-col items-center flex-wrap gap-6">
              {tier.sponsors.map((sponsor, sponsorIndex) => (
                <a 
                  key={`sponsor-${sponsorIndex}`} 
                  href={sponsor.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:opacity-80 transition-opacity"
                >
                  <img 
                    src={sponsor.imagePath} 
                    alt={sponsor.name} 
                    className="w-auto max-h-[15vw]" 
                  />
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-20">
          <h2 className="text-white text-4xl font-bold text-center mb-16">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center md:gap-48 gap-8 max-w-6xl mx-auto">
            <ContactLink 
              href="mailto:harvardgush@gmail.com"
              icon={FaMailBulk}
              text="harvardgush@gmail.com"
            />
            <ContactLink 
              href="https://www.instagram.com/harvardgush/"
              icon={FaInstagram}
              text="@harvardgush"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;