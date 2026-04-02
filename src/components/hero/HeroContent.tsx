import "./heroContent.css" 
export const HeroContent = ({ whatsappLink }: { whatsappLink: string }) => {
    return (
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
    )
}
