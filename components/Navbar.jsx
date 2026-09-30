import React from 'react'
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { translations } from '../src/translations';

export default function Navbar({ language, toggleLanguage, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = translations[language].nav;
  const isDark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-[#0f0f13]/90 backdrop-blur-md border-b border-purple-500/10"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-bold gradient-text tracking-tight">
          AF
        </a>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    isDark ? 'text-[#9b99b4] hover:text-[#c084fc]' : 'text-slate-600 hover:text-violet-700'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className={`text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                  isDark
                    ? 'border-purple-500/40 text-[#c084fc] hover:bg-purple-500/10'
                    : 'border-violet-200 text-violet-700 bg-violet-50 hover:bg-violet-100'
                }`}
              >
                {language === 'es' ? 'Contáctame' : 'Contact me'}
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={toggleLanguage}
                className={`inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  isDark
                    ? 'border-purple-500/30 bg-[#17161f]/80 text-purple-200 hover:bg-purple-500/10'
                    : 'border-violet-200 bg-white text-violet-700 hover:bg-violet-50'
                }`}
                aria-label="Toggle language"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={toggleTheme}
                role="switch"
                aria-checked={isDark}
                aria-label={isDark ? 'Modo Oscuro' : 'Modo Claro'}
                className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 ${isDark ? 'text-[#9b99b4]' : 'text-slate-600'}`}
              >
                <span className={`relative inline-flex h-5 w-[38px] shrink-0 items-center rounded-full p-1 shadow-inner transition-colors ${isDark ? 'bg-violet-700' : 'bg-violet-300'}`}>
                  <span className={`h-3 w-3 rounded-full bg-white shadow transition-transform duration-200 ${isDark ? 'translate-x-4' : 'translate-x-0'}`} />
                </span>
                <span>{language === 'es' ? (isDark ? 'Modo Oscuro' : 'Modo Claro') : (isDark ? 'Dark Mode' : 'Light Mode')}</span>
              </button>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            className="text-[#9b99b4] hover:text-[#c084fc]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={`md:hidden backdrop-blur-md border-t px-6 py-6 ${
          isDark ? 'bg-[#17161f]/95 border-purple-500/10' : 'bg-white/95 border-slate-200'
        }`}>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isDark ? 'text-[#9b99b4] hover:text-[#c084fc]' : 'text-slate-700 hover:text-violet-700'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className={`pt-2 border-t ${isDark ? 'border-purple-500/10' : 'border-slate-200'}`}>
              <button
                type="button"
                onClick={toggleLanguage}
                className={`inline-flex items-center justify-center rounded-full border px-3 py-2 text-xs font-medium w-full ${
                  isDark
                    ? 'border-purple-500/30 bg-[#17161f]/80 text-purple-200'
                    : 'border-violet-200 bg-white text-violet-700'
                }`}
                aria-label="Toggle language"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={toggleTheme}
                role="switch"
                aria-checked={isDark}
                aria-label={isDark ? 'Modo Oscuro' : 'Modo Claro'}
                className={`inline-flex w-full items-center gap-2 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 ${isDark ? 'text-[#9b99b4]' : 'text-slate-700'}`}
              >
                <span className={`relative inline-flex h-5 w-[38px] shrink-0 items-center rounded-full p-1 shadow-inner transition-colors ${isDark ? 'bg-violet-700' : 'bg-violet-300'}`}>
                  <span className={`h-3 w-3 rounded-full bg-white shadow transition-transform duration-200 ${isDark ? 'translate-x-4' : 'translate-x-0'}`} />
                </span>
                <span>{language === 'es' ? (isDark ? 'Modo Oscuro' : 'Modo Claro') : (isDark ? 'Dark Mode' : 'Light Mode')}</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

