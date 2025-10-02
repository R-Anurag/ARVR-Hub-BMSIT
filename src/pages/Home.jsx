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
      <Benefits />
      {/* Benefits + Footer with shared gradient */}
      <section className="relative z-0">
  <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(125,60,255,0.55)_0%,_rgba(0,0,0,1)_80%)]"></div>
  
  <FooterARVR />
</section>


    </main>
  )
}
