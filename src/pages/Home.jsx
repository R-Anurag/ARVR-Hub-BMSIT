export default function Home() {
  return (
    <main className="relative bg-black text-white">
      <Hero />
      <CharacterSequence />
      <MarqueeText />
      <About />

      {/* ✅ Single continuous gradient for Benefits + Footer */}
      <section className="relative">
        {/* Gradient sits behind both Benefits & Footer */}
        <div className="absolute inset-0 -z-10 h-full w-full 
          bg-[radial-gradient(circle_at_center,_rgba(125,60,255,0.5)_0%,_rgba(0,0,0,1)_100%)] 
          pointer-events-none">
        </div>

        <Benefits />
        <FooterARVR />
      </section>
    </main>
  )
}
