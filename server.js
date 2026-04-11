import 'dotenv/config';
import express from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import nodemailer from 'nodemailer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = join(__dirname, 'Suscriptores', 'suscriptores.json');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'revistabornamez@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

app.post('/suscribir', async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Correo inválido.' });
  }

  const data = JSON.parse(readFileSync(DB_PATH, 'utf-8'));

  if (data.find(s => s.email === email)) {
    return res.status(409).json({ error: 'Este correo ya está suscrito.' });
  }

  data.push({ email, fecha: new Date().toISOString() });
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

  try {
    await transporter.sendMail({
      from: '"Bornamez" <revistabornamez@gmail.com>',
      to: 'revistabornamez@gmail.com',
      subject: 'Nueva suscripción a Bornamez',
      text: `Se ha suscrito un nuevo lector:\n\n${email}\n\nFecha: ${new Date().toLocaleString('es-AR')}`,
    });
  } catch (err) {
    console.error('Error al enviar notificación:', err.message);
  }

  res.json({ ok: true });
});

app.listen(3001, () => {
  console.log('Servidor de suscripciones corriendo en http://localhost:3001');
});
