// Benefits.jsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, TypingAnimation, AnimatedSpan } from "../components/ui/terminal";

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-[#4F21A1]/5 text-white px-6 py-20 md:px-12 md:py-28"
      id="benefits"
    >
      <div className="max-w-7xl md:mx-[10%] flex flex-col md:flex-row gap-2 md:gap-2 relative overflow-hidden">
        {/* Left Column → Terminal */}
        <motion.div
          className="w-full md:w-[65%] items-right"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Terminal className="h-[520px] md:h-[620px] text-base md:text-lg">
            {/* Command */}
            <TypingAnimation className="text-blue-400 font-mono">
                &gt; club.list-benefits()
            </TypingAnimation>

            {/* System messages */}
            <AnimatedSpan className="text-gray-400 font-mono">
                Connecting to AR/VR Club database...
            </AnimatedSpan>
            <AnimatedSpan className="text-green-500 font-mono">
                Authentication successful.
            </AnimatedSpan>
            <AnimatedSpan className="text-gray-400 font-mono">
                Fetching benefits. Please stand by...
            </AnimatedSpan>

            {/* Benefits list */}
            <AnimatedSpan className="text-purple-400 font-mono">
                ✔ Hands-On Workshops & Hackathons
            </AnimatedSpan>
            <AnimatedSpan className="text-purple-400 font-mono">
                ✔ Mentor-Supervised Capstone Projects
            </AnimatedSpan>
            <AnimatedSpan className="text-purple-400 font-mono">
                ✔ Real-Time Project Exploration
            </AnimatedSpan>
            <AnimatedSpan className="text-purple-400 font-mono">
                ✔ Internship Opportunities
            </AnimatedSpan>
            <AnimatedSpan className="text-purple-400 font-mono">
                ✔ Intercollege Competitions
            </AnimatedSpan>

            {/* Blue info message */}
            <AnimatedSpan className="text-blue-500 font-mono">
              <span>ℹ Updated 1 file:</span>
              <span className="pl-2">- AR-VRHub/membership.db</span>
            </AnimatedSpan>

            {/* Final message */}
            <TypingAnimation className="text-white font-mono">
                Access complete. Join us to start building the future.
            </TypingAnimation>
          </Terminal>
        </motion.div>

        {/* Right Column → Join Message */}
        <motion.div
          className="w-full md:w-[35%] flex flex-col justify-center text-center md:text-left gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-5xl font-orbitron text-[#EEEEEE]">
            Wondering <br /> About <br /> Membership perks?
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Whether you’re just starting out or already
            experienced, the AR/VR Club gives you the tools and community to
            experiment, grow, and shape the future of immersive technology!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
