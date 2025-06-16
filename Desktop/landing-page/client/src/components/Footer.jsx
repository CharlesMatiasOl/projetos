import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper footer__inner">
        {/* Logo y descripción */}
        <div className="footer__about">
          <div className="footer__logo">MiSoftware</div>
          <p className="footer__desc">
            Automatiza flujos, ahorra tiempo y escala tu empresa sin complicaciones.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="footer__links">
          <h4 className="footer__title">Links rápidos</h4>
          <ul className="footer__list">
            {/* <li><a href="#sobre-mi">Sobre mí</a></li> */}
            <li><a href="#features">Características</a></li>
            <li><a href="#beneficios">Beneficios</a></li>
            {/* <li><a href="#contacto">Contacto</a></li> */}
          </ul>
        </div>

        {/* Servicios */}
        <div className="footer__links">
          <h4 className="footer__title">Servicios</h4>
          <ul className="footer__list">
            <li><a href="#a">Rápido</a></li>
            <li><a href="#a">Analíticas</a></li>
            <li><a href="#a">Seguro</a></li>
            <li><a href="#a">Onboarding</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer__social">
          <h4 className="footer__title">Síguenos</h4>
          <div className="footer__icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Línea y copy */}
      <div className="footer__bottom">
        <div className="wrapper">
          <hr />
          <p className="footer__copy">
            © 2025 MiSoftware. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
