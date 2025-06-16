import React from 'react'
import imgAutomatiza from '../assets/sol1.png'
import imgEscala from '../assets/sol2.png'

export default function Solution() {
  return (
    <section className="solution section" id="beneficios">
      <div className="solution__inner wrapper">

        {/* 1ª fila: imagen izquierda, texto derecha */}
        <div className="solution__row">
          <div className="solution__img-wrapper">
            <img
              src={imgAutomatiza}
              alt="Automatiza tu empresa"
              className="solution__img"
            />
          </div>
          <div className="solution__text">
            <h2 className="solution__title">Automatiza tus procesos</h2>
            <p className="solution__desc">
              Ahorra tiempo y reduce errores con flujos inteligentes integrados en un solo clic.
            </p>
            <a href="#a" className="btn btn--primary">
              Descubre más
            </a>
          </div>
        </div>

        {/* 2ª fila: texto izquierda, imagen derecha */}
        <div className="solution__row solution__row--reverse">
          <div className="solution__img-wrapper">
            <img
              src={imgEscala}
              alt="Escala sin límites"
              className="solution__img"
            />
          </div>
          <div className="solution__text">
            <h2 className="solution__title">Escala sin límites</h2>
            <p className="solution__desc">
              Nuestra arquitectura crece al ritmo de tu negocio sin interrupciones ni complicaciones.
            </p>
            <a href="#a" className="btn btn--primary">
              Pruébalo gratis
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
