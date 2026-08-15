import './HeroSection.css'
import profileImage from '../../assets/image1.jpg'
import resumeThiago from '../../assets/curriculo/curriculo_thiago.pdf'


function HeroSection() {
  const handleOpenResume = () => {
    window.open(resumeThiago, '_blank', "noopener,noreferrer")
  }
  const handleLinkGithub = () => {
   window.open("https://github.com/thiagolucass", "_blank", "noopener,noreferrer")
  }
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Olá, eu sou <span className="highlight">Thiago Lucas</span> Desenvolvedor Full Stack
        </h1>

        <p className="hero-description">
          Desenvolvedor Full Stack em formação. Estudante de Análise e Desenvolvimento de Sistemas na Universidade Potiguar (UNP).
        </p>
        <div className="buttons">
        <button className='button cv' onClick={handleOpenResume}>Curriculo</button> <button className="button github" onClick={handleLinkGithub} target='_blank'>GitHub</button>
</div>
      </div>

      <img src={profileImage} alt="Imagem de Perfil" className="hero-image" />
    </section>
  )
}

export default HeroSection
