import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app  = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// formulario de contacto
app.post('/api/contact', async (req, res) => {
  const { nombre, email, mensaje } = req.body;
  if (!nombre || !email || !mensaje)
    return res.status(400).json({ error: 'Faltan campos' });

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });

    await transporter.sendMail({
      from: 'landing@misitio.com',
      to: process.env.CONTACT_EMAIL,
      subject: `Contacto de ${nombre}`,
      text: `Email: ${email}\n\n${mensaje}`
    });

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error de servidor' });
  }
});

// descarga de demo
app.get('/download', (_req, res) =>
  res.download(path.join(__dirname, 'files', 'MiSoftware.zip'))
);

app.listen(PORT, () =>
  console.log(`Backend listo en http://localhost:${PORT}`)
);
