


export const WhatsapFLotanteBtn = () => {
    const whatsappNumber = '5363669630'
    const whatsappMessage = 'Hola soy un cliente vengo desde la Web , me gustaria saber mas sobre sus servicios'
    
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage,
      )}`
    return (
        
        <a
            href={whatsappLink}
            className="whatsapp-floating"
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <span className="whatsapp-icon">✆</span>
        </a>
        
    )
}
