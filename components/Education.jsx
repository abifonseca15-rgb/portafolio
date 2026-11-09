import React from 'react'

import {
  GraduationCap,
  Award,
  ExternalLink,
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
  {
    title: { es: 'Certificado de finalización: Claude 101', en: 'Certificate of completion: Claude 101' },
    issuer: 'Anthropic',
    issued: { es: 'ago. de 2026', en: 'Aug 2026' },
    credentialId: 'byv38msi3gs8',
    verificationUrl: 'https://verify.skilljar.com/c/byv38msi3gs8',
    icon: '🤖',
  },
  {
    title: 'SEO: Structured Data & Schema Markup for Webmasters',
    issuer: 'Udemy',
    issued: { es: 'ene. de 2026', en: 'Jan 2026' },
    credentialId: 'UC-96595e22-e761-43ed-947f-bb951f578498',
    verificationUrl: 'https://www.udemy.com/certificate/UC-96595e22-e761-43ed-947f-bb951f578498/',
    icon: '🔍',
  },
  {
    title: { es: 'Certificado verificado: Introduction to Web Accessibility', en: 'Verified Certificate for Introduction to Web Accessibility' },
    issuer: 'edX',
    issued: { es: 'jul. de 2025', en: 'Jul 2025' },
    credentialId: 'b9d07f824d5d43bda7612ab78d39790c',
    verificationUrl: 'https://courses.edx.org/certificates/b9d07f824d5d43bda7612ab78d39790c',
    icon: '♿',
  },
  {
    title: 'React – The Complete Guide 2024 (incl. Next.js, Redux)',
    issuer: 'Udemy',
    issued: { es: 'nov. de 2024', en: 'Nov 2024' },
    credentialId: 'UC-85a3e860-fff8-40cf-a0c9-69b193e2c3c9',
    verificationUrl: 'https://www.udemy.com/certificate/UC-85a3e860-fff8-40cf-a0c9-69b193e2c3c9/',
    icon: '⚛️',
  },
  {
    title: 'Software Testing Masterclass (2024)',
    issuer: 'Udemy',
    issued: { es: '10 de junio de 2024', en: 'Jun 10, 2024' },
    credentialId: 'UC-605d8f82-4623-425c-ada1-183cbba2faf2',
    verificationUrl: 'https://www.udemy.com/certificate/UC-605d8f82-4623-425c-ada1-183cbba2faf2/',
    icon: '🧪',
  },
  {
    title: 'Modern PHP: The Complete Guide - from Beginner to Advanced',
    issuer: 'Udemy',
    issued: { es: 'jun. de 2024', en: 'Jun 2024' },
    credentialId: 'UC-8e597cb2-781f-4482-85d7-75a9c76f5690',
    verificationUrl: 'https://www.udemy.com/certificate/UC-8e597cb2-781f-4482-85d7-75a9c76f5690/',
    icon: '🐘',
  },
  {
    title: 'The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert',
    issuer: 'Udemy',
    issued: { es: 'jun. de 2024', en: 'Jun 2024' },
    credentialId: 'UC-1ae8ed8e-0181-448e-9169-e288096996cc',
    verificationUrl: 'https://www.udemy.com/certificate/UC-1ae8ed8e-0181-448e-9169-e288096996cc/',
    icon: '🗄️',
  },
  {
    title: 'Aprende Joomla! 5.x',
    issuer: 'Udemy',
    issued: { es: '21 de nov. de 2024', en: 'Nov 21, 2024' },
    credentialId: 'UC-373a9aac-4fa5-4bf2-903f-2166e2b30fa2',
    verificationUrl: 'https://www.udemy.com/certificate/UC-373a9aac-4fa5-4bf2-903f-2166e2b30fa2/',
    icon: '🌐',
  },
  {
    title: 'Certificado en Adobe Photoshop',
    issuer: 'ESCADI S.A',
    issued: { es: '14 de abril de 2021', en: 'Apr 14, 2021' },
    physical: true,
    icon: '🎨',
  },
];

export default function Education({ language, theme }) {
  const copy = translations[language].education;
  const isDark = theme === 'dark';

  return (
    <section id="education" aria-labelledby="education-title" tabIndex="-1" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-semibold tracking-widest uppercase ${isDark ? 'text-purple-400' : 'text-violet-700'}`}>
            {copy.label}
          </span>
          <div className="flex-1 h-px bg-purple-500/15" />
        </div>

        <h2 id="education-title" className="text-3xl sm:text-4xl font-bold mb-12">
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
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-xs ${isDark ? 'text-green-400' : 'text-green-800'}`}>
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse motion-reduce:animate-none" />
                              {copy.current}
                            </span>
                          )}
                          <span className={`text-xs ${isDark ? 'text-[#9b99b4]' : 'text-slate-600'}`}>{edu.period}</span>
                        </div>
                      </div>
                      <p className={`text-sm mt-1 leading-snug ${isDark ? 'text-[#f0eef8]' : 'text-slate-700'}`}>{edu.degree}</p>
                      <p className={`text-xs mt-1 ${isDark ? 'text-[#9b99b4]' : 'text-slate-600'}`}>{edu.location}</p>
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
                      <p className={`text-sm leading-snug break-words ${isDark ? 'text-[#f0eef8]' : 'text-slate-800'}`}>
                        {typeof cert.title === 'string' ? cert.title : cert.title[language]}
                      </p>
                      <p className={`text-xs mt-0.5 ${isDark ? 'text-[#9b99b4]' : 'text-slate-600'}`}>{cert.issuer}</p>
                      <p className={`text-xs mt-1 ${isDark ? 'text-[#9b99b4]' : 'text-slate-600'}`}>
                        {copy.issued}: {cert.issued[language]}
                      </p>
                      {cert.credentialId && (
                        <p className={`mt-1 break-all text-xs ${isDark ? 'text-[#9b99b4]' : 'text-slate-600'}`}>
                          {copy.credentialId}: {cert.credentialId}
                        </p>
                      )}
                      {cert.verificationUrl ? (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-2 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-2 ${
                            isDark ? 'text-purple-300 hover:text-purple-200' : 'text-violet-800 hover:text-violet-900'
                          }`}
                        >
                          {copy.verify}
                          <ExternalLink size={14} aria-hidden="true" />
                          <span className="sr-only">
                            {language === 'es' ? '(se abre en una pestaña nueva)' : '(opens in a new tab)'}
                          </span>
                        </a>
                      ) : cert.physical ? (
                        <p className={`mt-2 text-sm ${isDark ? 'text-[#b8b5ca]' : 'text-slate-700'}`}>
                          {copy.physical}
                        </p>
                      ) : null}
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
