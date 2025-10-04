import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

const events = [
  {
    title: "VR Game Jam",
    date: "2025-10-15",
    time: "10:00 AM - 5:00 PM",
    venue: "ARVR Lab, BMSIT",
    description: "A day-long immersive VR game development hackathon.",
    link: "#",
  },
  {
    title: "AR Art Exhibition",
    date: "2025-10-20",
    time: "12:00 PM - 6:00 PM",
    venue: "Innovation Hall, BMSIT",
    description: "Explore stunning augmented reality art installations.",
    link: "#",
  },
];

export function CalendarDemo() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const selectedEvents = events.filter(
    (event) =>
      new Date(event.date).toDateString() === selectedDate.toDateString()
  );

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= new Date()
  );

  // Create a set of event dates for easy lookup
  const eventDatesSet = new Set(
    events.map((e) => new Date(e.date).toDateString())
  );

  return (
    <div className="flex flex-col md:flex-row min-h-130px bg-transparent text-white p-8 gap-8">
      {/* Calendar Section */}
      <div className="md:w-1/3 flex flex-col items-center justify-center ">
        <h2 className="text-2xl font-semibold mb-4">ARVR Calendar</h2>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          captionLayout="dropdown"
          modifiers={{
            hasEvent: (date) => eventDatesSet.has(date.toDateString()),
          }}
          modifiersClassNames={{
            hasEvent: "relative",
          }}
          components={{
            DayContent: ({ date, modifiers, ...props }) => (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <span>{date.getDate()}</span>
                {modifiers.hasEvent && (
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 block"></span>
                )}
              </div>
            ),
          }}
        />
      </div>

      {/* Events Section */}
      <div className="md:w-2/3 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>

        {selectedEvents.length > 0 || upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(selectedEvents.length > 0 ? selectedEvents : upcomingEvents).map(
              (event, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-purple-400/40 shadow-sm hover:shadow-md transition-all duration-300"
                  style={{
                    backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
                    backgroundSize: "32px 32px",
                    backgroundColor: "#0b0b1a",
                  }}
                >
                  <h3 className="text-lg font-semibold text-purple-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 mt-1">
                    <span className="font-semibold">Date:</span> {event.date}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold">Time:</span> {event.time}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold">Venue:</span> {event.venue}
                  </p>
                  {event.description && (
                    <p className="text-gray-400 mt-2">{event.description}</p>
                  )}
                  {event.link && (
                    <a
                      href={event.link}
                      className="inline-block mt-3 px-4 py-2 text-sm font-medium text-purple-300 border border-purple-400/50 rounded-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
                      style={{
                        backgroundColor: "#0b0b1a",
                      }}
                    >
                      Register
                    </a>
                  )}
                </div>
              )
            )}
          </div>
        ) : (
          <p className="text-gray-400 italic">No upcoming events</p>
        )}
      </div>
    </div>
  );
}
