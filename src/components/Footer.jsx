"use client";
import { useScroll, useTransform } from "motion/react";
import React from "react";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect";

export default function FooterARVR() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="relative h-[100vh] w-full bg-black text-white flex flex-col justify-end"
      ref={ref}
    >
      {/* Gemini Background + Title/Byline */}
      <GoogleGeminiEffect
        title="Connect with AR/VR Hub"
        description="… build your next extended reality experience with us!"
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}
