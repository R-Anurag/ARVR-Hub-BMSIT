import Hero from '../components/Hero'
import CharacterSequence from '../components/CharacterSequence'
import MarqueeText from "../components/MarqueeText";
import About from '../components/About'
import Benefits from '@/components/Benefits';
import FooterARVR from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white relative overflow-hidden">
      <Hero />
      <CharacterSequence />
      <MarqueeText />
      <About />

      {/* Shared wrapper for Benefits + Footer */}
      <div className="relative">
        {/* Continuous Gradient Background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(123,45,255,0.4)_0%,_transparent_70%)]" />

        {/* Content sits above gradient */}
        <div className="relative z-10">
          <Benefits />
          <FooterARVR />
        </div>
      </div>
    </main>
  )
}
