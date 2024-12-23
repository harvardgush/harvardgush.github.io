import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="max-w-7xl mx-auto relative h-screen">
          <img src="harvard-campus.jpg" alt="Harvard Campus" className="w-full h-full object-cover brightness-[0.75]" />
          <div className="absolute inset-0">
            <div className="max-w-7xl mx-auto px-6 pt-32">
              <div className="max-w-3xl flex flex-col items-start">
                <h1 className="text-6xl font-semibold text-white ml-10 mb-6 leading-tight text-left">
                  Understand the World
                </h1>
                <h2 className="text-3xl text-white mb-8 leading-normal ml-10 text-left font-medium">
                  Join the Group for Undergraduates in<br />
                  Statistics at Harvard (GUSH)!
                </h2>
                <a href="https://groups.google.com/g/gush-mailing-list" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-black px-8 py-3 ml-10 font-semibold rounded-md text-lg hover:bg-gray-300 transition-colors">
                    Get Involved
                  </button></a>
              </div>
            </div>
          </div>

          <div className="bg-[#a61c31] p-10">
            <div className="text-white text-center py-5">
              A draft of the GUSH Guide to Harvard Statistics is now available at <a href="/GUSH_Guide.pdf" target="_blank" rel="noopener noreferrer" className="underline">this link</a>!
              Please let us know if you have any questions or suggestions!
            </div>

            <div className="grid grid-cols-5 gap-0 mt-20">
              <div className="col-span-3 bg-black w-auto -my-10 ml-10">
                <img src="statistics-visual.jpeg" alt="Statistics Visual" className="w-full h-full object-cover shadow-xl" />
              </div>

              <div className="col-span-2 bg-white p-8 text-left -ml-24 z-10 mr-10">
                <h2 className="text-3xl font-medium text-[#a61c31] mb-6">
                  "The best thing about being a statistician is that you get to play in everybody else's backyard."
                </h2>

                <p className="text-normal text-[#a61c31] mb-4">
                  Artificial intelligence, medicine, political science, sports, finance,
                  physics, biology, meteorology, games... What do these have in common?
                  <span className="font-bold"> Statistics!</span>
                </p>

                <p className="text-normal text-[#a61c31] mb-8">
                  In the modern age of big data and information, statistics is
                  applicable and transformative in all areas of life. With statistics, we
                  have the power to change the world and transform it for the better.
                </p>

                <a href="#/about">
                  <button className="bg-[#a61c31] text-white px-6 py-3 rounded-md hover:bg-[#851627] font-normal">
                    Learn More
                  </button>
                </a>
              </div>
            </div>

            <br /><br /><br /><br /><br />

            <div className="grid grid-cols-5 gap-0">

              <div className="col-span-2 bg-white p-8 text-left -mr-24 z-10 ml-10">
                <h2 className="text-3xl font-medium text-[#a61c31] mb-6">
                  "Apart from the known and the unknown, what else is there?"
                </h2>
                <h3 className="text-xl font-medium text-[#a61c31] mb-4">Exciting Events & Amazing Community!</h3>
                <p className="text-normal font-normal text-[#a61c31] mb-4">
                  Study breaks, advising & mentorship, renowned speakers, statistics
                  concentrator socials, community outreach, volunteering... Check
                  out our events calendar and subscribe to our emailing list to stay
                  updated on all our upcoming events and opportunities!
                </p>
                <p className="text-normal font-normal text-[#a61c31] mb-8">
                  We hope you'll join our community of amazing, passionate
                  students and come out to all of our exciting events!
                </p>

                <a href="#/events">
                  <button className="bg-[#a61c31] text-white px-6 py-3 rounded-md hover:bg-[#851627] font-normal">
                    View Upcoming Events
                  </button>
                </a>
              </div>

              <div className="col-span-3 bg-black w-auto -my-10 mr-10">
                <img src="joe-gush.jpg" alt="Joe and GUSH" className="w-full h-full object-cover shadow-xl" />
              </div>
            </div>
            <br /><br /><br />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;