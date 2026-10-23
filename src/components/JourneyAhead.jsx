import React, { useState } from 'react';
import { Milestone, CheckCircle2, Clock, Sparkles, Orbit, Compass, ArrowRight } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function JourneyAhead() {
  const [selectedMilestone, setSelectedMilestone] = useState(1);

  const milestones = [
    {
      id: 0,
      phase: 'PHASE 01',
      title: 'FOUNDATION & COMBAT ENGINE',
      date: 'Q3 2024',
      status: 'COMPLETED',
      summary: 'Prototyped core zero-G locomotion, kinetic suit dampeners, and procedural weapon ballistic simulation.',
      deliverables: ['Custom Physics Pipeline', 'Netcode Prototype 60Hz', 'Internal Stress Arena'],
    },
    {
      id: 1,
      phase: 'PHASE 02',
      title: 'ALPHA PLAYTEST // SECTOR 07',
      date: 'CURRENT LIVE',
      status: 'ACTIVE NOW',
      summary: 'Closed combat validation with over 100,000 enlisted operatives. Real-time telemetry optimization and weapon balancing.',
      deliverables: ['4 Exo-Suit Archetypes', 'Death Mist Hazardous Zone', 'Server Scaling to 128Hz'],
    },
    {
      id: 2,
      phase: 'PHASE 03',
      title: 'CLOSED BETA: ORBITAL SIEGE',
      date: 'Q1 2027',
      status: 'UPCOMING',
      summary: 'Introduction of massive 32v32 fleet boarding operations and dynamic planetary drop pods.',
      deliverables: ['Fleet Siege Game Mode', 'Dynamic Planetary Storms', 'Ranked Circuit Tier 1'],
    },
    {
      id: 3,
      phase: 'PHASE 04',
      title: 'GLOBAL CROSS-PLATFORM LAUNCH',
      date: 'Q3 2027',
      status: 'SCHEDULED',
      summary: 'Worldwide commercial deployment on PC, PlayStation 5, and Xbox Series X|S with simultaneous cross-play and cross-progression.',
      deliverables: ['Cross-Play Matchmaking', 'Season 01 Battle Pass', 'Esports Global Open'],
    },
    {
      id: 4,
      phase: 'PHASE 05',
      title: 'EXPANSION: DEEP VOID EXPANSE',
      date: '2028+',
      status: 'PLANNED',
      summary: 'Persistent galaxy conquest metagame, player-run orbital stations, and uncharted deep-space anomaly raids.',
      deliverables: ['Player Starbases', 'Raid Encounters', 'Faction Territory War'],
    },
  ];

  return (
    <section id="journey" className="py-24 px-4 relative z-10 overflow-hidden">
      {/* Background Orbital Glow as in Video Frame 40 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="w-full h-full bg-radial from-rose-900/15 via-orange-900/10 to-transparent blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-hud text-xs text-orange-400 tracking-widest uppercase mb-2">
            // STRATEGIC ROADMAP & EXPANSION
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
            JOURNEY AHEAD
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-rose-500 to-cyan-400 mx-auto mt-4" />
          <p className="max-w-2xl mx-auto text-slate-300 mt-4 text-sm sm:text-base leading-relaxed">
            Embark on the journey of EV2 - an epic fusion of progress and ambition. Discover our achievements and set sights on future milestones.
          </p>
        </div>

        {/* Curved Planetary Arc Visual Representation (from Frame 40) */}
        <div className="relative mb-14 py-8">
          {/* Glowing Arc Line */}
          <div className="relative h-20 flex items-center justify-between max-w-4xl mx-auto px-4">
            {/* Glowing trajectory beam */}
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-emerald-500 via-cyan-400 to-orange-500 shadow-[0_0_15px_rgba(56,189,248,0.7)]" />

            {/* Checkpoint nodes */}
            {milestones.map((m, idx) => {
              const isSelected = selectedMilestone === idx;
              const isPast = m.status === 'COMPLETED';
              const isCurrent = m.status === 'ACTIVE NOW';

              return (
                <button
                  key={m.id}
                  onClick={() => {
                    playSound('select');
                    setSelectedMilestone(idx);
                  }}
                  onMouseEnter={() => playSound('hover')}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  {/* Glowing Node Button */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-black text-xs transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-br from-cyan-400 to-orange-500 text-slate-950 scale-125 shadow-[0_0_25px_rgba(56,189,248,0.9)] ring-4 ring-cyan-400/30'
                        : isCurrent
                        ? 'bg-cyan-500 text-slate-950 scale-110 shadow-[0_0_20px_rgba(56,189,248,0.7)] animate-pulse'
                        : isPast
                        ? 'bg-slate-800 text-emerald-400 border border-emerald-500/50'
                        : 'bg-slate-900 text-slate-400 border border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    0{idx + 1}
                  </div>

                  {/* Label under node */}
                  <div className="mt-3 text-center">
                    <span
                      className={`font-hud text-[11px] block tracking-wider uppercase transition-colors ${
                        isSelected ? 'text-cyan-300 font-bold' : 'text-slate-400'
                      }`}
                    >
                      {m.phase}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500">
                      {m.date}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Selected Milestone Briefing Card */}
        <div className="max-w-3xl mx-auto">
          {(() => {
            const current = milestones[selectedMilestone];
            return (
              <div className="glass-panel-glow p-8 rounded-2xl relative overflow-hidden border border-cyan-500/40 shadow-2xl">
                {/* Background watermarked phase number */}
                <div className="absolute right-4 -bottom-6 font-display font-black text-9xl text-slate-800/20 select-none pointer-events-none">
                  0{selectedMilestone + 1}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <span
                      className={`px-3 py-1 rounded text-xs font-hud font-bold tracking-widest ${
                        current.status === 'COMPLETED'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                          : current.status === 'ACTIVE NOW'
                          ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40 animate-pulse'
                          : 'bg-orange-950 text-orange-400 border border-orange-500/40'
                      }`}
                    >
                      {current.status}
                    </span>
                    <span className="font-hud text-xs text-slate-400 tracking-wider">
                      TARGET: {current.date}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-cyan-400/80">
                    SECTOR // 0{selectedMilestone + 1}-TRANSMISSION
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-4">
                  {current.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {current.summary}
                </p>

                <div className="border-t border-slate-800 pt-6">
                  <div className="font-hud text-xs text-cyan-400 tracking-wider uppercase mb-3">
                    // KEY DELIVERABLES & PROTOCOLS:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {current.deliverables.map((item) => (
                      <div
                        key={item}
                        className="bg-slate-900/80 px-3.5 py-2.5 rounded-lg border border-slate-800 flex items-center space-x-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="text-xs text-slate-200 font-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
