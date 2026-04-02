import './App.css'
import { HeroContent } from './components/hero/HeroContent'
import { Servicios } from './components/services/Servicios'
import { WhatsapFLotanteBtn } from './components/WhatsapFLotanteBtn'
import { Videos } from './components/videos/Videos'

function App() {
  const whatsappNumber = '5363669630'
  const whatsappMessage = 'Hola soy un cliente vengo desde la Web , me gustaria saber mas sobre sus servicios'

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`

  
  return (
    <div className="page">
      <header className="top-nav">
        <div className="top-nav-inner">
          <div className="brand">
            <span className="brand-mark"></span>
            <span className="brand-text">
              <span className="brand-title">Cristal Caribe</span>
              <span className="brand-subtitle">Aluminio y cristalería</span>
            </span>
          </div>
          <nav className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#videos">Videos</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a
            href={whatsappLink}
            className="nav-cta"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="hero full-screen" id="inicio">
        <div className="hero-overlay" />
        <div className="hero-inner  ">
        <HeroContent whatsappLink={whatsappLink} />
          </div>
      </section>

      <main>
       {/* seccion de servicios  */}
        <Servicios/>

        {/* Sección de Videos ,beneficios oculta por ahora para mantener un flujo más limpio de pantallas */}

        <Videos />

        <section className="section section-cta full-screen" id="contacto">
          <div className="cta-box">
            <h2>¿Listo para transformar tus espacios?</h2>
            <p>
              Cuéntanos tu idea y te ayudamos a elegir el mejor diseño en aluminio y
              cristal para tu hogar o negocio.
            </p>
            <a
              href={whatsappLink}
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Hablar ahora por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <WhatsapFLotanteBtn/>

      <footer className="footer">
        <p>
          Carpintería de aluminio y cristalería · Servicio a toda Cuba · Contacto
          WhatsApp: +53 63669630
        </p>
      </footer>
    </div>
  )
}

export default App
