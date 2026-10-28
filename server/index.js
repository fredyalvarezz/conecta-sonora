import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const docs = path.join(path.dirname(fileURLToPath(import.meta.url)), '../docs');
const app = express(), port = process.env.PORT || 3000;
app.get('/api/salud', (req, res) => res.json({ ok: true, modo: 'demostración' }));
// Aquí se agregarán las rutas /api/vacantes, /api/cursos, etc. en la fase con base de datos.
app.use(express.static(docs));
app.get('*', (req, res) => res.sendFile(path.join(docs, 'index.html')));
app.listen(port, () => console.log(`Conecta Sonora en http://localhost:${port}`));
