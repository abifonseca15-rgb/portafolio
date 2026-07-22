import React from 'react'
import { Mail, Phone, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "abifonseca15@gmail.com",
    href: "mailto:abifonseca15@gmail.com",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Cartago, Costa Rica",
    href: "https://maps.google.com/?q=Cartago,Costa+Rica",
    color: "from-sky-500 to-cyan-500",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-purple-400 tracking-widest uppercase">
            Contacto
          </span>
          <div className="flex-1 h-px bg-purple-500/15" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Hablemos <span className="gradient-text">juntos</span>
        </h2>

        <p className="text-[#9b99b4] text-base mb-12 max-w-lg">
          ¿Tienes un proyecto en mente o quieres colaborar? Estoy disponible y lista para nuevos retos.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {contactItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glow-card rounded-2xl bg-[#17161f] border border-purple-500/10 p-6 flex flex-col gap-4 group"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
              >
                <item.icon size={18} className="text-white" />
              </div>

              <div>
                <p className="text-xs text-[#9b99b4] mb-1">
                  {item.label}
                </p>
                <p className="text-[#f0eef8] font-medium text-sm group-hover:text-purple-300 transition-colors">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="relative rounded-2xl bg-gradient-to-br from-purple-600/20 via-indigo-600/15 to-sky-600/10 border border-purple-500/20 p-10 text-center overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-[#f0eef8] mb-3">
              Lista para el siguiente desafío
            </h3>

            <p className="text-[#9b99b4] mb-7 max-w-md mx-auto text-sm leading-relaxed">
              Actualmente disponible para posiciones Front-End o proyectos freelance. No dudes en escribirme.
            </p>

            <a
              href="mailto:abifonseca15@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50"
            >
              <Mail size={16} />
              Enviar mensaje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

