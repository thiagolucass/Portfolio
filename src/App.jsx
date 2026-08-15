import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import ContactSection from './components/ContactSection/ContactSection'


function App() {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app" data-theme={theme}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="page">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
