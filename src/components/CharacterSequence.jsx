import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 160;

const CharacterSequence = () => {
  const canvasRef = useRef(null);
  const images = useRef([]);
  const obj = useRef({ frame: 0 });
  const [loading, setLoading] = useState(true); // optional loading state

  const currentFrame = (index) =>
    `characterImages/ezgif-frame-${String(index).padStart(3, "0")}.png`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Preload images and wait until all are loaded
    const loadImages = async () => {
      const promises = [];
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.current.push(img);

        // Wrap image load in a promise
        const promise = new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // resolve even if image fails
        });
        promises.push(promise);
      }
      await Promise.all(promises);
    };

    const drawFrame = (frame) => {
      const img = images.current[frame];
      if (!img) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const scale = 0.7; // shrink character size
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio) * scale;

      const centerShiftX = (canvas.width - img.width * ratio) / 2;
      const centerShiftY = (canvas.height - img.height * ratio) / 2;

      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShiftX,
        centerShiftY,
        img.width * ratio,
        img.height * ratio
      );
    };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(Math.floor(obj.current.frame));
    };

    const initAnimation = async () => {
      await loadImages(); // wait for all frames
      setLoading(false); // hide loading indicator

      setCanvasSize();
      window.addEventListener("resize", setCanvasSize);

      const scrollAnim = gsap.to(obj.current, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: canvas.parentElement,
          start: "top top",
          end: () => `+=${window.innerHeight * 2}`,
          scrub: 0.2,
          pin: canvas,
          anticipatePin: 1, // smooth pin transition
        },
        onUpdate: () => drawFrame(Math.floor(obj.current.frame)),
      });

      return () => {
        window.removeEventListener("resize", setCanvasSize);
        if (scrollAnim.scrollTrigger) scrollAnim.scrollTrigger.kill();
      };
    };

    initAnimation();
  }, []);

  return (
    <div className="relative bg-black">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center text-white text-xl z-10">
          Loading animation...
        </div>
      )}
      <canvas ref={canvasRef} className="sticky top-0 w-full h-screen"></canvas>
    </div>
  );
};

export default CharacterSequence;
