import mockup from '../assets/mockup.png';

export default function Hero() {
  return (
    <section className="home" id="home">
      <div className="home-grid">
        {/* Texto */}
        <div className="home-text">
          <p className="home-tagline">MiSoftware ayuda a</p>
          <h3 className="home-title">
            Optimizar tu empresa <strong>con software</strong>
          </h3>
          <p className="home-subtitle">
            Automatiza procesos, reduce errores y maximiza la productividad de tu equipo.
          </p>
          <a href="#" className="btn btn--primary">
            Probar Ahora
          </a>
        </div>

        {/* Mockup */}
        <div className="home-img">
          <img src={mockup} alt="Mockup MiSoftware" />
        </div>
      </div>
    </section>
  );
}
