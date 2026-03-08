import './App.css'

function App() {
  const whatsappNumber = '5363669630'
  const whatsappMessage = 'Hola soy un cliente vengo desde la Web'

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`

  const videoLinks = [
    {
      title: 'Puerta corrediza de aluminio y cristal',
      url: 'https://www.facebook.com', // Reemplaza por el enlace real del video
    },
    {
      title: 'Ventanas modernas para sala y balcones',
      url: 'https://www.facebook.com', // Reemplaza por el enlace real del video
    },
    {
      title: 'Instalación completa de cristalería en cocina',
      url: 'https://www.facebook.com', // Reemplaza por el enlace real del video
    },
  ]

  return (
    <div className="page">
      <header className="top-nav">
        <div className="top-nav-inner">
          <div className="brand">
            <span className="brand-mark">C</span>
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
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-kicker">Carpintería de aluminio y cristalería</p>
            <h1 className="hero-title">
              Diseños modernos en
              <span className="hero-title-highlight"> aluminio y cristal</span>
            </h1>
            <p className="hero-animated-text">
              <span className="hero-animated-item">Puertas y ventanas de alto impacto</span>
              <span className="hero-animated-item">
                Cristalería moderna para cocinas, salas y oficinas
              </span>
              <span className="hero-animated-item">
                Servicio profesional en toda Cuba
              </span>
            </p>
            <p className="hero-subtitle">
              Fabricamos e instalamos soluciones a medida en aluminio y cristal para tu
              hogar o negocio. Transporte y montaje incluidos en cada proyecto.
            </p>
            <div className="hero-actions">
              <a
                href={whatsappLink}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Escríbenos por WhatsApp
              </a>
              <span className="hero-phone">o llámanos al +53 63669630</span>
            </div>
            <div className="hero-badges">
              <span className="badge">Servicio a toda Cuba</span>
              <span className="badge">Transporte en la Habana</span>
              <span className="badge">Montaje incluido</span>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="section section-services full-screen" id="servicios">
          <h2 className="section-title">Servicios que ofrecemos</h2>
          <p className="section-subtitle">
            Proyectos a medida en aluminio y cristal para viviendas, negocios y oficinas.
          </p>
          <div className="cards-grid">
            <article className="card">
              <h3>Puertas modernas</h3>
              <p>
                Puertas abatibles y corredizas en aluminio y cristal templado, seguras y
                elegantes para entradas principales e interiores.
              </p>
            </article>
            <article className="card">
              <h3>Ventanas</h3>
              <p>
                Ventanas herméticas y resistentes para optimizar la iluminación natural y
                el confort de tus espacios.
              </p>
            </article>
            <article className="card">
              <h3>Bajos de mesetas</h3>
              <p>
                Muebles inferiores para cocina con frentes de cristal y aluminio,
                organizados y fáciles de limpiar.
              </p>
            </article>
            <article className="card">
              <h3>Acondicionamiento de espacios</h3>
              <p>
                Cerramientos, divisiones y soluciones integrales para oficinas, terrazas y
                locales comerciales.
              </p>
            </article>
          </div>
        </section>

        {/* Sección de beneficios oculta por ahora para mantener un flujo más limpio de pantallas */}

        <section className="section section-videos full-screen" id="videos">
          <h2 className="section-title">Trabajos en video</h2>
          <p className="section-subtitle">
            Mira algunos de nuestros proyectos publicados en Facebook y conoce mejor cómo
            trabajamos.
          </p>
          <div className="videos-grid">
            {videoLinks.map((video) => (
              <a
                key={video.title}
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="video-card"
              >
                <div className="video-thumbnail-placeholder">
                  <span className="video-play-icon">▶</span>
                </div>
                <p className="video-title">{video.title}</p>
                <p className="video-caption">Ver en Facebook</p>
              </a>
            ))}
          </div>
        </section>

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

      <a
        href={whatsappLink}
        className="whatsapp-floating"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <span className="whatsapp-icon">✆</span>
      </a>

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
