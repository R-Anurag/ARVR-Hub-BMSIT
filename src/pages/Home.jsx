import Hero from '../components/Hero'
import CharacterSequence from '../components/CharacterSequence'
import MarqueeText from "../components/MarqueeText";
import About from '../components/About'
import Benefits from '@/components/Benefits';
import FooterARVR from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      <Hero />
      <CharacterSequence />
      <MarqueeText />
      <About />

      {/*Gradient starts from Benefits + Footer */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(125,60,255,0.55)_0%,_rgba(0,0,0,1)_100%)]"></div>
        
        <Benefits />
        <FooterARVR />
      </div>
    </main>
  )
}
