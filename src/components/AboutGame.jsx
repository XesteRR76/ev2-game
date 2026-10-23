import React, { useState } from 'react';
import { Crosshair, Cpu, Globe2, Zap, ShieldAlert, Disc3, ChevronRight } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function AboutGame() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 'combat',
      title: 'MODULAR EXOSUITS',
      tag: 'TECH CLASS // MK-IV',
      desc: 'Harness high-agility biomechanical chassis equipped with directional thrusters, kinetic barriers, and cybernetic weapon mounts designed for brutal frontline dominance.',
      stats: [
        { label: 'Thrust Acceleration', value: '4.8G' },
        { label: 'Shield Absorption', value: '2,500 MJ' },
        { label: 'Customization Slots', value: '32 Modules' },
      ],
      icon: Cpu,
      color: 'from-cyan-500 to-blue-600',
      border: 'border-cyan-500/40',
    },
    {
      id: 'environment',
      title: 'DYNAMIC PLANETARY HAZARDS',
      tag: 'SECTORS & GRAVITY',
      desc: 'Fight across fractured planetary rings, toxic sulfur badlands, and crumbling orbital platforms where gravitational shifts and electromagnetic dust storms alter the rules of engagement.',
      stats: [
        { label: 'Gravity Variance', value: '0.12G - 1.8G' },
        { label: 'Atmospheric Storms', value: 'Radiation / Mist' },
        { label: 'Destructible Arenas', value: 'Fully Dynamic' },
      ],
      icon: Globe2,
      color: 'from-orange-500 to-rose-600',
      border: 'border-orange-500/40',
    },
    {
      id: 'netcode',
      title: 'SUB-TICK TACTICAL NETCODE',
      tag: 'NETWORK ARCHITECTURE',
      desc: 'Custom-built for competitive esports precision. 128Hz server simulation rate guarantees lightning-fast hit registration, zero ghost bullets, and ultra-fluid zero-g flight maneuvers.',
      stats: [
        { label: 'Server Tickrate', value: '128 Hz' },
        { label: 'Hit Reg Accuracy', value: '99.98%' },
        { label: 'Average Match Ping', value: '< 28 ms' },
      ],
      icon: Zap,
      color: 'from-purple-500 to-indigo-600',
      border: 'border-purple-500/40',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative z-10 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-hud text-xs text-cyan-400 tracking-widest uppercase mb-2">
            // BRIEFING & INTEL ARCHIVE
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
            ABOUT GAME
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-orange-500 mx-auto mt-4" />
          <p className="max-w-2xl mx-auto text-slate-400 mt-4 text-sm sm:text-base">
            Step into the vast world where high stakes and sci-fi action collide. EV2 is an upcoming fast-paced multiplayer shooter with next-gen visuals, intense PvP battles, and custom exo-suits designed for supremacy.
          </p>
        </div>

        {/* Interactive Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Tab Selector */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = activeTab === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    playSound('select');
                    setActiveTab(idx);
                  }}
                  onMouseEnter={() => playSound('hover')}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? `glass-panel-glow ${item.border} bg-slate-900/80`
                      : 'glass-panel hover:border-slate-600/60 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${item.color} text-white shadow-md`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-hud text-[11px] text-cyan-400 tracking-wider mb-1">
                        {item.tag}
                      </div>
                      <h3 className="font-display font-bold text-lg text-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-cyan-400 self-center transition-transform ${
                        isSelected ? 'translate-x-1 text-cyan-300' : 'text-slate-600'
                      }`}
                    />
                  </div>

                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-orange-500" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Feature Holo-Display */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden border border-cyan-500/30 shadow-2xl">
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Disc3 className="w-5 h-5 text-orange-400 animate-spin" />
                  <span className="font-hud text-xs text-slate-300 tracking-widest uppercase">
                    DATASTREAM // {pillars[activeTab].id.toUpperCase()}
                  </span>
                </div>
                <span className="font-hud text-xs text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30">
                  CLASSIFIED MK-IV
                </span>
              </div>

              <h4 className="font-display font-black text-2xl sm:text-3xl text-white mb-4">
                {pillars[activeTab].title}
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {pillars[activeTab].desc}
              </p>

              {/* Stats telemetry */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
                {pillars[activeTab].stats.map((s) => (
                  <div key={s.label} className="bg-slate-900/60 p-4 rounded-lg border border-slate-800">
                    <div className="font-hud text-[10px] text-slate-400 uppercase tracking-wider">
                      {s.label}
                    </div>
                    <div className="font-display font-black text-xl text-cyan-300 mt-1">
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
