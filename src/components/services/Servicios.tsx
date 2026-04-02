import "./servicios.css"

export const Servicios = ()=>{

    return(
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
    )

}