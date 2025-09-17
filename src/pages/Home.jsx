import Hero from '../components/Hero'
import CharacterSequence from '../components/CharacterSequence'
import MarqueeText from "../components/MarqueeText";
import About from '../components/About'
import Benefits from '@/components/Benefits';

export default function Home() {
  return (
    <main>
      <Hero />
      <CharacterSequence />
      <MarqueeText />
      <About />
      <Benefits />
    </main>
  )
}