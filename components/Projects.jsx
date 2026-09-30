import React from 'react'
import { ExternalLink } from "lucide-react";
import { translations } from '../src/translations';

const projects = [
  {
    name: 'El Frances Village',
    url: 'https://elfrancesvillage.com/',
    description: {
      es: 'Proyecto residencial que ofrece lotes para construir viviendas en un entorno privado, con espectaculares vistas al Volcán Barú y la Mezeta de Chorcha.',
      en: 'Residential project offering lots for building homes in a private setting with spectacular views of Volcán Barú and Mezeta de Chorcha.',
    },
    tags: ['WordPress', 'HTML/SCSS', 'Elementor', 'SEO'],
    category: { es: 'Bienes raíces / Desarrollo inmobiliario', en: 'Real estate / Property development' },
    color: 'from-teal-600/20 to-cyan-600/10',
    border: 'border-teal-500/20',
    dot: 'bg-teal-400',
  },
  {
    name: 'Fundacion HNN',
    url: 'https://fundahnn.org/',
    description: { es: 'Fundación para el Desarrollo del Hospital Nacional de Niños', en: 'Foundation for the Development of the National Children’s Hospital' },
    tags: ['WordPress', 'HTML/SCSS', 'BeTheme'],
    category: { es: 'Fundación', en: 'Foundation' },
    color: 'from-yellow-600/20 to-amber-600/10',
    border: 'border-yellow-500/20',
    dot: 'bg-yellow-400',
  },
  {
    name: 'ULACIT',
    url: 'https://ulacit.ac.cr',
    description: { es: 'Sitio web institucional de la Universidad Latinoamericana de Ciencia y Tecnología.', en: 'Institutional website for the Latin American University of Science and Technology.' },
    tags: ['WordPress', 'HTML/SCSS', 'PHP', 'Elementor', 'AA accessibility'],
    category: { es: 'Educación', en: 'Education' },
    color: 'from-blue-600/20 to-sky-600/10',
    border: 'border-blue-500/20',
    dot: 'bg-blue-400',
  },
  {
    name: 'Pastas Roma',
    url: 'https://pastasroma.com',
    description: { es: 'Sitio web corporativo para la marca Pastas Roma.', en: 'Corporate website for the Pastas Roma brand.' },
    tags: ['WordPress', 'CSS', 'BeTheme'],
    category: { es: 'Gastronomía', en: 'Gastronomy' },
    color: 'from-indigo-600/20 to-blue-600/10',
    border: 'border-indigo-500/20',
    dot: 'bg-indigo-400',
  },
  {
    name: 'Sanum',
    url: 'https://www.sanum.cr/',
    description: { es: 'Sitio web corporativo para la marca Sanum.', en: 'Corporate website for the Sanum brand.' },
    tags: ['WordPress', 'CSS', 'BeTheme', 'WooCommerce'],
    category: { es: 'Salud y Bienestar', en: 'Health & Wellness' },
    color: 'from-green-600/20 to-emerald-600/10',
    border: 'border-green-500/20',
    dot: 'bg-green-400',
  },
  {
    name: 'BVS World',
    url: 'https://bvs.world',
    description: { es: 'Plataforma web de servicios de apoyo empresarial.', en: 'Web platform for business support services.' },
    tags: ['WordPress', 'HTML/CSS', 'JavaScript', 'PHP', 'BeTheme'],
    category: { es: 'Soluciones empresariales', en: 'Business solutions' },
    color: 'from-sky-600/20 to-cyan-600/10',
    border: 'border-sky-500/20',
    dot: 'bg-sky-400',
  },
  {
    name: 'Exploring Tortuguero',
    url: 'https://exploringtortuguero.com',
    description: { es: 'Sitio de turismo para el Parque Nacional Tortuguero.', en: 'Tourism website for Tortuguero National Park.' },
    tags: ['Joomla', 'PHP', 'CSS'],
    category: { es: 'Turismo', en: 'Tourism' },
    color: 'from-emerald-600/20 to-teal-600/10',
    border: 'border-emerald-500/20',
    dot: 'bg-emerald-400',
  },
  {
    name: 'Vigui',
    url: 'https://www.vigui.com/',
    description: { es: 'Sitio web corporativo de la marca Vigui.', en: 'Corporate website for the Vigui brand.' },
    tags: ['WordPress', 'HTML/CSS', 'PHP'],
    category: { es: 'Corporativo', en: 'Corporate' },
    color: 'from-amber-600/20 to-orange-600/10',
    border: 'border-amber-500/20',
    dot: 'bg-amber-400',
  },
  {
    name: 'CONAPE',
    url: 'https://conape.go.cr',
    description: { es: 'Sitio gubernamental del Consejo Nacional de Préstamos para Educación con accesibilidad AA.', en: 'Government website for the National Education Loans Council with AA accessibility.' },
    tags: ['WordPress', 'AA accessibility', 'PHP'],
    category: { es: 'Gobierno', en: 'Government' },
    color: 'from-amber-600/20 to-orange-600/10',
    border: 'border-amber-500/20',
    dot: 'bg-amber-400',
  },
  {
    name: 'Sala Constitucional',
    url: 'https://salaconstitucional.poder-judicial.go.cr',
    description: { es: 'Portal institucional del Poder Judicial de Costa Rica con estándares de accesibilidad.', en: 'Institutional portal of Costa Rica’s Judicial Branch with accessibility standards.' },
    tags: ['Joomla', 'AA accessibility', 'CSS'],
    category: { es: 'Gobierno', en: 'Government' },
    color: 'from-rose-600/20 to-pink-600/10',
    border: 'border-rose-500/20',
    dot: 'bg-rose-400',
  },
  {
    name: 'Kapi Growers',
    url: 'https://kapigrowers.com',
    description: { es: 'Sitio web para empresa agrícola con catálogo de productos y comercio electrónico.', en: 'Website for an agricultural company with product catalog and e-commerce.' },
    tags: ['WordPress', 'WooCommerce', 'PHP'],
    category: { es: 'Agroindustria', en: 'Agri-business' },
    color: 'from-lime-600/20 to-green-600/10',
    border: 'border-lime-500/20',
    dot: 'bg-lime-400',
  },
  {
    name: 'Mocrisa',
    url: 'https://mocrisa.com',
    description: { es: 'Sitio corporativo para empresa de soluciones industriales en Costa Rica.', en: 'Corporate website for an industrial solutions company in Costa Rica.' },
    tags: ['WordPress', 'HTML/CSS', 'PHP'],
    category: { es: 'Industrial', en: 'Industrial' },
    color: 'from-violet-600/20 to-purple-600/10',
    border: 'border-violet-500/20',
    dot: 'bg-violet-400',
  },
  {
    name: 'Ambiental Poder Judicial',
    url: 'https://ambiental.poder-judicial.go.cr',
    description: { es: 'Portal ambiental del Poder Judicial con cumplimiento de accesibilidad WCAG AA.', en: 'Environmental portal of the Judicial Branch meeting WCAG AA accessibility requirements.' },
    tags: ['Joomla', 'AA accessibility', 'HTML/CSS'],
    category: { es: 'Gobierno', en: 'Government' },
    color: 'from-teal-600/20 to-cyan-600/10',
    border: 'border-teal-500/20',
    dot: 'bg-teal-400',
  },
  {
    name: 'ASEJUPS',
    url: 'https://asejups.co.cr/',
    description: { es: 'Sitio web para Asociación Solidarista de Empleados de la JPS.', en: 'Website for the JPS Employees Solidarity Association.' },
    tags: ['WordPress', 'HTML/CSS', 'PHP', 'BeTheme'],
    category: { es: 'Asociación', en: 'Association' },
    color: 'from-blue-600/20 to-indigo-600/10',
    border: 'border-blue-500/20',
    dot: 'bg-blue-400',
  },
  {
    name: 'TAASA Studio',
    url: 'https://www.taasastudio.com/',
    description: { es: 'Sitio web de una firma de arquitectos especializados en proyectos integrados con el medio ambiente.', en: 'Website for an architecture firm specializing in environmentally integrated projects.' },
    tags: ['Joomla', 'PHP', 'HTML/CSS', 'jQuery'],
    category: { es: 'Arquitectura', en: 'Architecture' },
    color: 'from-teal-600/20 to-cyan-600/10',
    border: 'border-teal-500/20',
    dot: 'bg-teal-400',
  },
  {
    name: 'DISAL',
    url: 'https://disal.cr',
    description: { es: 'Sitio web para distribuidora de productos de consumo masivo en Costa Rica.', en: 'Website for a mass-consumer products distributor in Costa Rica.' },
    tags: ['WordPress', 'HTML/CSS', 'PHP', 'BeTheme'],
    category: { es: 'Comercio', en: 'Commerce' },
    color: 'from-blue-600/20 to-indigo-600/10',
    border: 'border-blue-500/20',
    dot: 'bg-blue-400',
  },
  {
    name: 'ITQS',
    url: 'https://itqscr.com/',
    description: { es: 'Sitio web para IT Quest Solutions.', en: 'Website for IT Quest Solutions.' },
    tags: ['WordPress', 'HTML/CSS', 'PHP', 'BeTheme'],
    category: { es: 'Tecnología', en: 'Technology' },
    color: 'from-blue-600/20 to-indigo-600/10',
    border: 'border-blue-500/20',
    dot: 'bg-blue-400',
  },
];

const visibleProjects = projects.filter((project) => project.name !== 'Emprende CR');

export default function Projects({ language, theme }) {
  const copy = translations[language].projects;
  const isDark = theme === 'dark';

  return (
    <section id="projects" className={`py-24 px-6 ${isDark ? 'bg-[#17161f]/40' : 'bg-slate-50/80'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-semibold tracking-widest uppercase ${isDark ? 'text-purple-400' : 'text-violet-700'}`}>
            {copy.label}
          </span>
          <div className={`flex-1 h-px ${isDark ? 'bg-purple-500/15' : 'bg-violet-200'}`} />
        </div>

        <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {copy.heading} <span className="gradient-text">{copy.highlight}</span>
        </h2>
        <p className={`text-base mb-12 max-w-xl ${isDark ? 'text-[#9b99b4]' : 'text-slate-700'}`}>
          {copy.description}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleProjects.map((project, i) => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl bg-gradient-to-br ${project.color} border ${project.border} p-6 glow-card flex flex-col gap-4 cursor-pointer ${
                !isDark ? 'shadow-[0_0_0_1px_rgba(196,181,253,0.2)]' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className={`inline-block w-2 h-2 rounded-full ${project.dot} mb-2`} />
                  <h3 className={`font-bold text-lg leading-tight ${isDark ? 'text-[#f0eef8]' : 'text-slate-900'}`}>{project.name}</h3>
                  <span className={`text-xs ${isDark ? 'text-[#9b99b4]' : 'text-slate-600'}`}>{project.category[language]}</span>
                </div>
                <ExternalLink
                  size={16}
                  className="text-[#9b99b4] group-hover:text-purple-400 transition-colors shrink-0 mt-1"
                />
              </div>

              <p className={`text-sm leading-relaxed flex-1 ${isDark ? 'text-[#9b99b4]' : 'text-slate-700'}`}>{project.description[language]}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 text-xs rounded-md border ${isDark ? 'bg-white/5 border-white/8 text-[#9b99b4]' : 'bg-white border-violet-200 text-violet-700'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

