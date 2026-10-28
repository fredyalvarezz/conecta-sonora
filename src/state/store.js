/* Estado de toda la app y su guardado en localStorage. Aquí vive state (los datos) y ui (pestañas activas). */
import { createSeedData } from '../data/seed.js';
/* Estado único de la app. Se guarda en localStorage (clave KEY) y se recupera al cargar. */
export const STORAGE_KEY = 'conecta-sonora-v2';
const SEED_VERSION = 3; /* versión de los datos de ejemplo: al subir, se agregan los nuevos sin borrar lo del usuario */
const cloneData = (o) => JSON.parse(JSON.stringify(o));
export const DEMO_ME = {
  name: 'Ana Moreno (demo)',
  city: 'Hermosillo',
  career: 'Ingeniería Industrial',
  school: 'Universidad del Desierto (ficticia)',
  semester: '7.º semestre',
  grad: 'Junio 2027',
  interests: ['Logística', 'Manufactura'],
  skills: ['Excel', 'Calidad'],
  langs: 'Español (nativo), Inglés (intermedio)',
  exp: 'Servicio social en una planta de manufactura.',
  mode: 'Híbrida',
  opp: 'Prácticas',
  bio: 'Estudiante de último año con interés en mejora de procesos.',
};
const apps0 = () => [
  { id: 'p1', job: 'j2', cand: 'Luis Pérez (demo)', st: 'En revisión' },
  { id: 'p2', job: 'j1', cand: 'María Soto (demo)', st: 'Recibida' },
];
export const state = {
  ...createSeedData(),
  role: null,
  me: cloneData(DEMO_ME),
  sj: [],
  cs: {},
  apps: apps0(),
  myco: 'c1',
  users: [],
  session: null,
  seq: 100,
  sv: SEED_VERSION,
};
export const ui = { pt: 'info', signup: 'cand' };
export const jobFilters = {},
  courseFilters = {},
  companyFilters = {},
  articleFilters = {};
try {
  const l = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (l && l.companies) {
    Object.assign(state, l);
    if ((l.sv || 1) < SEED_VERSION) {
      const sd = createSeedData();
      for (const k of ['companies', 'jobs', 'courses', 'articles']) {
        const ids = new Set(state[k].map((x) => x.id));
        sd[k].forEach((x) => {
          if (!ids.has(x.id)) state[k].push(x);
        });
      }
      if (!l.cats) state.cats = sd.cats;
      state.sv = SEED_VERSION;
    }
  }
} catch (e) {}
export const saveState = () => {
  try {
    const u = state.users.find((x) => x.id == state.session);
    if (u && u.role == 'cand') {
      u.me = state.me;
      u.sj = state.sj;
      u.cs = state.cs;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
};
export function resetDemo() {
  Object.assign(state, createSeedData(), { sj: [], cs: {}, apps: apps0() });
  state.users
    .filter((u) => u.role == 'emp')
    .forEach((u) => state.companies.unshift(cloneData(u.company)));
}
