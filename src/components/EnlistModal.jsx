import React, { useState } from 'react';
import { X, Shield, CheckCircle2, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/audio';

export default function EnlistModal({ isOpen, onClose }) {
  const [callsign, setCallsign] = useState('');
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState('PC (Steam)');
  const [region, setRegion] = useState('Европа (Франкфурт)');
  const [submitted, setSubmitted] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!callsign || !email) return;

    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    const code = `EV2-ALPHA-${randomHex}`;
    setAccessCode(code);
    setSubmitted(true);
    playSound('success');

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#f97316', '#a855f7'],
      });
    } catch (_) {}
  };

  const copyCode = () => {
    navigator.clipboard.writeText(accessCode);
    setCopied(true);
    playSound('click');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg glass-panel-glow rounded-2xl border border-cyan-500/50 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={() => {
            playSound('click');
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 font-hud text-xs tracking-widest mb-2">
              <Shield className="w-4 h-4" />
              <span>ТЕРМИНАЛ // ЗАПИСЬ НА АЛЬФА-ТЕСТ</span>
            </div>
            <h3 className="font-display font-black text-2xl text-white mb-2">
              ВСТУПИТЬ В ОТРЯД СОПРОТИВЛЕНИЯ
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Введите данные пилота для получения гарантированного пропуска на закрытый плейтест Сектора 07 и эксклюзивного скина брони основателя.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-hud text-[11px] text-slate-300 uppercase mb-1">
                  Позывной пилота (Call-sign)
                </label>
                <input
                  type="text"
                  required
                  placeholder="напр. ВОРТЕКС_77"
                  value={callsign}
                  onChange={(e) => setCallsign(e.target.value)}
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block font-hud text-[11px] text-slate-300 uppercase mb-1">
                  Зашифрованный канал связи (Email)
                </label>
                <input
                  type="email"
                  required
                  placeholder="pilot@orbital-net.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-hud text-[11px] text-slate-300 uppercase mb-1">
                    Платформа
                  </label>
                  <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option>PC (Steam)</option>
                    <option>PC (Epic Games)</option>
                    <option>PlayStation 5</option>
                    <option>Xbox Series X|S</option>
                  </select>
                </div>
                <div>
                  <label className="block font-hud text-[11px] text-slate-300 uppercase mb-1">
                    Регион серверов
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option>Европа (Франкфурт)</option>
                    <option>Восточная Европа (Варшава)</option>
                    <option>Северная Америка</option>
                    <option>Азия (Токио)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 mt-4 rounded font-display font-bold text-xs tracking-widest text-slate-950 uppercase bg-gradient-to-r from-cyan-400 via-sky-300 to-orange-400 hover:opacity-95 transition-opacity cursor-pointer shadow-lg shadow-cyan-950/60"
              >
                ПОДТВЕРДИТЬ СВЯЗЬ И ПОЛУЧИТЬ ДОСТУП
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-black text-2xl text-white mb-1">
              ПИЛОТ ЗАРЕГИСТРИРОВАН
            </h3>
            <p className="font-hud text-xs text-cyan-400 mb-6 uppercase">
              ДОБРО ПОЖАЛОВАТЬ В ЭСКАДРИЛЬЮ, {callsign}!
            </p>

            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 mb-6">
              <div className="font-hud text-[10px] text-slate-400 uppercase mb-1">
                ВАШ УНИКАЛЬНЫЙ ТОКЕН ДОСТУПА
              </div>
              <div className="font-mono text-lg font-bold text-cyan-300 tracking-wider flex items-center justify-center space-x-2">
                <span>{accessCode}</span>
                <button
                  onClick={copyCode}
                  className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              {copied && (
                <div className="text-[11px] text-emerald-400 font-hud mt-1">
                  СКОПИРОВАНО В БУФЕР ОБМЕНА
                </div>
              )}
            </div>

            <p className="text-xs text-slate-400 mb-6">
              Инструкции по подключению к серверам отправлены на <span className="text-white font-mono">{email}</span>.
            </p>

            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              className="px-6 py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-white font-display text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              ВЕРНУТЬСЯ НА ОРБИТУ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
