import React from 'react'

import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "ARWEB.com",
    role: "Web Developer – Front-End",
    period: "Ago 2020 – Feb 2026",
    type: "Jornada Completa · Remoto",
    current: true,
    highlights: [
      "Contribución en el desarrollo y mantenimiento de sitios web responsivos.",
      "Colaboración en proyectos basados en CMS como WordPress y Joomla.",
      "Implementación de accesibilidad AA en +10 sitios institucionales y gubernamentales.",
      "Implementación de pasarela de pago Tilopay.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "WordPress", "Joomla", "Accesibilidad AA", "Tilopay"],
    color: "from-purple-500 to-indigo-500",
    accent: "purple",
  },
  {
    company: "Pixel Design",
    role: "Web Developer – Full Stack",
    period: "Jun 2018 – Ago 2020",
    type: "Jornada Completa · San José, CR",
    current: false,
    highlights: [
      "Desarrollo y mantenimiento de +15 sitios web corporativos en WordPress y PHP.",
      "Integración de soluciones Front-End y Back-End.",
      "Administración de bases de datos MySQL y SQL.",
      "Administración de múltiples sitios basados en cPanel.",
      "Compra y renovación de dominios en GoDaddy y nic Costa Rica.",
    ],
    tech: ["WordPress", "PHP", "MySQL", "JavaScript", "cPanel", "GoDaddy"],
    color: "from-indigo-500 to-sky-500",
    accent: "indigo",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#17161f]/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-purple-400 tracking-widest uppercase">
            Experiencia
          </span>
          <div className="flex-1 h-px bg-purple-500/15" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Trayectoria <span className="gradient-text">profesional</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-indigo-500/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 border-2 border-[#0f0f13] hidden md:block shadow-lg shadow-purple-900/50" />

                <div className="glow-card rounded-2xl bg-[#17161f] border border-purple-500/10 p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shrink-0 shadow-lg`}>
                        <Briefcase size={18} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#f0eef8]">{exp.role}</h3>
                        <p className="text-purple-300 font-semibold">{exp.company}</p>
                        <p className="text-sm text-[#9b99b4] mt-0.5">{exp.type}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <span className="text-sm text-[#9b99b4] font-medium">{exp.period}</span>
                      {/* {exp.current && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Actual
                        </span>
                      )} */}
                    </div>
                  </div>

                  <ul className="mb-5 space-y-2.5">
                    {exp.highlights.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-[#9b99b4]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-purple-500/10 text-[#9b99b4]"
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
