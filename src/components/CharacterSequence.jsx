import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 160;

const CharacterSequence = () => {
  const canvasRef = useRef(null);
  const images = useRef([]);
  const obj = useRef({ frame: 0 });

  const currentFrame = (index) =>
    `/characterImages/ezgif-frame-${String(index).padStart(3, "0")}.png`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // preload images
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.current.push(img);
    }

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
        anticipatePin: 1, // ✅ smooth pin transition
      },
      onUpdate: () => drawFrame(Math.floor(obj.current.frame)),
    });

    // // optional fade-in polish
    // gsap.fromTo(
    //   canvas,
    //   { opacity: 0 },
    //   {
    //     opacity: 1,
    //     duration: 0.5,
    //     scrollTrigger: {
    //       trigger: canvas.parentElement,
    //       start: "top+=50 top", // fade in just before pin
    //       end: "top top",
    //       scrub: true,
    //     },
    //   }
    // );

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      if (scrollAnim.scrollTrigger) scrollAnim.scrollTrigger.kill();
    };
  }, []);

  return (
    <div
      className="relative bg-black"
    >
      <canvas ref={canvasRef} className="sticky top-0 w-full h-screen"></canvas>
    </div>
  );
};

export default CharacterSequence;
