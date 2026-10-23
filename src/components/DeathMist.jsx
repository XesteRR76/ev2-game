import React, { useState } from 'react';
import { Skull, AlertTriangle, ShieldCheck, Wind, Radio, EyeOff, ThermometerSnowflake } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function DeathMist() {
  const [hazardLevel, setHazardLevel] = useState('CRITICAL');

  const hazards = [
    {
      title: 'IONIC CORROSION',
      icon: Skull,
      desc: 'Active nanite aerosol that dissolves standard energy shields within 45 seconds of continuous exposure.',
      mitigation: 'Equip Class-A sealed atmospheric scrubbers or seek hardened bunker structures.',
      level: 'FATAL (95%)',
    },
    {
      title: 'ZERO-VISIBILITY MIST',
      icon: EyeOff,
      desc: 'Infrared-absorbing micro-particles blinding long-range optics and rendering thermal imaging ineffective.',
      mitigation: 'Deploy acoustic radar pulses or sonar ping tags to mark flanking combatants.',
      level: 'SEVERE (80%)',
    },
    {
      title: 'THERMAL FLUX FISSURES',
      icon: AlertTriangle,
      desc: 'Subterranean plasma vents erupting without seismic warning across volcanic rift sectors.',
      mitigation: 'Monitor geiger HUD alerts and maintain minimum 15m clearance from sulfur craters.',
      level: 'HAZARDOUS (70%)',
    },
  ];

  return (
    <section id="deathmist" className="py-24 px-4 relative z-10 border-t border-slate-800/60 overflow-hidden">
      {/* Background Toxic/Mist Atmospheric Fog */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-600/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header as in video frame 42 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-red-950/60 border border-red-500/40 text-red-400 font-hud text-xs tracking-widest uppercase mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span>BIO-HAZARD PROTOCOL // LEVEL 5</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
            DEATH MIST
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-purple-600 mx-auto mt-4" />
          <p className="max-w-2xl mx-auto text-slate-300 mt-4 text-sm sm:text-base leading-relaxed">
            The uncharted planetary sectors are engulfed in toxic ionized mist. Atmospheric storms shift without warning, creating lethal choke points and high-reward extraction caches.
          </p>
        </div>

        {/* Hazard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {hazards.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                onMouseEnter={() => playSound('hover')}
                className="glass-panel-danger p-6 rounded-2xl relative overflow-hidden group hover:border-red-500/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-red-950/80 border border-red-500/30 text-red-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-hud text-xs text-red-400 font-bold tracking-wider">
                    {h.level}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {h.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {h.desc}
                </p>

                <div className="pt-4 border-t border-red-950/60 bg-black/30 -mx-6 -mb-6 p-4">
                  <div className="font-hud text-[10px] text-red-300/80 uppercase">
                    COUNTERMEASURE:
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-sans">
                    {h.mitigation}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Planetary Atmospheric Telemetry Scanner */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-red-500/30 bg-slate-950/70">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-red-950/80 border border-red-500/50 flex items-center justify-center shrink-0 animate-pulse">
                <Radio className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <div className="font-hud text-xs text-red-400 tracking-wider">
                  ATMOSPHERIC SCANNER // LIVE SATELLITE FEED
                </div>
                <div className="font-display font-bold text-lg text-white mt-0.5">
                  Sector 07 Mist Density: 84.6% PPM
                </div>
                <div className="text-xs text-slate-400">
                  Recommended Exosuit Grade: Class-4 Filter Minimum
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full md:w-auto">
              <div className="text-right hidden sm:block">
                <div className="font-hud text-[11px] text-slate-400">SURVIVAL WINDOW</div>
                <div className="font-display font-bold text-cyan-300">04m : 18s Remaining</div>
              </div>
              <div className="px-4 py-2 rounded-lg bg-red-950/80 border border-red-500/40 text-red-300 font-hud text-xs tracking-wider uppercase font-bold animate-pulse">
                MIST EXPANSION IN PROGRESS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
