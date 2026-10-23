import React, { useState } from 'react';
import { X, Sparkles, Check, Copy, Terminal, ExternalLink, Code2, Layers, Cpu } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function TechStackModal({ isOpen, onClose }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!isOpen) return null;

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    playSound('click');
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      num: '01',
      title: 'Дизайнерский навык: UI-UX-PRO-MAX',
      badge: 'SKILL / REPO',
      desc: 'Добавляет AI насмотренность профессионального UI/UX дизайнера: 50+ стилей, 161 палитра, 57 пар шрифтов, WCAG доступность и антипаттерны.',
      code: 'https://github.com/nextlevelbuilder/ui-ux-pro-max-skill',
      command: 'Install this skill https://github.com/nextlevelbuilder/ui-ux-pro-max-skill',
      note: 'В Antigravity этот навык уже установлен и активен в ~/.gemini/config/skills/ui-ux-pro-max!',
    },
    {
      num: '02',
      title: 'MCP сервер: Magic от 21st.dev',
      badge: 'MCP PROTOCOL',
      desc: 'Предоставляет готовые живые UI компоненты, гласморфизм, Bento-блоки, неоновые кнопки и интерактивные анимации.',
      code: 'claude mcp add magic --scope user --env API_KEY=YOUR_KEY',
      command: 'claude mcp add magic --scope user',
      note: 'Позволяет ИИ подтягивать выверенные блоки с 21st.dev / Magic UI напрямую.',
    },
    {
      num: '03',
      title: 'Итог и магия связки',
      badge: 'DESIGN SYSTEM',
      desc: 'Вместо унылых белых заготовок с дефолтными кнопками (как "Toronto Cupcake" из видео), ИИ создаёт премиальный глубокий дизайн с градиентами, микро-анимациями и космическим гласморфизмом, как этот сайт EV2.',
      code: 'Generate a website with glassmorphism, sci-fi HUD effects, live canvas and sound fx',
      command: 'собери мне сайт в космическом темном стиле с гласморфизмом и анимациями',
      note: 'Этот сайт EV2 построен именно по этой технологии!',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel-glow rounded-2xl border border-purple-500/50 p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={() => {
            playSound('click');
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-purple-400 font-hud text-xs tracking-widest mb-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>РАЗБОР СВЯЗКИ ИЗ ТЕСТОВОГО РИЛСА</span>
        </div>
        <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
          КАК СОБРАН ЭТОТ ДИЗАЙН
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          В видео автор показывает, как превратить обычные шаблонные генерации ИИ в дизайн уровня топового агентства с помощью двух инструментов:
        </p>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-slate-900/80 rounded-xl p-5 border border-slate-800 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className="font-display font-black text-sm text-cyan-400">
                    {step.num}
                  </span>
                  <span className="font-display font-bold text-base text-white">
                    {step.title}
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-hud tracking-wider bg-purple-950/80 border border-purple-500/40 text-purple-300">
                  {step.badge}
                </span>
              </div>

              <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                {step.desc}
              </p>

              {/* Code snippet */}
              <div className="bg-black/60 rounded-lg p-3 border border-slate-800 flex items-center justify-between font-mono text-xs text-cyan-300 overflow-x-auto">
                <span className="truncate mr-3">{step.code}</span>
                <button
                  onClick={() => copyToClipboard(step.code, idx)}
                  className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Копировать"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {step.note && (
                <div className="mt-2 text-[11px] font-hud text-emerald-400 flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>{step.note}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-sans text-center sm:text-left">
            Сайт <strong className="text-cyan-300">EV2</strong> развёрнут и готов к просмотру в браузере!
          </div>
          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            ЗАКРЫТЬ
          </button>
        </div>
      </div>
    </div>
  );
}
