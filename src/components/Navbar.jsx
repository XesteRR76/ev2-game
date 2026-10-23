import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Shield, Terminal, Menu, X, Sparkles } from 'lucide-react';
import { playSound, toggleSound, isSoundEnabled } from '../utils/audio';

export default function Navbar({ onOpenEnlist, onOpenTechModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) playSound('click');
  };

  const navLinks = [
    { label: 'ГЛАВНАЯ', href: '#hero' },
    { label: 'ОБ ИГРЕ', href: '#about' },
    { label: 'ДОРОЖНАЯ КАРТА', href: '#journey' },
    { label: 'ЭКЗОСКЕЛЕТЫ', href: '#suits' },
    { label: 'ЗОНА СМЕРТИ', href: '#deathmist' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070f]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => playSound('click')}
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)] group-hover:scale-110 transition-transform duration-300"
            >
              <polygon
                points="50,4 95,25 95,75 50,96 5,75 5,25"
                fill="rgba(8,14,30,0.8)"
                stroke="currentColor"
                strokeWidth="6"
              />
              <path
                d="M32 38 L68 38 M32 50 L58 50 M32 62 L68 62"
                stroke="#f97316"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full -z-10 group-hover:bg-cyan-400/40 transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 drop-shadow-sm">
              EV2
            </span>
            <span className="font-hud text-[9px] tracking-widest text-cyan-400/80 -mt-1 uppercase">
              ПРОТОКОЛ НОВОГО ПОКОЛЕНИЯ
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
              className="font-tech text-sm font-semibold tracking-widest text-slate-300 hover:text-cyan-400 transition-colors relative group py-1"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-orange-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          {/* Reels Tech Stack Pill */}
          <button
            onClick={() => {
              playSound('select');
              onOpenTechModal();
            }}
            onMouseEnter={() => playSound('hover')}
            className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-hud tracking-wide bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/40 text-purple-300 hover:border-cyan-400 hover:text-cyan-200 transition-all cursor-pointer shadow-sm hover:shadow-cyan-500/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>СВЯЗКА ИЗ РИЛСА</span>
          </button>
        </div>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Audio toggle */}
          <button
            onClick={handleSoundToggle}
            title={soundOn ? 'Выключить звук' : 'Включить звук'}
            className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer"
          >
            {soundOn ? (
              <Volume2 className="w-4 h-4 text-cyan-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => {
              playSound('warp');
              onOpenEnlist();
            }}
            onMouseEnter={() => playSound('hover')}
            className="relative group px-6 py-2.5 font-display font-bold text-xs tracking-widest text-slate-950 uppercase cursor-pointer overflow-hidden transition-all duration-300"
            style={{
              clipPath:
                'polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-300 to-orange-400 group-hover:opacity-90 transition-opacity" />
            <span className="relative z-10 flex items-center space-x-2">
              <Shield className="w-3.5 h-3.5" />
              <span>ВСТУПИТЬ В АЛЬФУ</span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={handleSoundToggle}
            className="p-2 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-300"
          >
            {soundOn ? (
              <Volume2 className="w-4 h-4 text-cyan-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>
          <button
            onClick={() => {
              playSound('click');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-cyan-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090d1a]/95 backdrop-blur-xl border-b border-cyan-500/30 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                playSound('click');
                setMobileMenuOpen(false);
              }}
              className="block font-tech text-base font-semibold tracking-wider text-slate-200 hover:text-cyan-400 py-1"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => {
              playSound('select');
              setMobileMenuOpen(false);
              onOpenTechModal();
            }}
            className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg bg-purple-900/40 border border-purple-500/40 text-purple-200 font-hud text-xs"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>СВЯЗКА ИЗ РИЛСА</span>
          </button>

          <button
            onClick={() => {
              playSound('warp');
              setMobileMenuOpen(false);
              onOpenEnlist();
            }}
            className="w-full py-3 bg-gradient-to-r from-cyan-400 to-orange-500 text-slate-950 font-display font-bold text-sm tracking-wider uppercase rounded"
          >
            ЗАПИСАТЬСЯ НА ТЕСТ
          </button>
        </div>
      )}
    </nav>
  );
}
