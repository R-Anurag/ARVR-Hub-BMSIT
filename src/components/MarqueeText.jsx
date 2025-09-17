import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "./registry/magicui/scroll-based-velocity";

const slogans = [
  "WE ARE THE PIONEERS",
  "YOUR CREATIVITY, AMPLIFIED",
  "GET HANDS-ON EXPERIENCE",
  "DON'T JUST PLAY, CREATE",
  "READY TO BUILD?",
  "EXPLORE NEW WORLDS",
  "CREATE THE FUTURE",
  "BUILD IMMERSIVE EXPERIENCES",
  "LEARN FROM INDUSTRY LEADERS",
  "NETWORK WITH INNOVATORS",
  "JOIN THE AR/VR REVOLUTION",
];

export default function MarqueeText() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20 bg-black">
      <ScrollVelocityContainer className="text-1xl md:text-3xl font-bold tracking-tight space-x-12">
        {/* Row 1 - 6 slogans */}
        <ScrollVelocityRow baseVelocity={5} direction={1}>
          {slogans.slice(0, 6).map((text, idx) => (
            <span key={idx} className="mx-8 whitespace-nowrap text-[#B48CDE]">
              {text}
            </span>
          ))}
        </ScrollVelocityRow>

        {/* Row 2 - 5 slogans */}
        <ScrollVelocityRow baseVelocity={5} direction={-1}>
          {slogans.slice(6).map((text, idx) => (
            <span key={idx} className="mx-8 whitespace-nowrap text-[#EEEEEE]">
              {text}
            </span>
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      {/* Fading edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  );
}
