import './SkillsSection.css'

const skillGroups = [
  {
    title: 'Front-end',
    modifier: 'frontend',
    skills: [
      { name: 'HTML', icon: '/icons/html-5-svgrepo-com.svg' },
      { name: 'CSS', icon: '/icons/css-3-svgrepo-com.svg' },
      { name: 'JavaScript', icon: '/icons/js-svgrepo-com.svg' },
      { name: 'React', icon: '/icons/react-svgrepo-com.svg' },
    ],
  },
  {
    title: 'Back-end',
    modifier: 'backend',
    skills: [
      { name: 'Java', icon: '/icons/java-svgrepo-com.svg' },
      { name: 'Spring', icon: '/icons/spring-icon-svgrepo-com.svg' },
      { name: 'Node.Js', icon: './icons/nodejs-icon-svgrepo-com.svg' },
    ],
  },
  {
    title: 'Banco de Dados',
    modifier: 'database',
    skills: [
      { name: 'MySQL', icon: '/icons/mysql-svgrepo-com.svg' },
      { name: 'PostgreSQL', icon: '/icons/postgresql-logo-svgrepo-com.svg' },
    ],
  },
]

function SkillsSection() {
  return (
    <section id="habilidades" className="skills-section">
      <h1 className="skills-section-title">
        Minhas Habilidades
      </h1>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className={`skill-card skill-card--${group.modifier}`} key={group.title}>
            <h2>{group.title}</h2>

            <div className="skill-icons-grid">
              {group.skills.map((skill) => (
                <div className="skill-icon-card" key={skill.name}>
                  <img src={skill.icon} alt={skill.name} className="skill-icon-image" />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection