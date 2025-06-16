import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm]     = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setOk]    = useState(false);
  const [error, setError]   = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) setOk(true);
      else        setError('No se pudo enviar el mensaje.');
    } catch {
      setError('Error de red. Intentá más tarde.');
    }
  }

  if (enviado) {
    return (
      <p className="contact thanks">
        ¡Mensaje enviado! En breve te contactamos.
      </p>
    );
  }

  return (
    <section className="contact" id="contacto">
      <h2 className="contact__title">Contacto</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="nombre"
          placeholder="Nombre"
          required
          onChange={handleChange}
        />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Correo"
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea"
          name="mensaje"
          rows="4"
          placeholder="Mensaje"
          required
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="btn btn--primary">
          Enviar
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </section>
  );
}
