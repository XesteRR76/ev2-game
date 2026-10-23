import React from 'react';
import { Sparkles } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function Footer({ onOpenTechModal, onOpenEnlist }) {
  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#03050c] pt-16 pb-12 px-4 text-slate-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-400/60 flex items-center justify-center text-cyan-300 font-display font-black text-sm">
                EV2
              </div>
              <span className="font-display font-black text-xl text-white tracking-wider">
                ПРОЕКТ EV2
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Научно-фантастический соревновательный шутер нового поколения с модульными экзоскелетами. Воссоздан по вирусному руководству по AI-дизайну из рилса.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => {
                  playSound('click');
                  onOpenTechModal();
                }}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-500/40 text-purple-300 font-hud text-xs hover:border-cyan-400 hover:text-cyan-200 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>СВЯЗКА UI-UX-PRO-MAX + MAGIC 21ST.DEV</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-hud text-xs text-white uppercase tracking-wider">
              НАВИГАЦИЯ
            </div>
            <ul className="space-y-2 text-xs font-tech">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">
                  ГЛАВНАЯ
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  ОБ ИГРЕ
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-cyan-400 transition-colors">
                  ДОРОЖНАЯ КАРТА
                </a>
              </li>
              <li>
                <a href="#suits" className="hover:text-cyan-400 transition-colors">
                  ЭКЗОСКЕЛЕТЫ
                </a>
              </li>
              <li>
                <a href="#deathmist" className="hover:text-cyan-400 transition-colors">
                  ЗОНА СМЕРТИ
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-hud text-xs text-white uppercase tracking-wider">
              СООБЩЕСТВО ПИЛОТОВ СЕКТОРА 07
            </div>
            <p className="text-xs text-slate-400">
              Получайте боевые сводки разработчиков, расписание турниров и ключи раннего доступа.
            </p>
            <button
              onClick={() => {
                playSound('warp');
                onOpenEnlist();
              }}
              className="w-full py-2.5 px-4 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              ПОЛУЧИТЬ КЛЮЧ АЛЬФА-ТЕСТА
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            © 2026 EV2 PROTOCOL. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </div>
          <div className="flex space-x-6 text-[11px]">
            <span>УРОВЕНЬ БЕЗОПАСНОСТИ 4</span>
            <span>КОНФИДЕНЦИАЛЬНОСТЬ</span>
            <span>РЕГЛАМЕНТ БОЯ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
