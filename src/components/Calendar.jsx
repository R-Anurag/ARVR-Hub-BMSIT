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
      <div className="md:w-1/3 ">
        <h2 className="text-2xl font-semibold mb-4">ARVR Calendar</h2>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border shadow-sm"
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

        {selectedEvents.length > 0
          ? selectedEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-gray-800/80 p-4 rounded-xl border border-gray-700 shadow hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-indigo-400">
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
                <p className="text-gray-400 mt-2">{event.description}</p>
                {event.link && (
                  <a
                    href={event.link}
                    className="inline-block mt-3 text-sm text-indigo-400 hover:underline"
                  >
                    Register
                  </a>
                )}
              </div>
            ))
          : upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-gray-800/70 p-3 rounded-lg border border-gray-700 shadow hover:shadow-md transition-shadow duration-200 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-indigo-400">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {event.date} | {event.time}
                  </p>
                  <p className="text-gray-400 text-sm">{event.venue}</p>
                </div>
                {event.link && (
                  <a
                    href={event.link}
                    className="text-sm text-indigo-400 hover:underline"
                  >
                    Register
                  </a>
                )}
              </div>
            ))}
      </div>
    </div>
  );
}
