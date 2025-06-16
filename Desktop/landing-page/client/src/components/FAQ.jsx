import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

const faqs = [
  {
    q: "¿Necesito tarjeta para la demo?",
    a: "No, la demo es completamente gratuita y sin necesidad de ingresar datos de pago."
  },
  {
    q: "¿Funciona en la nube?",
    a: "Sí, MiSoftware está 100 % en la nube: accesible desde cualquier dispositivo con navegador."
  },
  {
    q: "¿Puedo migrar mis datos?",
    a: "Claro, ofrecemos herramientas de importación masiva para tu base actual de clientes y productos."
  },
  {
    q: "¿Qué planes ofrecen?",
    a: "Tenemos planes Starter, Professional y Enterprise, con escalado de usuarios y módulos avanzados."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="faq section" id="faq">
      <div className="wrapper">
        <h2 className="section__title">Preguntas frecuentes</h2>
        <p className="section__subtitle">
          Resolvemos tus dudas más comunes para que te animes a probar sin riesgos.
        </p>
        <div className="faq__items">
          {faqs.map(({ q, a }, i) => (
            <div
              className={`faq__item ${openIndex === i ? "is-open" : ""}`}
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <button className="faq__question">
                {q}
                <span className="faq__icon">
                  {openIndex === i ? <HiMinus /> : <HiPlus />}
                </span>
              </button>
              <div className="faq__answer">
                <p>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
