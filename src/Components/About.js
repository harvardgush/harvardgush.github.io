import React, { Component } from "react";

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="bg-[#a61c31] relative max-w-7xl mx-auto px-10 md:px-20 pt-10">
          <h1 className="text-white text-4xl font-bold text-center mb-16">
            Our Mission
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 items-center">
            <div className="col-span-1 lg:col-span-3 relative">
              <img
                src="our-mission.jpg"
                alt="GUSH Mission"
                className="shadow-xl w-full h-auto rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-90 group-hover:shadow-2xl"
              />
            </div>

            <div className="col-span-1 lg:col-span-4 space-y-6">
              <p className="text-normal lg:text-xl text-white font-medium italic leading-relaxed">
                The mission of the Group for Undergraduates in Statistics at Harvard (GUSH) is to
                create a unique space on campus that is open to all statistics enthusiasts!
              </p>
              <p className="text-normal lg:text-lg text-white leading-relaxed">
                By hosting various events and programs, GUSH aims to cultivate passion for
                statistics, create a supportive community for undergraduates, and provide
                educational opportunities that empower students to use statistics and data
                science to transform the world.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 items-center pt-5 pb-10">

            <div className="col-span-1 lg:col-span-4 space-y-6">

              <p className="text-normal lg:text-lg text-white leading-relaxed">
                Throughout the year, GUSH features talks by renowned academics and industry
                professionals, course panels, skill-building workshops, and mentorship programs
                that connect incoming first-years with current students and undergraduates
                with graduate students.
              </p>
              <p className="text-normal lg:text-xl text-white font-medium italic leading-relaxed">
                GUSH also hosts study breaks, game nights, and other
                exciting social events that help to foster a cohesive statistics community at
                Harvard.
              </p>
            </div>
            <div className="col-span-1 lg:col-span-3 relative">
              <img
                src="board.jpeg"
                alt="GUSH Board"
                className="shadow-xl w-full h-auto rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-90 group-hover:shadow-2xl"
              />
            </div>
          </div>
          <br/>
        </div>
      </div>
    );
  }
}
export default About;