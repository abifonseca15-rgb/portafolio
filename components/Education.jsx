import React from 'react'

import {
  GraduationCap,
  Award,
} from "lucide-react";
import { translations } from '../src/translations';

const education = [
  {
    institution: 'Universidad Estatal a Distancia (UNED)',
    location: 'Cartago, CR',
    degree: 'Licenciatura en Ingeniería Informática y Desarrollo de Aplicaciones Web',
    period: 'En curso – 50%',
    icon: GraduationCap,
    current: true,
    color: 'from-purple-500 to-violet-500',
  },
  {
    institution: 'Universidad Americana (UAM)',
    location: 'Cartago, CR',
    degree: 'Bachillerato en Ingeniería en Sistemas',
    period: 'Dic 2021',
    icon: GraduationCap,
    current: false,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    institution: 'Colegio Universitario de Cartago (CUC)',
    location: 'Cartago, CR',
    degree: 'Diplomado en Tecnologías de la Información',
    period: 'Ago 2018',
    icon: GraduationCap,
    current: false,
    color: 'from-sky-500 to-cyan-500',
  },
];

const certificates = [
  { title: 'Claude 101', issuer: 'Anthropic', icon: '🤖' },
  { title: 'SEO: Structured Data & Schema Markup for Webmasters', issuer: 'Udemy', icon: '🔍' },
  { title: 'WAI0.1x: Introduction to Web Accessibility', issuer: 'edX', icon: '♿' },
  { title: 'React – The Complete Guide 2024 (incl. Next.js, Redux)', issuer: 'Udemy', icon: '⚛️' },
  { title: 'Software Testing Masterclass (2024)', issuer: 'Udemy', icon: '🧪' },
  { title: 'Modern PHP: The Complete Guide – Beginner to Advanced', issuer: 'Udemy', icon: '🐘' },
  { title: 'The Ultimate MySQL Bootcamp: SQL Beginner to Expert', issuer: 'Udemy', icon: '🗄️' },
  { title: 'Aprende Joomla! 5.x', issuer: 'Udemy', icon: '🌐' },
  { title: 'Certificado en Adobe Photoshop', issuer: 'ESCADI', icon: '🎨' },
];

export default function Education({ language, theme }) {
  const copy = translations[language].education;
  const isDark = theme === 'dark';

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-purple-400 tracking-widest uppercase">
            {copy.label}
          </span>
          <div className="flex-1 h-px bg-purple-500/15" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          {copy.title} <span className="gradient-text">&amp; {copy.subtitle}</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className={`flex items-center gap-2 text-lg font-semibold mb-6 ${isDark ? 'text-[#f0eef8]' : 'text-slate-900'}`}>
              <GraduationCap size={20} className="text-purple-400" />
              {copy.academic}
            </h3>
            <div className="flex flex-col gap-5">
              {education.map((edu, i) => (
                <div key={i} className={`glow-card rounded-xl p-6 border ${isDark ? 'bg-[#17161f] border-purple-500/10' : 'bg-white border-slate-200'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center shrink-0`}>
                      <edu.icon size={16} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <p className={`font-semibold text-sm ${isDark ? 'text-purple-300' : 'text-violet-700'}`}>{edu.institution}</p>
                        <div className="flex items-center gap-1.5">
                          {edu.current && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              {copy.current}
                            </span>
                          )}
                          <span className="text-xs text-[#9b99b4]">{edu.period}</span>
                        </div>
                      </div>
                      <p className={`text-sm mt-1 leading-snug ${isDark ? 'text-[#f0eef8]' : 'text-slate-700'}`}>{edu.degree}</p>
                      <p className={`text-xs mt-1 ${isDark ? 'text-[#9b99b4]' : 'text-slate-500'}`}>{edu.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`flex items-center gap-2 text-lg font-semibold mb-6 ${isDark ? 'text-[#f0eef8]' : 'text-slate-900'}`}>
              <Award size={20} className="text-purple-400" />
              {copy.certificates}
            </h3>
            <div className="flex flex-col gap-3">
              {certificates.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-4 rounded-xl px-5 py-4 glow-card group border ${isDark ? 'bg-[#17161f] border-purple-500/10' : 'bg-white border-slate-200'}`}
                  >
                    {typeof Icon === 'function' ? (
                      <span className="shrink-0 flex items-center justify-center w-6 h-6 text-purple-300">
                        <Icon size={18} />
                      </span>
                    ) : (
                      <span className="text-xl shrink-0">{cert.icon}</span>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm leading-snug truncate ${isDark ? 'text-[#f0eef8]' : 'text-slate-800'}`}>{cert.title}</p>
                      <p className={`text-xs mt-0.5 ${isDark ? 'text-[#9b99b4]' : 'text-slate-500'}`}>{cert.issuer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

