import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import { FlipWords } from "./FlipWords";

const rotatingWords = ["Cool", "Innovative", "Inspiring", "Immersive", "Futuristic"];

const Hero = () => {
  const ref = useRef(null);

  // --- Scroll parallax ---
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yCursor = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const xCursor = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yMessage = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const xMessage = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // --- Idle scale animation control ---
  const [isIdle, setIsIdle] = useState(false);
  let idleTimeout = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsIdle(false);
      clearTimeout(idleTimeout.current);

      idleTimeout.current = setTimeout(() => setIsIdle(true), 2000);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(idleTimeout.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="bg-black bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] text-white overflow-hidden relative"
    >
      <div className="absolute h-[375px] w-[750px] sm:w-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_89%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-150px)]"></div>

      <div className="container relative z-10">
        <motion.img
          src={cursorImage}
          alt="Cursor"
          style={{ x: xCursor, y: yCursor }}
          animate={isIdle ? { scale: [1, 1.1, 1], y: [0, -10, 0] } : { scale: 1, y: 0 }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-5 sm:w-[120px] sm:h-[120px] absolute -top-[20px] left-[100px] hidden sm:inline"
        />

        <motion.img
          src={messageImage}
          alt="Message"
          style={{ x: xMessage, y: yMessage }}
          animate={isIdle ? { scale: [1, 1.1, 1], y: [0, 10, 0] } : { scale: 1, y: 0 }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-5 sm:w-[120px] sm:h-[120px] absolute top-[100px] right-[120px] hidden sm:inline"
        />

        {/* Text content */}
        <div className="flex justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ y: yText }}
            className="text-5xl md:text-7xl font-orbitron font-bold text-center tracking-tighter mt-0 relative z-50"
          >
            <span>AR/VR Hub</span>
            <br />
            <span className="text-3xl md:text-5xl"> is </span>
            <br />
            <span className="text-[#B48CDE]">
              <FlipWords words={rotatingWords} className="md:text-8xl font-black" />
            </span>
          </motion.h1>
        </div>

        <div className="flex justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
            style={{ y: yText }}
            className="text-lg md:text-xl font-poppins text-center text-gray-300 mt-8 mb-[120px] max-w-md"
          >
            Your gateway to the world of Augmented and Virtual Reality.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
