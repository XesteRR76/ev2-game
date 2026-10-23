import React from 'react';
import { X, Play, Shield, Activity } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function TrailerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl glass-panel-glow rounded-2xl border border-cyan-500/50 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={() => {
            playSound('click');
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-cyan-400 font-hud text-xs tracking-widest mb-2">
          <Activity className="w-4 h-4 animate-pulse" />
          <span>CINEMATIC // TACTICAL ARCHIVE</span>
        </div>
        <h3 className="font-display font-black text-2xl text-white mb-4">
          EV2: SECTOR 07 INVASION
        </h3>

        {/* Cinematic Preview Player Area */}
        <div className="relative aspect-video rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center overflow-hidden group">
          {/* Cosmic Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-900/40 via-slate-900 to-cyan-950/40 opacity-70" />

          {/* Grid Lines */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-[0_0_30px_rgba(56,189,248,0.6)] group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-cyan-400 translate-x-0.5" />
            </div>
            <span className="font-display font-bold text-sm text-white tracking-widest mt-4 uppercase">
              TRANSMISSION PLAYBACK SIMULATION
            </span>
            <span className="font-mono text-xs text-slate-400 mt-1">
              Resolution: 4K UHD 60FPS // Audio: 7.1 Spatial Atmos
            </span>
          </div>

          {/* HUD Overlay elements */}
          <div className="absolute top-4 left-4 font-hud text-[11px] text-cyan-400">
            REC ● 00:03:42:18
          </div>
          <div className="absolute bottom-4 left-4 font-hud text-[11px] text-slate-400">
            ENCRYPTION: QUANTUM 4096-BIT
          </div>
          <div className="absolute bottom-4 right-4 font-hud text-[11px] text-orange-400">
            SECTOR 07 // HOSTILES DETECTED
          </div>
        </div>
      </div>
    </div>
  );
}
