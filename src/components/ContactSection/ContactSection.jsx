import './ContactSection.css'

const contactLinks = [
  {
    name: 'Email',
    display: 'thiagolucast183@gmail.com',
    href: 'mailto:thiagolucast183@gmail.com',
    icon: '/icons/email-1-svgrepo-com.svg',
  },
  {
    name: 'LinkedIn',
    display: 'linkedin.com/in/thiago-lucas',
    href: 'https://www.linkedin.com/in/thiago-lucas-621447377',
    icon: '/icons/linkedin-svgrepo-com.svg',
  },
  {
    name: 'WhatsApp',
    display: '(84) 99125-5382',
    href: 'https://wa.me/5584991255382',
    icon: '/icons/whatsapp-svgrepo-com.svg',
  },
]

function ContactSection() {
  return (
    <section id="contato" className="contact-section">
      <h1>
        Meus Contatos
      </h1>

      <div className="contact-grid">
        {contactLinks.map((contact) => (
          <a
            className="contact-card"
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            key={contact.name}
          >
            <div className="contact-card-title">
              <img src={contact.icon} alt="" className="contact-card-icon" />
              <h2>{contact.name}</h2>
            </div>

            <p>{contact.display}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ContactSection
