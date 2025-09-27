"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import FooterARVR from "@/components/Footer";
const EventsPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const events = [
    {
      id: 1,
      title: "Formation",
      date: "MONDAY 12/9",
      time: "6-8 PM",
      location: "Lab Block",
      description:
        "Formation of AR VR HUB on 1st January 2024 at BMS Institute of Technology & Management.",
      color: "from-purple-600 to-pink-600",
      image: "src/assets/images/inaug.png",
    },
    {
      id: 2,
      title: "Orientation",
      date: "22-10-2024",
      time: "4-6 PM",
      location: "Lab Block",
      description:
        "Organized 1 Day orientation session with 1M1B in collaboration with Flaunch on upcoming LLM hackathon with Meta. Over 500 students participated.",
      color: "from-purple-700 to-blue-600",
      image: "src/assets/images/green.png",
    },
    {
      id: 3,
      title: "MoU with 1M1B",
      date: "22-10-2024",
      time: "4-6 PM",
      location: "Lab Block",
      description:
        "Signed MoU with 1M1B & Flaunch Innovation Pvt Ltd to provide training, internships, and networking opportunities.",
      color: "from-pink-600 to-purple-600",
      image: "src/assets/images/inaug.png",
    },
    {
      id: 4,
      title: "Internship Program Launch",
      date: "THURSDAY 11/14",
      time: "6:30-7:30 PM",
      location: "Lab Block",
      description:
        "Launched the 1M1B Green Skills Academy Internship Program for sustainability and climate-conscious careers. (29-11-2024)",
      color: "from-yellow-500 to-orange-500",
      image: "src/assets/images/inaug.png",
    },
    {
      id: 5,
      title: "mARtian AESSence",
      date: "26-12-2024 & 31-12-2024",
      time: "6:30-7:30 PM",
      location: "Lab Block",
      description:
        "Hosted mARtian AESSence event with Unity workshops and Mars colonization theme. ",
      color: "from-yellow-500 to-orange-500",
      image: "src/assets/images/inaug.png",
    },
    {
      id: 6,
      title: "Technical Stall at Anveshna'25",
      date: "28-03-2025",
      time: "6:30-7:30 PM",
      location: "Lab Block",
      description:
        "Presented a Technical Stall at Anveshana 2025, winning the 'Best User Experience Award' with cash prize. ",
      color: "from-yellow-500 to-orange-500",
      image: "src/assets/images/inaug.png",
    },
    // {
    //   id: 7,
    //   title: "Changemakers World Cup 2025",
    //   date: "26-12-2024 & 31-12-2024",
    //   time: "6:30-7:30 PM",
    //   location: "IRB 0324",
    //   description:
    //     "Organized orientation session on Changemakers World Cup 2025 by 1M1B, empowering students for global impact. (20-05-2025)",
    //   color: "from-yellow-500 to-orange-500",
    // },
  ];

  return (
    <div>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Hero Image with Overlay */}
        {/* Hero Image with Tint */}

        <div
          className="relative flex flex-col justify-center items-center min-h-[25rem] mt-20 px-4 bg-cover bg-center border-b overflow-hidden"
          style={{ backgroundImage: "url('public/events/core.png')" }}
        >
          {/* Tint Overlay */}
          <div className="absolute inset-0 bg-purple-600/60 mix-blend-multiply"></div>
          {/* Heading */}
          <h1 className="relative text-white text-6xl font-medium uppercase drop-shadow-[2px_5px_10px_rgba(0,0,0,0.9)]">
            EVENTS
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative z-10 px-6 py-12 max-w-7xl mx-auto">
          {/* Intro Text */}
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-gray-300 mb-4">
              The AR-VR Club hosts many events from Hackathons to Blender
              workshops. Be sure to join our{" "}
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 underline transition-colors duration-300"
              >
                Infoboard
              </a>{" "}
              and our{" "}
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 underline transition-colors duration-300"
              >
                Instagram
              </a>{" "}
              so that you'll never miss an event!
            </p>
          </div>
          <div className="flex justify-center">
            {/* Events Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className={`group relative overflow-hidden rounded-3xl border-4 border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{
                    animationDelay: `${800 + index * 200}ms`,
                    transitionDelay: `${
                      isLoaded ? "0ms" : `${800 + index * 200}ms`
                    }`,
                  }}
                  onMouseEnter={() => setHoveredCard(event.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>

                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-400/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                  <div className="relative p-8 bg-gray-900/80 backdrop-blur-sm h-full">
                    {/* Event Header */}
                    <div className="mb-6">
                      {/* Image Placeholder */}

                      <div className="w-full h-full mb-6 rounded-xl overflow-hidden border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-500">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-500 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="text-center mb-4">
                        <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                          {event.title}
                        </h2>
                        <p className="text-purple-300 font-semibold">
                          {event.date} | {event.time} | {event.location}
                        </p>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-purple-200 group-hover:text-white transition-colors duration-300">
                        {event.title
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0) + word.slice(1).toLowerCase()
                          )
                          .join(" ")}
                      </h3>
                      <div className="text-gray-300 mb-4">
                        <p className="text-sm font-medium text-purple-300">
                          {event.date} | {event.time}
                        </p>
                        <p className="text-sm font-medium text-purple-300">
                          In Person: {event.location}
                        </p>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {event.description}
                      </p>
                    </div>

                    {/* Hover Effects */}

                    {/* Floating Elements */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-purple-500/3 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>
      <FooterARVR />
    </div>
  );
};

export default EventsPage;
