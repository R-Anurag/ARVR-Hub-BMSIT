import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/ui/box-reveal";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"; 

export function BoxRevealDemo() {
  const techHighlights = [
    "Unity, Unreal Engine, and Godot for immersive worlds",
    "ARKit, ARCore, and WebXR for augmented experiences",
    "Blender & Maya for 3D modeling and animations",
    "C#, JavaScript, Python & TypeScript for logic and interactivity",
  ];

  // Animation variants for staggered slide-in
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <div className="size-full max-w-lg flex flex-col justify-center overflow-hidden font-geistsans items-center md:items-start">
      {/* Section Title */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-orbitron text-center md:text-left">Who Are We?</p>
      </BoxReveal>

      {/* Subtitle */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[#B48CDE] mt-[0.5rem] text-[1rem]">
          A team passionate about building next-gen AR/VR experiences.
        </p>
      </BoxReveal>

      {/* Arrow Highlights with Framer Motion (no BoxReveal) */}
      <div className="mt-6 flex flex-col gap-1.5">
        {techHighlights.map((line, index) => (
          <motion.p
            key={index}
            className="text-[0.95rem] text-gray-300 text-left flex items-center gap-2 font-geistmono"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={listItemVariants}
          >
            <span className="text-[#B48CDE] text-lg">→</span>
            {line}
          </motion.p>
        ))}
      </div>

      {/* CTA Button */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <NavLink to="/Teams">
          <Button className="mt-[1.6rem] bg-[#5046e6] text-lg">
            See the Team
          </Button>
        </NavLink>
      </BoxReveal>
    </div>
  );
}
