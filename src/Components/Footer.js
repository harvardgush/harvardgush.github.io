import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#a61c31] text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} GUSH - Group for Undergraduates in Statistics at Harvard
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="mailto:harvardgush@gmail.com" 
              className="text-sm hover:text-gray-300"
            >
              Contact Us
            </a>
            <a 
              href="https://groups.google.com/g/gush-mailing-list" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-gray-300"
            >
              Join Mailing List
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;