import React, { useState } from 'react';
import { Crosshair, Cpu, Globe2, Zap, Disc3, ChevronRight } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function AboutGame() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 'combat',
      title: 'МОДУЛЬНЫЕ ЭКЗОСКЕЛЕТЫ',
      tag: 'КЛАСС БРОНИ // MK-IV',
      desc: 'Биомеханические шасси повышенной маневренности с направленными реактивными маневровыми двигателями, кинетическими барьерами и кибернетическими узлами подвески вооружения.',
      stats: [
        { label: 'Ускорение тяги', value: '4.8G' },
        { label: 'Емкость энергощита', value: '2,500 МДж' },
        { label: 'Слотов модификаций', value: '32 Модуля' },
      ],
      icon: Cpu,
      color: 'from-cyan-500 to-blue-600',
      border: 'border-cyan-500/40',
    },
    {
      id: 'environment',
      title: 'ПЛАНЕТАРНЫЕ БУРИ И ГРАВИТАЦИЯ',
      tag: 'СЕКТОРЫ И АНОМАЛИИ',
      desc: 'Сражайтесь на расколотых кольцах планет, в серных пустошах и на разрушающихся орбитальных станциях, где гравитационные провалы и ионные бури меняют ход битвы за секунды.',
      stats: [
        { label: 'Перепады гравитации', value: '0.12G - 1.8G' },
        { label: 'Атмосферные бури', value: 'Радиация / Ионы' },
        { label: 'Разрушаемость', value: 'Полная' },
      ],
      icon: Globe2,
      color: 'from-orange-500 to-rose-600',
      border: 'border-orange-500/40',
    },
    {
      id: 'netcode',
      title: 'СУБТИКОВЫЙ СЕТЕВОЙ КОД 128 ГЦ',
      tag: 'СЕТЕВАЯ АРХИТЕКТУРА',
      desc: 'Спроектирован для киберспортивной бескомпромиссной точности. Частота симуляции сервера 128 Гц гарантирует мгновенную регистрацию попаданий без ложных промахов.',
      stats: [
        { label: 'Тикрейт серверов', value: '128 Гц' },
        { label: 'Точность регистрации', value: '99.98%' },
        { label: 'Средний пинг матча', value: '< 28 мс' },
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
            // АРХИВ БРИФИНГА И РАЗВЕДКИ
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
            ОБ ИГРЕ
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-orange-500 mx-auto mt-4" />
          <p className="max-w-2xl mx-auto text-slate-300 mt-4 text-sm sm:text-base">
            Шагните в мир, где сталкиваются высокие ставки и научно-фантастический экшен. EV2 — это динамичный соревновательный шутер нового поколения с передовой графикой, командными PvP-битвами и боевыми экзоскелетами.
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
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Disc3 className="w-5 h-5 text-orange-400 animate-spin" />
                  <span className="font-hud text-xs text-slate-300 tracking-widest uppercase">
                    ПОТОК ДАННЫХ // {pillars[activeTab].id.toUpperCase()}
                  </span>
                </div>
                <span className="font-hud text-xs text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30">
                  ПРОТОКОЛ MK-IV
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
