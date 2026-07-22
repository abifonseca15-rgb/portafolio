import React from 'react'

const techSkills = [
  { name: "HTML", level: 100 },
  { name: "CSS / SCSS", level: 100 },
  { name: "JavaScript", level: 100 },
  { name: "PHP", level: 100 },
  { name: "WordPress", level: 100 },
  { name: "Joomla", level: 100 },
  { name: "MySQL", level: 100 },
  { name: "React", level: 100 },
  { name: "Figma", level: 100 },
  { name: "Photoshop", level: 100 },
];

const softSkills = [
  "Trabajo en equipo",
  "Comunicación efectiva",
  "Resolución de problemas",
  "Aprendizaje continuo",
  "Accesibilidad web (AA)",
  "Gestión de proyectos",
];

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-[#f0eef8]">{name}</span>
        {/* <span className="text-xs text-[#9b99b4]">{level}%</span> */}
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

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-purple-400 tracking-widest uppercase">
            Sobre mí
          </span>
          <div className="flex-1 h-px bg-purple-500/15" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Quién <span className="gradient-text">soy</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <div className="glow-card rounded-2xl bg-[#17161f] p-8 border border-purple-500/10 mb-8">
              <p className="text-[#9b99b4] leading-8 text-base mb-5">
                Soy desarrolladora web Front-End con más de 7 años de experiencia construyendo sitios web responsivos, accesibles y de alto rendimiento. Me especializo en HTML, CSS, JavaScript, WordPress, Joomla y PHP, trabajando tanto en proyectos corporativos, gubernamentales, e-commerce y sitios informativos.
              </p>
              <p className="text-[#9b99b4] leading-8 text-base">
                Actualmente completo mi <strong className="text-[#c084fc]">Licenciatura en Ingeniería Informática y Desarrollo de Aplicaciones Web</strong> en la UNED, mientras sigo expandiendo mis habilidades en React y accesibilidad.
              </p>
            </div>

            {/* Soft skills */}
            <h3 className="text-lg font-semibold text-[#f0eef8] mb-4">Habilidades blandas</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tech skills */}
          <div className="glow-card rounded-2xl bg-[#17161f] p-8 border border-purple-500/10">
            <h3 className="text-lg font-semibold text-[#f0eef8] mb-6">Habilidades técnicas</h3>
            <div className="flex flex-col gap-5">
              {techSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

