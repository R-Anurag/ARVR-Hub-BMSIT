import { BoxRevealDemo } from "./BoxReveal";
import { PixelImageDemo } from "./PixelImage";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArcTimeHistory } from '@/components/ClubHistory';
import { MagicCard } from "@/components/ui/magic-card";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      className="c-space section-spacing bg-[#4F21A1]/20 px-6 py-20 md:px-12 md:py-28"
      id="about"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-12 w-full">
        {/* Text Section */}
        <motion.div
          className="flex-1 w-full flex flex-col justify-start items-center md:items-start text-center md:text-left pl-4 md:pl-8"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <BoxRevealDemo />
        </motion.div>

        {/* Image Section */}
        <motion.div
          ref={ref}
          className="flex-1 w-full flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-full max-w-xl md:max-w-2xl flex justify-center items-center">
            <PixelImageDemo />
          </div>
        </motion.div>
      </div>

      <MagicCard className="bg-[#4F21A1]/30 px-6 py-10 md:px-12 md:py-15 mt-20 rounded-3xl max-w-4xl mx-auto text-center">
      
      {/* Bottom Text */}
      {/* <motion.div */}
        {/* initial={{ opacity: 0, y: 20 }} */}
        {/* animate={isInView ? { opacity: 1, y: 0 } : {}} */}
        {/* transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} */}
        {/* className="mt-16 text-center max-w-3xl mx-auto" */}
      {/* > */}
        <h2 className="text-3xl md:text-4xl font-orbitron text-[#EEEEEE]">
          We&apos;ve come a long way!
        </h2>
        <p className="mt-4 md:text-l text-[#D9BFFF]">
          A journey through our club&apos;s milestones and memorable moments.
        </p>
      {/* </motion.div> */}

      {/* Arc Timeline */}
      <div className="mt-12">
        <ArcTimeHistory />
      </div>
      </MagicCard>

    </section>
  );
};

export default About;
