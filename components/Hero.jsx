import React from 'react'

import { MapPin, Mail, ArrowDown } from "lucide-react";
import { translations } from '../src/translations';

export default function Hero({ language, theme }) {
  const copy = translations[language].hero;
  const isDark = theme === 'dark';

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden grid-bg ${isDark ? 'text-[#f0eef8]' : 'text-slate-800'}`}>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl animate-blob pointer-events-none" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-sky-600/8 blur-3xl animate-blob pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-6 animate-fade-up ${
              isDark ? 'bg-purple-500/10 border-purple-500/20 text-purple-300' : 'bg-violet-100 border-violet-200 text-violet-700'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {copy.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-up delay-100">
              {copy.greeting}{" "}
              <span className="gradient-text block sm:inline">
                Abigail Fonseca
              </span>
            </h1>

            <h2 className={`text-xl sm:text-2xl font-medium mb-6 animate-fade-up delay-200 ${isDark ? 'text-[#9b99b4]' : 'text-slate-600'}`}>
              {copy.role}
            </h2>

            <p className={`text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up delay-300 ${isDark ? 'text-[#9b99b4]' : 'text-slate-700'}`}>
              {copy.description}
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center lg:justify-start mb-8 animate-fade-up delay-300">
              <span className={`flex items-center gap-2 text-sm ${isDark ? 'text-[#9b99b4]' : 'text-slate-700'}`}>
                <MapPin size={14} className="text-purple-400 shrink-0" />
                {copy.location}
              </span>
              <span className={`flex items-center gap-2 text-sm ${isDark ? 'text-[#9b99b4]' : 'text-slate-700'}`}>
                <Mail size={14} className="text-purple-400 shrink-0" />
                {copy.email}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-up delay-400">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-700/40"
              >
                {copy.ctaPrimary}
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-purple-500/30 text-[#c084fc] text-sm font-medium hover:bg-purple-500/10 transition-all duration-200"
              >
                {copy.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center gap-6 animate-fade-up delay-200">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-sky-500 blur-sm opacity-50 animate-float" />
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-purple-600/30 to-indigo-600/20 border border-purple-500/30 flex items-center justify-center animate-float">
                <span className={`text-6xl sm:text-7xl font-bold select-none ${isDark ? 'gradient-text' : 'bg-gradient-to-br from-violet-800 via-indigo-800 to-sky-800 bg-clip-text text-transparent'}`}>AF</span>
              </div>
              <div className={`absolute -top-3 -right-4 px-3 py-1.5 border rounded-full text-xs font-medium shadow-lg ${
                isDark ? 'bg-[#17161f] border-purple-500/20 text-purple-300' : 'bg-white border-violet-200 text-violet-700'
              }`}>
                React ⚛️
              </div>
              <div className={`absolute -bottom-3 -left-4 px-3 py-1.5 border rounded-full text-xs font-medium shadow-lg ${
                isDark ? 'bg-[#17161f] border-indigo-500/20 text-indigo-300' : 'bg-white border-indigo-200 text-indigo-700'
              }`}>
                {copy.years}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center max-w-xs">
              {["HTML", "CSS", "JS", "PHP", "WordPress"].map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 rounded-md border text-xs ${
                    isDark ? 'bg-[#17161f] border-purple-500/15 text-[#9b99b4]' : 'bg-white border-violet-200 text-slate-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#about" className="text-[#9b99b4]/50 hover:text-purple-400 transition-colors">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
