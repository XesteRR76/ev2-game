import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function PickYourSuit({ onOpenEnlist }) {
  const [activeSuit, setActiveSuit] = useState(0);

  const suits = [
    {
      id: 'stryker',
      name: 'ШТУРМОВИК MK-IV',
      role: 'ТАКТИЧЕСКИЙ ШТУРМ',
      tagline: 'Скоростной прорыв линий обороны с плазменным ускорителем.',
      color: 'from-cyan-500 via-sky-400 to-blue-600',
      badgeColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/50',
      stats: {
        броня: 72,
        мобильность: 94,
        огневая_мощь: 88,
        тактика: 80,
      },
      weapon: 'Импульсный карабин C-88',
      ability: 'Форсажный рывок сопел',
      passive: 'Наниты стабилизации отдачи',
      lore: 'Создан для передовых ударных отрядов, взламывающих укрепления врага до синхронизации защитных щитов.',
    },
    {
      id: 'phantom',
      name: 'ПРИЗРАК СПЕКТР',
      role: 'СКРЫТЫЙ ЛИКВИДАТОР',
      tagline: 'Активный оптический камуфляж и дальнобойный рельсотрон.',
      color: 'from-purple-500 via-violet-400 to-indigo-600',
      badgeColor: 'text-purple-400 border-purple-500/40 bg-purple-950/50',
      stats: {
        броня: 54,
        мобильность: 98,
        огневая_мощь: 92,
        тактика: 96,
      },
      weapon: 'Винтовка пустотного импульса',
      ability: 'Оптическое преломление (Невидимость)',
      passive: 'Подавитель тепловой сигнатуры',
      lore: 'Бесшумная тень на орбите. Один выверенный выстрел отключает узлы планетарной обороны.',
    },
    {
      id: 'titan',
      name: 'КОЛОСС ТИТАН',
      role: 'ТЯЖЕЛЫЙ БАСТИОН',
      tagline: 'Непробиваемый кинетический щит и тяжелая мортирная артиллерия.',
      color: 'from-orange-500 via-amber-400 to-red-600',
      badgeColor: 'text-orange-400 border-orange-500/40 bg-orange-950/50',
      stats: {
        броня: 98,
        мобильность: 52,
        огневая_мощь: 96,
        тактика: 68,
      },
      weapon: 'Сдвоенная роторная автопушка',
      ability: 'Сейсмический барьер отражения',
      passive: 'Реактивная динамическая броня',
      lore: 'Усилен астероидными карбидными плитами. Когда на поле выходит Титан — линия фронта сдвигается.',
    },
    {
      id: 'eclipse',
      name: 'НЕБУЛА ЭКЛИПС',
      role: 'КИБЕР-ОПЕРАТОР',
      tagline: 'ЭМИ-поля подавления и автономные боевые дроны поддержки.',
      color: 'from-emerald-500 via-teal-400 to-cyan-600',
      badgeColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/50',
      stats: {
        броня: 65,
        мобильность: 84,
        огневая_мощь: 78,
        тактика: 100,
      },
      weapon: 'Дуговой ионный излучатель',
      ability: 'Нейронная ЭМИ-волна глушения',
      passive: 'Ремонтный рой нанитов',
      lore: 'Подавляет электронику врага и восстанавливает броню союзников прямо под перекрестным огнем.',
    },
  ];

  const current = suits[activeSuit];

  return (
    <section id="suits" className="py-24 px-4 relative z-10 border-t border-slate-800/60 bg-[#060a16]/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-hud text-xs text-cyan-400 tracking-widest uppercase mb-2">
            // АРСЕНАЛ И КЛАССЫ БРОНИ
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
            ВЫБОР ЭКЗОСКЕЛЕТА
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 mx-auto mt-4" />
          <p className="max-w-2xl mx-auto text-slate-300 mt-4 text-sm sm:text-base">
            Каждый пилот синхронизирован с высокотехнологичным боевым шасси. Выберите свой класс, настройте модули и командуйте полем боя.
          </p>
        </div>

        {/* Suit Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {suits.map((suit, idx) => {
            const isSelected = activeSuit === idx;
            return (
              <button
                key={suit.id}
                onClick={() => {
                  playSound('select');
                  setActiveSuit(idx);
                }}
                onMouseEnter={() => playSound('hover')}
                className={`p-4 rounded-xl text-left transition-all duration-300 cursor-pointer relative overflow-hidden border ${
                  isSelected
                    ? 'glass-panel-glow border-cyan-400/80 bg-slate-900/90 shadow-xl'
                    : 'glass-panel border-slate-800 hover:border-slate-700 opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-hud text-[10px] text-slate-400 tracking-wider">
                    0{idx + 1} //
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-hud uppercase ${suit.badgeColor}`}>
                    {suit.role.split(' ')[0]}
                  </span>
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-white tracking-wide truncate">
                  {suit.name}
                </div>
                <div className="text-xs text-slate-400 truncate mt-0.5">
                  {suit.role}
                </div>

                {isSelected && (
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${suit.color}`} />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Suit Tactical Showcase */}
        <div className="glass-panel-glow rounded-2xl p-6 sm:p-10 border border-slate-700/80 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Hologram */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[320px] sm:min-h-[400px] rounded-xl bg-gradient-to-b from-slate-900/90 to-black/80 border border-slate-800/80 p-8 overflow-hidden">
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              <div
                className={`w-48 h-48 rounded-full bg-gradient-to-br ${current.color} blur-[70px] opacity-40 animate-pulse`}
              />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full border-2 border-dashed border-cyan-400/40 flex items-center justify-center p-3 animate-orbit">
                  <div className="w-full h-full rounded-full border border-slate-700 flex items-center justify-center">
                    <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <span className="font-hud text-xs text-cyan-400 tracking-widest block uppercase">
                    ИДЕНТИФИКАТОР: EV2-{current.id.toUpperCase()}-X
                  </span>
                  <span className="font-display font-black text-2xl text-white mt-1 block">
                    {current.name}
                  </span>
                </div>
              </div>

              <div className="absolute top-4 left-4 font-hud text-[11px] text-slate-500 tracking-widest">
                СИСТЕМА: СИНХРОНИЗАЦИЯ_V4.2
              </div>
              <div className="absolute bottom-4 right-4 font-hud text-[11px] text-cyan-400/80 tracking-widest">
                ГОТОВ К ДЕСАНТИРОВАНИЮ
              </div>
            </div>

            {/* Tactical Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded text-xs font-hud font-bold tracking-wider mb-2 border text-cyan-300 border-cyan-500/40 bg-cyan-950/40">
                  {current.role}
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white">
                  {current.name}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                  {current.tagline}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm mt-2 italic font-sans border-l-2 border-slate-700 pl-3">
                  "{current.lore}"
                </p>
              </div>

              {/* Dynamic Stat Bars */}
              <div className="space-y-3 pt-2">
                {Object.entries(current.stats).map(([statName, val]) => (
                  <div key={statName}>
                    <div className="flex justify-between font-hud text-xs text-slate-300 uppercase tracking-wider mb-1">
                      <span>{statName.replace('_', ' ')}</span>
                      <span className="font-mono text-cyan-400 font-bold">{val}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${current.color} transition-all duration-500 rounded-full`}
                        style={{ width: `${val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Loadout Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800">
                  <div className="font-hud text-[10px] text-slate-400 uppercase">Основное оружие</div>
                  <div className="font-tech font-bold text-sm text-cyan-200 mt-0.5">{current.weapon}</div>
                </div>
                <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800">
                  <div className="font-hud text-[10px] text-slate-400 uppercase">Тактическая способность</div>
                  <div className="font-tech font-bold text-sm text-orange-300 mt-0.5">{current.ability}</div>
                </div>
              </div>

              {/* Deploy CTA */}
              <button
                onClick={() => {
                  playSound('warp');
                  onOpenEnlist();
                }}
                className="w-full py-3.5 font-display font-bold text-xs tracking-widest text-slate-950 uppercase rounded bg-gradient-to-r from-cyan-400 via-sky-300 to-orange-400 hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-cyan-950/50"
              >
                ВЫБРАТЬ {current.name} ДЛЯ АЛЬФА-ТЕСТА
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
