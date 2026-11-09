import {
  Accessibility,
  BarChart3,
  Code2,
  Globe,
  SearchCheck,
  ShoppingCart,
  Wrench,
} from 'lucide-react'
import { translations } from '../src/translations'

const serviceIcons = [
  Code2,
  Wrench,
  Accessibility,
  SearchCheck,
  ShoppingCart,
  Globe,
  BarChart3,
]

export default function Servicios({ language, theme }) {
  const copy = translations[language].services
  const isDark = theme === 'dark'

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      tabIndex="-1"
      className={`px-6 py-24 ${isDark ? 'bg-[#17161f]/40' : 'bg-slate-50/80'}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <span className={`text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-purple-400' : 'text-violet-700'}`}>
            {copy.label}
          </span>
          <div className={`h-px flex-1 ${isDark ? 'bg-purple-500/15' : 'bg-violet-200'}`} />
        </div>

        <div className="mb-12 max-w-3xl">
          <h2 id="services-title" className={`mb-12 text-3xl font-bold sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {copy.title}{' '}
            <span className="gradient-text">{copy.titleAccent}</span>
          </h2>
          <p className={`text-base leading-relaxed sm:text-lg ${isDark ? 'text-[#9b99b4]' : 'text-slate-700'}`}>
            {copy.intro}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((service, index) => {
            const Icon = serviceIcons[index]

            return (
              <article
                key={service.title}
                className={`glow-card rounded-2xl border p-6 ${
                  isDark ? 'border-purple-500/10 bg-[#17161f]' : 'border-slate-200 bg-white'
                }`}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <Icon size={21} aria-hidden="true" />
                </div>
                <h3 className={`mb-2 text-lg font-semibold ${isDark ? 'text-[#f0eef8]' : 'text-slate-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-[#9b99b4]' : 'text-slate-600'}`}>
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-900/30 transition-colors hover:bg-purple-500"
          >
            {copy.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
