import React from 'react';
import { Shield, Play, Terminal, ChevronDown, Activity, Users, Radio } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function Hero({ onOpenEnlist, onOpenTrailer }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Solar/Cosmic Ring Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] md:w-[720px] lg:w-[840px] aspect-square pointer-events-none -z-10">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-700/30 via-orange-600/35 to-cyan-500/25 blur-[90px] animate-pulse-glow" />
        <div className="absolute inset-[15%] rounded-full bg-radial from-orange-500/20 via-rose-950/40 to-[#05070f] border border-orange-500/40 shadow-[0_0_80px_rgba(249,115,22,0.45)]" />
        <div className="absolute inset-[8%] rounded-full border border-dashed border-cyan-400/25 animate-orbit" />
      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        {/* HUD Transmission Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 font-hud text-xs tracking-widest mb-8 backdrop-blur-md shadow-lg shadow-cyan-950/40">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-slate-400">СТАТУС:</span>
          <span className="text-cyan-400 font-bold">АЛЬФА-ТЕСТ АКТИВЕН</span>
          <span className="text-slate-600">|</span>
          <span className="text-orange-400">СЕКТОР-07</span>
        </div>

        {/* Central EV2 Emblem & Title from Reels */}
        <div className="relative mb-6 group cursor-default">
          <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-4 relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 via-red-600 to-purple-800 blur-md opacity-80 group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#080d1e] border-2 border-orange-400/80 flex items-center justify-center shadow-[inset_0_0_25px_rgba(249,115,22,0.6)]">
              <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-wider drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">
                EV2
              </span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-md uppercase">
            НАДЕНЬ ЭКЗОКОСТЮМ И СПАСИ БУДУЩЕЕ
          </h1>
        </div>

        {/* Cinematic Description */}
        <p className="max-w-2xl text-slate-300 font-sans text-base sm:text-lg leading-relaxed mb-10 text-balance">
          Высокооктановые тактические бои на расколотых орбитальных кольцах и неизведанных рубежах. Управляйте модульными экзоскелетами, используйте невесомость и подчините планетарную сеть.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-16 w-full sm:w-auto">
          {/* Primary Enlist */}
          <button
            onClick={() => {
              playSound('warp');
              onOpenEnlist();
            }}
            onMouseEnter={() => playSound('hover')}
            className="w-full sm:w-auto relative group px-8 py-4 font-display font-extrabold text-sm tracking-widest text-slate-950 uppercase cursor-pointer overflow-hidden transition-all duration-300"
            style={{
              clipPath: 'polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%, 0% 16px)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-300 to-orange-400 group-hover:scale-105 transition-transform duration-300" />
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>ЗАПИСАТЬСЯ НА ТЕСТ</span>
            </span>
          </button>

          {/* Secondary Trailer */}
          <button
            onClick={() => {
              playSound('select');
              onOpenTrailer();
            }}
            onMouseEnter={() => playSound('hover')}
            className="w-full sm:w-auto relative group px-8 py-4 font-display font-semibold text-sm tracking-widest text-cyan-300 uppercase cursor-pointer glass-panel border border-cyan-500/40 hover:border-cyan-400 hover:text-white transition-all duration-300"
            style={{
              clipPath: 'polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%, 0% 16px)',
            }}
          >
            <span className="flex items-center justify-center space-x-2">
              <Play className="w-4 h-4 fill-cyan-400 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>ТАКТИЧЕСКИЙ БРИФИНГ</span>
            </span>
          </button>
        </div>

        {/* Live HUD Telemetry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-6 border-t border-slate-800/80">
          <div className="glass-panel p-4 rounded-lg text-left">
            <div className="flex items-center space-x-2 text-cyan-400 font-hud text-xs mb-1">
              <Users className="w-3.5 h-3.5" />
              <span>ПИЛОТОВ ОНЛАЙН</span>
            </div>
            <div className="font-display font-bold text-2xl text-white tracking-wide">142,890+</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1">Кросс-платформенный пул</div>
          </div>

          <div className="glass-panel p-4 rounded-lg text-left">
            <div className="flex items-center space-x-2 text-emerald-400 font-hud text-xs mb-1">
              <Activity className="w-3.5 h-3.5" />
              <span>ТИКРЕЙТ СЕРВЕРОВ</span>
            </div>
            <div className="font-display font-bold text-2xl text-white tracking-wide">128 Гц</div>
            <div className="text-[11px] font-mono text-emerald-400/80 mt-1">Субтиковая точность</div>
          </div>

          <div className="glass-panel p-4 rounded-lg text-left">
            <div className="flex items-center space-x-2 text-orange-400 font-hud text-xs mb-1">
              <Radio className="w-3.5 h-3.5" />
              <span>ЗОНЫ БОЕВЫХ ДЕЙСТВИЙ</span>
            </div>
            <div className="font-display font-bold text-2xl text-white tracking-wide">12 СЕКТОРОВ</div>
            <div className="text-[11px] font-mono text-orange-400/80 mt-1">Планетарные аномалии</div>
          </div>

          <div className="glass-panel p-4 rounded-lg text-left">
            <div className="flex items-center space-x-2 text-purple-400 font-hud text-xs mb-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>АРХИТЕКТУРА ДВИЖКА</span>
            </div>
            <div className="font-display font-bold text-2xl text-white tracking-wide">UNREAL 5.5</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1">Nanite & Lumen Ray-Tracing</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          onClick={() => playSound('click')}
          className="mt-12 text-slate-500 hover:text-cyan-400 transition-colors flex flex-col items-center space-y-1 font-hud text-xs tracking-widest cursor-pointer"
        >
          <span>ПОДРОБНЕЕ ОБ ИГРЕ</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
}
