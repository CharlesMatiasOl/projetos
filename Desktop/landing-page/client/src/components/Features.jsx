import {
  HiChartBar,
  HiLightningBolt,
  HiShieldCheck,
  HiHand,
  HiCog,
  HiLightBulb
} from 'react-icons/hi';

const data = [
  {
    icon: <HiChartBar size={32} />,
    title: 'Decisiones basadas en datos',
    desc: 'Dashboards en tiempo real para que cada área sepa dónde actuar primero.'
  },
  {
    icon: <HiLightningBolt size={32} />,
    title: 'Procesos 2× más rápidos',
    desc: 'Automatizamos flujos repetitivos y liberamos tiempo de tu equipo.'
  },
  {
    icon: <HiShieldCheck size={32} />,
    title: 'Seguridad corporativa',
    desc: 'Cifrado AES-256 y compliance ISO 27001 para proteger tus activos.'
  },
  {
    icon: <HiHand size={32} />,
    title: 'Colaboración sin fricción',
    desc: 'Chat, tareas y KPIs en un mismo lugar; adiós a los silos de información.'
  },
  {
    icon: <HiCog size={32} />,
    title: 'Implementación guiada',
    desc: 'Onboarding en 72 h con expertos que configuran todo por ti.'
  },
  {
    icon: <HiLightBulb size={32} />,
    title: 'Innovación continua',
    desc: 'Actualizaciones mensuales incluidas, sin costos ocultos.'
  }
];

export default function Features() {
  return (
    <section className="features section" id="features">
      <div className="features__inner">
        <h2 className="features__title">
          Impulsa el rendimiento de tu empresa con <br/>
          <strong>Enterprise Boost</strong>
        </h2>
        <p className="features__subtitle">
          Tu operación, más ágil, rentable y data-driven. Descubre cómo en segundos.
        </p>
        <div className="features__grid">
          {data.map((item, i) => (
            <div
              className="features__item"
              style={{ animationDelay: `${i * 100}ms` }}
              key={item.title}
            >
              <div className="features__icon">{item.icon}</div>
              <h3 className="features__item-title">{item.title}</h3>
              <p className="features__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
