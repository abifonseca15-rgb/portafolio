import React from 'react'
import { Mail, Linkedin, MapPin } from "lucide-react";
import { translations } from '../src/translations';

const contactItems = [
  {
    icon: Mail,
    label: { es: 'Correo electrónico', en: 'Email' },
    value: 'abifonseca15@gmail.com',
    href: 'mailto:abifonseca15@gmail.com',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: MapPin,
    label: { es: 'Ubicación', en: 'Location' },
    value: 'San José, Costa Rica',
    href: 'https://maps.google.com/?q=Cartago,Costa+Rica',
    color: 'from-sky-500 to-cyan-500',
  },
  {
    icon: Linkedin,
    label: { es: 'LinkedIn', en: 'LinkedIn' },
    value: 'abigail-fonseca-contreras',
    href: 'https://www.linkedin.com/in/abigail-fonseca-contreras-62240514/',
    color: 'from-blue-500 to-sky-500',
  },
];

export default function Contact({ language, theme }) {
  const copy = translations[language].contact;
  const isDark = theme === 'dark';

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-purple-400 tracking-widest uppercase">
            {copy.label}
          </span>
          <div className="flex-1 h-px bg-purple-500/15" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          {copy.heading} <span className="gradient-text">{copy.highlight}</span>
        </h2>

        <p className={`text-base mb-12 max-w-lg ${isDark ? 'text-[#9b99b4]' : 'text-slate-700'}`}>
          {copy.intro}
        </p>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {contactItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`glow-card rounded-2xl border p-6 flex flex-col gap-4 group ${isDark ? 'bg-[#17161f] border-purple-500/10' : 'bg-white border-slate-200'}`}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
              >
                <item.icon size={18} className="text-white" />
              </div>

              <div>
                <p className={`text-xs mb-1 ${isDark ? 'text-[#9b99b4]' : 'text-slate-500'}`}>
                  {item.label[language]}
                </p>
                <p className={`font-medium text-sm transition-colors ${isDark ? 'text-[#f0eef8] group-hover:text-purple-300' : 'text-slate-800 group-hover:text-violet-700'}`}>
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="relative rounded-2xl bg-gradient-to-br from-purple-600/20 via-indigo-600/15 to-sky-600/10 border border-purple-500/20 p-10 text-center overflow-hidden">
          <div className="relative z-10">
            <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-[#f0eef8]' : 'text-slate-900'}`}>
              {copy.ctaTitle}
            </h3>

            <p className={`mb-7 max-w-md mx-auto text-sm leading-relaxed ${isDark ? 'text-[#9b99b4]' : 'text-slate-700'}`}>
              {copy.ctaBody}
            </p>

            <a
              href="mailto:abifonseca15@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50"
            >
              <Mail size={16} />
              {copy.ctaAction}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

