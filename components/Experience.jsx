import React from 'react'

import { Briefcase } from "lucide-react";
import { translations } from '../src/translations';

const experiences = [
  {
    company: 'Freelance',
    role: 'Web Developer – Full Stack',
    period: 'Mar 2026 – Currently',
    type: 'Remote',
    current: true,
    highlights: [
      'Built the websites elfrancesvillage.com in WordPress and clubsociale.com in Framer from concept and design through production deployment.',
      'Developed and maintained a personal portfolio in React, using Git/GitHub version control and Vercel deployment.',
      'Collaborated on the implementation and adjustment of .NET-based projects, supporting the evolution, maintenance, and improvement of web solutions.',
      'Implemented technical SEO strategies to improve organic positioning, performance, and visibility across web projects.',
      'Managed migration and administration of 5 websites, including domains, hosting, service configuration, and the Cloudways to Hostinger transition.',
      'Administered domain accounts through GoDaddy to ensure continued service availability and operational continuity.',
    ],
    tech: ['WordPress', 'Framer', 'React', 'Git/GitHub', 'Vercel', '.NET', 'Technical SEO', 'Cloudways', 'Hostinger', 'GoDaddy'],
    color: 'from-purple-500 to-indigo-500',
    accent: 'purple',
  },
  {
    company: 'ARWEB.com',
    role: 'Web Developer – Front-End',
    period: 'Aug 2020 – Feb 2026',
    type: 'Full-time · Remote',
    current: true,
    highlights: [
      'Maintained and administered more than 10 websites built in WordPress and Joomla, including content updates, responsive design fixes, CMS and plugin updates, and performance optimizations.',
      'Updated and improved more than 10 institutional and governmental sites by implementing WCAG AA accessibility criteria, adjusting structure, navigation, and content to improve access and usability.',
      'Implemented and integrated the Tilopay payment gateway on 3 websites, enabling online payments and expanding e-commerce capabilities.',
      'Performed corrective and evolutionary maintenance on websites, identifying and resolving functionality, display, and compatibility issues across devices.',
      'Optimized websites through technical adjustments focused on improving performance, loading speed, and user experience.',
    ],
    tech: ['HTML', 'CSS/SCSS', 'JavaScript', 'WordPress', 'Joomla', 'AA accessibility', 'Tilopay', 'PHP', 'WooCommerce'],
    color: 'from-purple-500 to-indigo-500',
    accent: 'purple',
  },
  {
    company: 'Pixel Design',
    role: 'Web Developer – Full Stack',
    period: 'Jun 2018 – Aug 2020',
    type: 'Full-time · San José, CR',
    current: false,
    highlights: [
      'Developed a custom plugin to automatically sync inventory between an ERP and WooCommerce, eliminating manual product updates.',
      'Developed and maintained more than 15 corporate sites using WordPress and PHP, integrating front-end and back-end solutions according to project requirements.',
      'Developed and adjusted front-end and back-end solutions for WordPress-based projects, addressing functional requirements and site improvements.',
      'Managed MySQL and SQL databases, performing migrations and backups to support data integrity, availability, and continuity.',
      'Administered more than 15 websites through cPanel, managing hosting settings and coordinating technical incident follow-up with the data center.',
      'Advised clients on hosting plan updates and selection based on capacity and site performance needs.',
      'Managed domain purchases and renewals through GoDaddy and NIC Costa Rica to ensure continuity of associated website services.',
    ],
    tech: ['WordPress', 'PHP', 'HTML/CSS', 'MySQL', 'JavaScript', 'cPanel', 'GoDaddy', 'WooCommerce'],
    color: 'from-indigo-500 to-sky-500',
    accent: 'indigo',
  },
];

export default function Experience({ language, theme }) {
  const copy = translations[language].experience;
  const isDark = theme === 'dark';

  return (
    <section id="experience" className={`py-24 px-6 ${isDark ? 'bg-[#17161f]/40' : 'bg-slate-50/80'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-semibold tracking-widest uppercase ${isDark ? 'text-purple-400' : 'text-violet-700'}`}>
            {copy.label}
          </span>
          <div className={`flex-1 h-px ${isDark ? 'bg-purple-500/15' : 'bg-violet-200'}`} />
        </div>

        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {copy.title} <span className="gradient-text">{copy.subtitle}</span>
        </h2>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-indigo-500/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-16">
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 border-2 border-[#0f0f13] hidden md:block shadow-lg shadow-purple-900/50" />

                <div className={`glow-card rounded-2xl border p-7 ${isDark ? 'bg-[#17161f] border-purple-500/10' : 'bg-white border-slate-200'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shrink-0 shadow-lg`}>
                        <Briefcase size={18} className="text-white" />
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold ${isDark ? 'text-[#f0eef8]' : 'text-slate-900'}`}>{exp.role}</h3>
                        <p className={`font-semibold ${isDark ? 'text-purple-300' : 'text-violet-700'}`}>{exp.company}</p>
                        <p className={`text-sm mt-0.5 ${isDark ? 'text-[#9b99b4]' : 'text-slate-600'}`}>{exp.type}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <span className={`text-sm font-medium ${isDark ? 'text-[#9b99b4]' : 'text-slate-600'}`}>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="mb-5 space-y-2.5">
                    {exp.highlights.map((item, j) => (
                      <li key={j} className={`flex items-start gap-2.5 text-sm ${isDark ? 'text-[#9b99b4]' : 'text-slate-700'}`}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 text-xs rounded-md border ${isDark ? 'bg-white/5 border-purple-500/10 text-[#9b99b4]' : 'bg-violet-50 border-violet-200 text-violet-700'}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
