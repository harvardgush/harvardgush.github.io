import React, { Component } from "react";
import { events } from "./event.js"

class Events extends Component {
  render() {
    return (
      <div>
        <div className="bg-[#a61c31] relative px-20 pt-10 max-w-7xl mx-auto">
          <h1 className="text-white text-4xl font-bold text-center mb-16">
            Events
          </h1>
          {events.map((event, eventIndex) => (
            <div className="grid md:grid-cols-3 gap-12 items-start my-10">
              <div className="col-span-1">
                <img src={event.image} alt={`event-${eventIndex}`} className="w-full h-full shadow-xl aspect-square"/>
              </div>

              <div key={`tier-${eventIndex}`} className="mb-16 last:mb-0 col-span-2">
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