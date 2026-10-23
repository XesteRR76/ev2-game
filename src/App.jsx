import React, { useState } from 'react';
import CosmicCanvas from './components/CosmicCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutGame from './components/AboutGame';
import JourneyAhead from './components/JourneyAhead';
import PickYourSuit from './components/PickYourSuit';
import DeathMist from './components/DeathMist';
import EnlistModal from './components/EnlistModal';
import TechStackModal from './components/TechStackModal';
import TrailerModal from './components/TrailerModal';
import Footer from './components/Footer';

export default function App() {
  const [enlistOpen, setEnlistOpen] = useState(false);
  const [techModalOpen, setTechModalOpen] = useState(false);
  const [trailerOpen, setTrailerOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#05070f] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Starfield Canvas with Mouse Interaction */}
      <CosmicCanvas />

      {/* Top Navbar */}
      <Navbar
        onOpenEnlist={() => setEnlistOpen(true)}
        onOpenTechModal={() => setTechModalOpen(true)}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero
          onOpenEnlist={() => setEnlistOpen(true)}
          onOpenTrailer={() => setTrailerOpen(true)}
        />
        <AboutGame />
        <JourneyAhead />
        <PickYourSuit onOpenEnlist={() => setEnlistOpen(true)} />
        <DeathMist />
      </main>

      {/* Footer */}
      <Footer
        onOpenTechModal={() => setTechModalOpen(true)}
        onOpenEnlist={() => setEnlistOpen(true)}
      />

      {/* Interactive Modals */}
      <EnlistModal
        isOpen={enlistOpen}
        onClose={() => setEnlistOpen(false)}
      />
      <TechStackModal
        isOpen={techModalOpen}
        onClose={() => setTechModalOpen(false)}
      />
      <TrailerModal
        isOpen={trailerOpen}
        onClose={() => setTrailerOpen(false)}
      />
    </div>
  );
}
