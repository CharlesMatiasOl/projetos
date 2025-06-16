// Header.jsx
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="wrapper header__inner">
        {/* --- Logo / título de tu app --- */}
        <a href="#" className="header__logo">MiSoftware</a>

        {/* --- Botón hamburguesa (mobile) --- */}
        <button
          className={`header__toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>

        {/* --- Menú de navegación --- */}
        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          <a href="#home">Inicio</a>
          <a href="#features">Características</a>
          <a href="#beneficios">Beneficios</a>
          
          {/* <a href="#faq">FAQ</a> */}
          {/* <a href="#cta" className="btn btn--primary">Descarga</a> */}
        </nav>
      </div>
    </header>
  );
}
