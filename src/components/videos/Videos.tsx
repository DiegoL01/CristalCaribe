
 
 
 



import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './videos.css'

export const Videos = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const videoLinks = [
    {
      title: 'Puerta corrediza de aluminio y cristal',
      url: 'https://www.facebook.com',
    },
    {
      title: 'Ventanas modernas para sala y balcones',
      url: 'https://www.facebook.com',
    },
    {
      title: 'Instalación completa de cristalería en cocina',
      url: 'https://www.facebook.com',
    },
    {
      title: 'Barandal de cristal con acabados premium',
      url: 'https://www.facebook.com',
    },
    {
      title: 'Closets de cristal y aluminio',
      url: 'https://www.facebook.com',
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoLinks.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, videoLinks.length])

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + videoLinks.length) % videoLinks.length)
  }

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % videoLinks.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="section section-videos" id="videos">
      <h2 className="section-title">Trabajos en video</h2>
      <p className="section-subtitle">
        Mira algunos de nuestros proyectos publicados en Facebook y conoce mejor cómo
        trabajamos.
      </p>
      
      <div 
        className="carousel-container"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Video anterior">
          ‹
        </button>

        <div className="carousel-track">
          <AnimatePresence mode="wait">
            <motion.a
              key={currentIndex}
              href={videoLinks[currentIndex].url}
              target="_blank"
              rel="noreferrer"
              className="video-card"
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="video-thumbnail-placeholder">
                <span className="video-play-icon">▶</span>
              </div>
              <p className="video-title">{videoLinks[currentIndex].title}</p>
              <p className="video-caption">Ver en Facebook</p>
            </motion.a>
          </AnimatePresence>
        </div>

        <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Video siguiente">
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {videoLinks.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al video ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}