/* Recomendaciones por puntuación de coincidencias y porcentaje de perfil completo. */
import { state } from '../state/store.js';

const profileTokens = () =>
  [...(state.me.skills || []), ...(state.me.interests || []), state.me.career || ''].map((s) =>
    s.toLowerCase(),
  );
function recommendJobs() {
  const T = profileTokens(),
    m = state.me;
  return state.jobs
    .filter((j) => j.status == 'activa')
    .map((j) => {
      let s = 0,
        r = [];
      if (j.careers.includes(m.career)) {
        s += 3;
        r.push('es para tu carrera');
      }
      const k = j.skills.filter((x) => T.includes(x.toLowerCase()));
      if (k.length) {
        s += 2 * k.length;
        r.push('pide ' + k.join(', '));
      }
      if (T.includes(j.area.toLowerCase())) {
        s += 2;
        r.push('te interesa ' + j.area);
      }
      if (j.city == m.city) {
        s++;
        r.push('está en ' + m.city);
      }
      return { j, s, r };
    })
    .filter((x) => x.s)
    .sort((a, b) => b.s - a.s)
    .slice(0, 3);
}
function recommendCourses() {
  const T = profileTokens();
  return state.courses
    .map((c) => {
      const k = [...c.skills, c.cat].filter((x) => T.includes(x.toLowerCase()));
      return { c, s: k.length, r: k };
    })
    .filter((x) => x.s)
    .sort((a, b) => b.s - a.s)
    .slice(0, 3);
}

const profileCompletion = () => {
  const m = state.me,
    f = [
      m.name,
      m.city,
      m.career,
      m.school,
      m.semester,
      m.grad,
      m.bio,
      (m.skills || []).length,
      (m.interests || []).length,
      m.langs,
      m.exp,
      m.mode,
      m.opp,
    ];
  return Math.round((f.filter(Boolean).length / f.length) * 100);
};
function recommendCompanies() {
  const T = profileTokens(),
    m = state.me;
  return state.companies
    .map((c) => {
      let s = 0,
        r = [];
      const a = c.areas.filter((x) => T.includes(x.toLowerCase()));
      if (a.length) {
        s += 2 * a.length;
        r.push('trabaja en ' + a.join(', '));
      }
      const k = c.skills.filter((x) => T.includes(x.toLowerCase()));
      if (k.length) {
        s += 2 * k.length;
        r.push('busca ' + k.join(', '));
      }
      if (
        state.jobs.some((j) => j.co == c.id && j.status == 'activa' && j.careers.includes(m.career))
      ) {
        s += 3;
        r.push('tiene vacantes para tu carrera');
      }
      if (c.city == m.city) {
        s++;
        r.push('opera en ' + m.city);
      }
      return { c, s, r };
    })
    .filter((x) => x.s)
    .sort((a, b) => b.s - a.s)
    .slice(0, 3);
}
function recommendArticles() {
  const T = profileTokens(),
    first = state.me.opp && state.me.opp != 'Cualquiera';
  return state.articles
    .map((a) => {
      const txt = (a.t + ' ' + a.body).toLowerCase(),
        k = T.filter((t) => t.length > 3 && txt.includes(t));
      let s = k.length * 2,
        r = k.length ? ['menciona ' + k.slice(0, 2).join(', ')] : [];
      if (first && /primer|prácticas|cv/i.test(a.t)) {
        s++;
        r.push('te ayuda a buscar ' + state.me.opp.toLowerCase());
      }
      return { a, s, r };
    })
    .filter((x) => x.s)
    .sort((a, b) => b.s - a.s)
    .slice(0, 3);
}

export {
  profileTokens,
  recommendJobs,
  recommendCourses,
  profileCompletion,
  recommendCompanies,
  recommendArticles,
};
