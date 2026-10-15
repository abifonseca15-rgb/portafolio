import React from 'react'
import { translations } from '../src/translations';

export const About = ({ language, theme }) => {
  const copy = translations[language].about;
  const isDark = theme === 'dark';
  const softSkills = copy.softSkillItems;

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-semibold tracking-widest uppercase ${isDark ? 'text-purple-400' : 'text-violet-700'}`}>
            {copy.label}
          </span>
          <div className="flex-1 h-px bg-purple-500/15" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          {copy.headingPart1} <span className="gradient-text">{copy.headingPart2}</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className={`glow-card rounded-2xl p-8 border mb-8 ${isDark ? 'bg-[#17161f] border-purple-500/10' : 'bg-white border-slate-200'}`}>
              <p className={`leading-8 text-base mb-5 ${isDark ? 'text-[#9b99b4]' : 'text-slate-700'}`}>
                {copy.bio1}
              </p>
              <p className={`leading-8 text-base ${isDark ? 'text-[#9b99b4]' : 'text-slate-700'}`}>
                {copy.bio2}
              </p>
            </div>

            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-[#f0eef8]' : 'text-slate-900'}`}>{copy.softSkills}</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 text-sm rounded-full border ${
                    isDark ? 'bg-purple-500/10 border-purple-500/20 text-purple-300' : 'bg-violet-50 border-violet-200 text-violet-700'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={`glow-card rounded-2xl p-8 border ${isDark ? 'bg-[#17161f] border-purple-500/10' : 'bg-white border-slate-200'}`}>
            <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-[#f0eef8]' : 'text-slate-900'}`}>{copy.technicalSkills}</h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
              {copy.technicalSkillGroups.map((group) => (
                <div key={group.label}>
                  <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-purple-300' : 'text-violet-700'}`}>
                    {group.label}
                  </h4>
                  <ul className={`text-sm leading-6 ${isDark ? 'text-[#9b99b4]' : 'text-slate-700'}`}>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
