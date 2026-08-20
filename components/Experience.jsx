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
      "Di mantenimiento continuo a un mínimo de 10 sitios web WordPress y Joomla por mes, gestionando cambios de contenido, corrección de problemas de responsive design, actualización de CMS y plugins en sitios antiguos, y mejoras de rendimiento en sitios con problemas de velocidad de carga.",
      "Implementé accesibilidad web WCAG AA en más de 10 sitios institucionales y gubernamentales, garantizando el cumplimiento de estándares de accesibilidad exigidos en plataformas del sector público.",
      "Integré la pasarela de pago Tilopay en 3 sitios web, habilitando el procesamiento de pagos en línea para los clientes.",
    ],
    tech: ["HTML", "CSS/SCSS", "JavaScript", "WordPress", "Joomla", "Accesibilidad AA", "Tilopay", "PHP", "WooCommerce"],
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
      "Desarrollé y mantuve más de 10 sitios web corporativos en WordPress y PHP, integrando funcionalidades de Front-End y Back-End de forma completa.",
      "Desarrollé un plugin personalizado de sincronización de productos entre un sistema ERP y WooCommerce, automatizando la actualización de inventario entre ambas plataformas.",
      "Administré bases de datos MySQL y SQL, realizando migraciones y respaldos periódicos para garantizar la integridad y disponibilidad de la información de los sitios.",
      "Administré aproximadamente 15 sitios web alojados en cPanel, coordinando con el datacenter la resolución de caídas de servicio y asesorando a clientes sobre actualizaciones de plan de hosting cuando el espacio disponible era insuficiente, asegurando la continuidad operativa de los sitios.",
    ],
    tech: ["WordPress", "PHP","HTML/CSS", "MySQL", "JavaScript", "cPanel", "GoDaddy", "WooCommerce"],
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
