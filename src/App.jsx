import { useEffect, useState } from 'react'
import './App.css'
import { About } from '../components/About'
import Contact from '../components/Contact'
import CookieBanner from '../components/CookieBanner'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

function App() {
  const [language, setLanguage] = useState('es')
  const [theme, setTheme] = useState('dark')

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'es' ? 'en' : 'es'))
  }

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    document.documentElement.lang = language === 'es' ? 'es-CR' : 'en'
    const skipLink = document.getElementById('skip-link')
    if (skipLink) {
      skipLink.textContent = language === 'es' ? 'Saltar al contenido' : 'Skip to content'
    }
  }, [language])

  useEffect(() => {
    const onClick = (event) => {
      if (!(event.target instanceof Element)) return

      const link = event.target.closest('a')
      if (!link || typeof window.gtag !== 'function') return

      const href = link.getAttribute('href') || ''

      if (link.hasAttribute('download') || /\.pdf($|\?)/i.test(href)) {
        window.gtag('event', 'cv_download', {
          file_name: link.getAttribute('download') || 'cv.pdf',
          link_text: link.textContent.trim(),
        })
        return
      }

      if (href.startsWith('mailto:')) {
        window.gtag('event', 'click_email')
      } else if (href.includes('linkedin.com')) {
        window.gtag('event', 'click_linkedin')
      } else if (href.includes('github.com')) {
        window.gtag('event', 'click_github')
      } else if (link.closest('#projects')) {
        window.gtag('event', 'project_click', {
          project_name: link.querySelector('h3')?.textContent || href,
        })
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main
        id="contenido"
        tabIndex="-1"
        className="min-h-screen transition-colors duration-300"
        style={{
          backgroundColor: theme === 'dark' ? '#0f0f13' : '#f5f3ff',
          color: theme === 'dark' ? '#f0eef8' : '#1b1730',
        }}
      >
        <Hero language={language} theme={theme} />
        <About language={language} theme={theme} />
        <Experience language={language} theme={theme} />
        <Education language={language} theme={theme} />
        <Projects language={language} theme={theme} />
        <Contact language={language} theme={theme} />
      </main>
      <Footer language={language} theme={theme} />
      <CookieBanner language={language} theme={theme} />
    </>
  )
}

export default App
