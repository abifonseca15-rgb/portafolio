import React from 'react'
import { translations } from '../src/translations';

export default function Footer({ language, theme }) {
  const year = new Date().getFullYear();
  const copy = translations[language].footer;
  const isDark = theme === 'dark';

  return (
    <footer className={`border-t py-8 px-6 ${isDark ? 'border-purple-500/10' : 'border-slate-200'}`}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className={`text-sm ${isDark ? 'text-[#9b99b4]' : 'text-slate-600'}`}>
          &copy; {year} Abigail Fonseca Contreras · {copy.location}
        </p>
      </div>
    </footer>
  );
}

