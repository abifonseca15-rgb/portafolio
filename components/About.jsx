import React from 'react'
import { translations } from '../src/translations';

const techSkills = [
  { name: 'HTML', level: 100 },
  { name: 'CSS', level: 100 },
  { name: 'JavaScript', level: 100 },
  { name: 'PHP', level: 100 },
  { name: 'React', level: 100 },
  { name: 'WordPress', level: 100 },
  { name: 'Joomla', level: 100 },
  { name: 'Elementor', level: 100 },
  { name: 'Betheme', level: 100 },
  { name: 'Framer', level: 100 },
  { name: 'WooCommerce', level: 100 },
  { name: 'MySQL', level: 100 },
  { name: '.NET', level: 100 },
  { name: 'WCAG/Accesibilidad', level: 100 },
  { name: 'SEO técnico', level: 100 },
  { name: 'Tilopay', level: 100 },
  { name: 'Figma', level: 100 },
  { name: 'Photoshop', level: 100 },
  { name: 'cPanel', level: 100 },
  { name: 'GoDaddy', level: 100 },
  { name: 'Cloudways', level: 100 },
  { name: 'Hostinger', level: 100 },
  { name: 'Jira', level: 100 },
  { name: 'Git/GitHub', level: 100 },
];

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-inherit">{name}</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-400"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export const About = ({ language, theme }) => {
  const copy = translations[language].about;
  const isDark = theme === 'dark';
  const softSkills = copy.softSkillItems;
  const skillData = techSkills.map((skill) => ({
    ...skill,
    name: language === 'en' && skill.name === 'WCAG/Accesibilidad' ? 'WCAG/Accessibility' : language === 'en' && skill.name === 'SEO técnico' ? 'Technical SEO' : skill.name,
  }));

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-purple-400 tracking-widest uppercase">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4">
              {skillData.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

