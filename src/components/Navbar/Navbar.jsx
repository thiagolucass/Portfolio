import './Navbar.css'
import { useState } from "react";

function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (


    <header className="navbar">
      <a className="navbar-logo" href="#inicio" >Thiago Lucas</a>
      <div className="navbar-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label="Alternar tema"
        >
          {theme === 'dark' ? 'Claro' : 'Escuro'}
        </button>

        <button
          className="hamburguer"
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          <span className = {`bar ${isOpen ? 'active' : ''}`}></span>
          <span className = {`bar ${isOpen ? 'active' : ''}`}></span>
          <span className = {`bar ${isOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#inicio">Inicio</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}

export default Navbar
