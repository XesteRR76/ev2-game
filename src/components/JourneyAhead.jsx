import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { playSound } from '../utils/audio';

export default function JourneyAhead() {
  const [selectedMilestone, setSelectedMilestone] = useState(1);

  const milestones = [
    {
      id: 0,
      phase: 'ЭТАП 01',
      title: 'ДВИЖОК И БАЗОВАЯ ФИЗИКА',
      date: 'Q3 2024',
      status: 'ЗАВЕРШЕНО',
      summary: 'Прототипирование перемещения в невесомости, кинетических амортизаторов и баллистической модели оружия.',
      deliverables: ['Физический пайплайн', 'Прототип сетевого кода 60Гц', 'Внутренняя стресс-арена'],
    },
    {
      id: 1,
      phase: 'ЭТАП 02',
      title: 'АЛЬФА-ТЕСТИРОВАНИЕ // СЕКТОР 07',
      date: 'ТЕКУЩИЙ ЭТАП',
      status: 'АКТИВНО СЕЙЧАС',
      summary: 'Закрытые боевые испытания с более чем 100 000 записавшихся пилотов. Оптимизация сетевого кода и балансировка оружия.',
      deliverables: ['4 Архетипа экзоскелетов', 'Зона биоугрозы Death Mist', 'Масштабирование серверов до 128Гц'],
    },
    {
      id: 2,
      phase: 'ЭТАП 03',
      title: 'ЗАКРЫТАЯ БЕТА: ОСАДА ОРБИТЫ',
      date: 'Q1 2027',
      status: 'СКОРО',
      summary: 'Масштабные бои 32 на 32 с десантными капсулами и абордажем космических крейсеров.',
      deliverables: ['Режим Осада Флота', 'Динамические бури на планетах', 'Первый сезон рейтинговых боев'],
    },
    {
      id: 3,
      phase: 'ЭТАП 04',
      title: 'ГЛОБАЛЬНЫЙ МИРОВОЙ РЕЛИЗ',
      date: 'Q3 2027',
      status: 'ЗАПЛАНИРОВАНО',
      summary: 'Одновременный запуск на ПК, PlayStation 5 и Xbox Series X|S с полной поддержкой кросс-плея и единого прогресса.',
      deliverables: ['Кросс-платформенный матчмейкинг', 'Боевой пропуск 1 Сезона', 'Киберспортивный турнир EV2 Open'],
    },
    {
      id: 4,
      phase: 'ЭТАП 05',
      title: 'РАСШИРЕНИЕ: ГЛУБОКИЙ КОСМОС',
      date: '2028+',
      status: 'В ПЛАНАХ',
      summary: 'Глобальная галактическая мета-игра за контроль секторов, орбитальные базы кланов и рейды в космические аномалии.',
      deliverables: ['Звездные базы игроков', 'Рейдовые боссы', 'Война фракций за территорию'],
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
            // СТРАТЕГИЧЕСКАЯ ДОРОЖНАЯ КАРТА
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
            ДОРОЖНАЯ КАРТА
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-rose-500 to-cyan-400 mx-auto mt-4" />
          <p className="max-w-2xl mx-auto text-slate-300 mt-4 text-sm sm:text-base leading-relaxed">
            Отправьтесь в путешествие EV2 — эпический союз прогресса и амбиций. Откройте наши достижения и взгляните на будущие этапы разработки.
          </p>
        </div>

        {/* Curved Planetary Arc Visual Representation (from Frame 40) */}
        <div className="relative mb-14 py-8">
          <div className="relative h-20 flex items-center justify-between max-w-4xl mx-auto px-4">
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-emerald-500 via-cyan-400 to-orange-500 shadow-[0_0_15px_rgba(56,189,248,0.7)]" />

            {milestones.map((m, idx) => {
              const isSelected = selectedMilestone === idx;
              const isPast = m.status === 'ЗАВЕРШЕНО';
              const isCurrent = m.status === 'АКТИВНО СЕЙЧАС';

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
                <div className="absolute right-4 -bottom-6 font-display font-black text-9xl text-slate-800/20 select-none pointer-events-none">
                  0{selectedMilestone + 1}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <span
                      className={`px-3 py-1 rounded text-xs font-hud font-bold tracking-widest ${
                        current.status === 'ЗАВЕРШЕНО'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                          : current.status === 'АКТИВНО СЕЙЧАС'
                          ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40 animate-pulse'
                          : 'bg-orange-950 text-orange-400 border border-orange-500/40'
                      }`}
                    >
                      {current.status}
                    </span>
                    <span className="font-hud text-xs text-slate-400 tracking-wider">
                      СРОКИ: {current.date}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-cyan-400/80">
                    СЕКТОР // ТРАНСЛЯЦИЯ-0{selectedMilestone + 1}
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
                    // КЛЮЧЕВЫЕ ЦЕЛИ И ПРОТОКОЛЫ:
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
