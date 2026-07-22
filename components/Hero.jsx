import React from 'react'

import { MapPin, Mail, Phone, Github, Linkedin, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl animate-blob pointer-events-none" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-sky-600/8 blur-3xl animate-blob pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Disponible para nuevas oportunidades
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-up delay-100">
              Hola, soy{" "}
              <span className="gradient-text block sm:inline">
                Abigail Fonseca
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-[#9b99b4] font-medium mb-6 animate-fade-up delay-200">
              Front-End Developer
            </h2>

            <p className="text-[#9b99b4] text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up delay-300">
              Desarrolladora web apasionada por crear experiencias digitales accesibles, responsivas y elegantes. +7 años construyendo sitios que funcionan y se ven bien.
            </p>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center lg:justify-start mb-8 animate-fade-up delay-300">
              <span className="flex items-center gap-2 text-sm text-[#9b99b4]">
                <MapPin size={14} className="text-purple-400 shrink-0" />
                Cartago, Costa Rica
              </span>
              <span className="flex items-center gap-2 text-sm text-[#9b99b4]">
                <Mail size={14} className="text-purple-400 shrink-0" />
                abifonseca15@gmail.com
              </span>
              {/* <span className="flex items-center gap-2 text-sm text-[#9b99b4]">
                <Phone size={14} className="text-purple-400 shrink-0" />
                +506 7201-5814
              </span> */}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-up delay-400">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-700/40"
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-purple-500/30 text-[#c084fc] text-sm font-medium hover:bg-purple-500/10 transition-all duration-200"
              >
                Contáctame
              </a>
            </div>
          </div>

          {/* Avatar / graphic */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6 animate-fade-up delay-200">
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-sky-500 blur-sm opacity-50 animate-float" />
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-purple-600/30 to-indigo-600/20 border border-purple-500/30 flex items-center justify-center animate-float">
                {/* Initials */}
                <span className="text-6xl sm:text-7xl font-bold gradient-text select-none">AF</span>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-3 -right-4 px-3 py-1.5 bg-[#17161f] border border-purple-500/20 rounded-full text-xs text-purple-300 font-medium shadow-lg">
                React ⚛️
              </div>
              <div className="absolute -bottom-3 -left-4 px-3 py-1.5 bg-[#17161f] border border-indigo-500/20 rounded-full text-xs text-indigo-300 font-medium shadow-lg">
                7+ años
              </div>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 justify-center max-w-xs">
              {["HTML", "CSS", "JS", "PHP", "WordPress"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#17161f] border border-purple-500/15 text-xs text-[#9b99b4]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#about" className="text-[#9b99b4]/50 hover:text-purple-400 transition-colors">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
