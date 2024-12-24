import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <div className="bg-[#a61c31] relative p-10 max-w-7xl mx-auto px-20 pt-5">
          <h1 className="text-white text-4xl font-bold mb-12">
            Our Mission
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="our-mission.jpeg"
                alt="GUSH Mission"
                className="shadow-xl w-full h-auto"
              />
            </div>

            <div className="space-y-6">
              <p className="text-normal text-white leading-relaxed">
                The mission of the Group for Undergraduates in Statistics at Harvard (GUSH) is to
                create a unique space on campus that is open to all statistics enthusiasts! By
                hosting various events and programs, GUSH aims to cultivate passion for
                statistics, create a supportive community for undergraduates, and provide
                educational opportunities that empower students to use statistics and data
                science to transform the world.
              </p>

              <p className="text-normal text-white leading-relaxed">
                Throughout the year, GUSH features talks by renowned academics and industry
                professionals, course panels, skill-building workshops, and mentorship programs
                that connect incoming first-years with current students and undergraduates
                with graduate students. GUSH also hosts study breaks, game nights, and other
                exciting social events that help to foster a cohesive statistics community at
                Harvard.
              </p>
            </div>
          </div>
          <br /><br />
        </div>
      </div>
    );
  }
}
export default About;