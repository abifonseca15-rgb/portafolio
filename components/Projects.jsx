import React from 'react'
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "El Frances Village",
    url: "https://elfrancesvillage.com/",
    description: "Proyecto residencial que ofrece lotes para construir viviendas en un entorno privado, con espectaculares vistas al Volcán Barú y la Mezeta de Chorcha.",
    tags: ["WordPress", "HTML/SCSS", "Elementor", "SEO"],
    category: "Bienes raíces / Desarrollo inmobiliario",
    color: "from-teal-600/20 to-cyan-600/10",
    border: "border-teal-500/20",
    dot: "bg-teal-400",
  },
  {
    name: "Fundacion HNN",
    url: "https://fundahnn.org/",
    description: "Fundacion para el Desarrollo del Hospital Nacional de Niños",
    tags: ["WordPress", "HTML/SCSS", "BeTheme"],
    category: "Fundación",
    color: "from-yellow-600/20 to-amber-600/10",
    border: "border-yellow-500/20",
    dot: "bg-yellow-400",
  },
  {
    name: "Emprende CR",
    url: "https://www.emprendecostarica.com/",
    description: "Plataforma digital que visibiliza y promueve los emprendimientos de Costa Rica.",
    tags: ["WordPress", "HTML/CSS", "PHP", "Tema custom"],
    category: "Emprendimiento",
    color: "from-orange-600/20 to-amber-600/10",
    border: "border-orange-500/20",
    dot: "bg-orange-400",
  },
  {
    name: "ULACIT",
    url: "https://ulacit.ac.cr",
    description: "Sitio web institucional de la Universidad Latinoamericana de Ciencia y Tecnología.",
    tags: ["WordPress", "HTML/SCSS", "PHP", "Elementor", "Accesibilidad AA"],
    category: "Educación",
    color: "from-blue-600/20 to-sky-600/10",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
  },
  {
    name: "Pastas Roma",
    url: "https://pastasroma.com",
    description: "Sitio web corporativo para marca Pastas Roma.",
    tags: ["WordPress", "CSS", "BeTheme"],
    category: "Gastronomía",
    color: "from-indigo-600/20 to-blue-600/10",
    border: "border-indigo-500/20",
    dot: "bg-indigo-400",
  },
  {
    name: "Sanum",
    url: "https://www.sanum.cr/",
    description: "Sitio web corporativo para marca Sanum.",
    tags: ["WordPress", "CSS", "BeTheme", "WooCommerce"],
    category: "Salud y Bienestar",
    color: "from-green-600/20 to-emerald-600/10",
    border: "border-green-500/20",
    dot: "bg-green-400",
  },
  {
    name: "BVS World",
    url: "https://bvs.world",
    description: "Plataforma web de servicios de apoyo empresarial.",
    tags: ["WordPress", "HTML/CSS", "JavaScript", "PHP", "BeTheme"],
    category: "Soluciones empresariales",
    color: "from-sky-600/20 to-cyan-600/10",
    border: "border-sky-500/20",
    dot: "bg-sky-400",
  },
  {
    name: "Exploring Tortuguero",
    url: "https://exploringtortuguero.com",
    description: "Sitio de turismo para el Parque Nacional Tortuguero.",
    tags: ["Joomla", "PHP", "CSS"],
    category: "Turismo",
    color: "from-emerald-600/20 to-teal-600/10",
    border: "border-emerald-500/20",
    dot: "bg-emerald-400",
  },
  {
    name: "Vigui",
    url: "https://www.vigui.com/",
    description: "Sitio web corporativo de la marca Vigui.",
    tags: ["WordPress", "HTML/CSS", "PHP"],
    category: "Corporativo",
    color: "from-amber-600/20 to-orange-600/10",
    border: "border-amber-500/20",
    dot: "bg-amber-400",
  },
  {
    name: "CONAPE",
    url: "https://conape.go.cr",
    description: "Sitio gubernamental del Consejo Nacional de Préstamos para Educación con accesibilidad AA.",
    tags: ["WordPress", "Accesibilidad AA", "PHP"],
    category: "Gobierno",
    color: "from-amber-600/20 to-orange-600/10",
    border: "border-amber-500/20",
    dot: "bg-amber-400",
  },
  {
    name: "Sala Constitucional",
    url: "https://salaconstitucional.poder-judicial.go.cr",
    description: "Portal institucional del Poder Judicial de Costa Rica con estándares de accesibilidad.",
    tags: ["Joomla", "Accesibilidad AA", "CSS"],
    category: "Gobierno",
    color: "from-rose-600/20 to-pink-600/10",
    border: "border-rose-500/20",
    dot: "bg-rose-400",
  },
  {
    name: "Kapi Growers",
    url: "https://kapigrowers.com",
    description: "Sitio web para empresa agrícola con catálogo de productos y comercio electrónico.",
    tags: ["WordPress", "WooCommerce", "PHP"],
    category: "Agroindustria",
    color: "from-lime-600/20 to-green-600/10",
    border: "border-lime-500/20",
    dot: "bg-lime-400",
  },
  {
    name: "Mocrisa",
    url: "https://mocrisa.com",
    description: "Sitio corporativo para empresa de soluciones industriales en Costa Rica.",
    tags: ["WordPress", "HTML/CSS", "PHP"],
    category: "Industrial",
    color: "from-violet-600/20 to-purple-600/10",
    border: "border-violet-500/20",
    dot: "bg-violet-400",
  },
  {
    name: "Ambiental Poder Judicial",
    url: "https://ambiental.poder-judicial.go.cr",
    description: "Portal ambiental del Poder Judicial con cumplimiento de accesibilidad WCAG AA.",
    tags: ["Joomla", "Accesibilidad AA", "HTML/CSS"],
    category: "Gobierno",
    color: "from-teal-600/20 to-cyan-600/10",
    border: "border-teal-500/20",
    dot: "bg-teal-400",
  },
  {
    name: "ASEJUPS",
    url: "https://asejups.co.cr/",
    description: "Sitio web para Asociación Solidarista de Empleados de la JPS.",
    tags: ["WordPress", "HTML/CSS", "PHP", "BeTheme"],
    category: "Asociación",
    color: "from-blue-600/20 to-indigo-600/10",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
  },
  {
    name: "TAASA Studio",
    url: "https://www.taasastudio.com/",
    description: "Sitio web de una firma de arquitectos especializados en el desarrollo de proyectos integrados armónicamente con el medio ambiente.",
    tags: ["Joomla", "PHP", "HTML/CSS", "jQuery"],
    category: "Arquitectura",
    color: "from-teal-600/20 to-cyan-600/10",
    border: "border-teal-500/20",
    dot: "bg-teal-400",
  },
  {
    name: "DISAL",
    url: "https://disal.cr",
    description: "Sitio web para distribuidora de productos de consumo masivo en Costa Rica.",
    tags: ["WordPress", "HTML/CSS", "PHP", "BeTheme"],
    category: "Comercio",
    color: "from-blue-600/20 to-indigo-600/10",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
  },
  {
    name: "ITQS",
    url: "https://itqscr.com/",
    description: "Sitio web para IT Quest Solutions.",
    tags: ["WordPress", "HTML/CSS", "PHP", "BeTheme"],
    category: "Tecnología",
    color: "from-blue-600/20 to-indigo-600/10",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
  }
];

const visibleProjects = projects.filter((project) => project.name !== "Emprende CR");

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#17161f]/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-purple-400 tracking-widest uppercase">
            Portafolio
          </span>
          <div className="flex-1 h-px bg-purple-500/15" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Proyectos <span className="gradient-text">destacados</span>
        </h2>
        <p className="text-[#9b99b4] text-base mb-12 max-w-xl">
          Una selección de sitios web desarrollados y mantenidos a lo largo de mi carrera profesional.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleProjects.map((project, i) => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl bg-gradient-to-br ${project.color} border ${project.border} p-6 glow-card flex flex-col gap-4 cursor-pointer`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className={`inline-block w-2 h-2 rounded-full ${project.dot} mb-2`} />
                  <h3 className="font-bold text-[#f0eef8] text-lg leading-tight">{project.name}</h3>
                  <span className="text-xs text-[#9b99b4]">{project.category}</span>
                </div>
                <ExternalLink
                  size={16}
                  className="text-[#9b99b4] group-hover:text-purple-400 transition-colors shrink-0 mt-1"
                />
              </div>

              <p className="text-sm text-[#9b99b4] leading-relaxed flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-md bg-white/5 border border-white/8 text-[#9b99b4]"
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

