import { useState } from 'react'
import './App.css'
import { About } from '../components/About'
import Contact from '../components/Contact'
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

  return (
    <>
      <main
        className="min-h-screen transition-colors duration-300"
        style={{
          backgroundColor: theme === 'dark' ? '#0f0f13' : '#f5f3ff',
          color: theme === 'dark' ? '#f0eef8' : '#1b1730',
        }}
      >
        <Navbar
          language={language}
          toggleLanguage={toggleLanguage}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <Hero language={language} theme={theme} />
        <About language={language} theme={theme} />
        <Experience language={language} theme={theme} />
        <Education language={language} theme={theme} />
        <Projects language={language} theme={theme} />
        <Contact language={language} theme={theme} />
        <Footer language={language} theme={theme} />
      </main>
    </>
  )
}

export default App
