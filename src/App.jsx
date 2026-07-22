import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </main>
      </>
  )
}

export default App
