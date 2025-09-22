import React, { Component } from "react";
import { events } from "./event.js"

class Events extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="bg-[#a61c31] relative px-10 md:px-20 pt-10 max-w-7xl mx-auto">
          <h1 className="text-white text-4xl font-bold text-center mb-6">
            Events
          </h1>

          <div className="text-center">
            <div
              role="note"
              aria-label="Event calendar info"
    className="relative inline-block rounded-2xl bg-white text-red-800 shadow-2xl ring-1 ring-black/5 border border-red-100 px-6 py-4 leading-relaxed sm:whitespace-nowrap whitespace-normal"            >
              <p className="m-0 sm:whitespace-nowrap whitespace-normal">
                To stay up-to-date with events, click{' '}
                <a
                  href="https://calendar.google.com/calendar/u/0?cid=Y181Njk0ZDcxZTE3YmJiM2E5ZDYyZWM0Nzc3NmI3Nzk5M2ExMTJlMzZkZTI1ODYwZWNmMzUzYTE5N2NiYWQ1NTc4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-red-400 underline-offset-2 text-red-900 hover:text-red-900/90"
                >
                  this link
                </a>{' '}
                to add our Gcal to your calendar!
              </p>
            </div>
          </div>



          {events.map((event, eventIndex) => (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start my-10">
              <div className="col-span-1 relative group overflow-hidden rounded-2xl">
                <img
                  src={event.image}
                  alt={`event-${eventIndex}`}
                  className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto shadow-xl transition duration-500 ease-in-out transform hover:scale-110 hover:brightness-90 group-hover:shadow-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500"></div>
              </div>

              <div key={`tier-${eventIndex}`} className="mb-16 last:mb-0 col-span-1 md:col-span-2">
                <h2 className="text-white text-2xl font-semibold mb-3 text-left">
                  {event.title}
                </h2>
                <h2 className="text-white text-lg italic font-normal mb-5 text-left">
                  {event.time}
                </h2>

                <div className="flex justify-center items-center flex-wrap gap-4">
                  {event.description.map((line, lineIndex) => (
                    <div key={lineIndex} className="w-full h-auto text-normal text-white text-left">
                      {line.line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <br /><br />
        </div>
      </div>
    );
  }
}
export default Events;