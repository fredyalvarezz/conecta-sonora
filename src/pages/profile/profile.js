/* Perfil del estudiante: pestañas de información, habilidades, cursos, guardados, postulaciones, preferencias y recomendaciones. */
import './profile.css';
import '../../components/tabs/tabs.css';
import { loginRequired } from '../../components/empty-state/empty-state.js';
import { jobCard } from '../../components/cards/job-card.js';
import { courseCard, STATUS_LABELS } from '../../components/cards/course-card.js';
import { compCard } from '../../components/cards/company-card.js';
import { artCard } from '../../components/cards/article-card.js';
import { companyOf, db } from '../../services/repo.js';
import { state, ui } from '../../state/store.js';
import { escapeHtml } from '../../utils/dom.js';
import { initials } from '../../utils/format.js';
import {
  profileCompletion,
  recommendJobs,
  recommendCourses,
  recommendCompanies,
  recommendArticles,
} from '../../utils/recommend.js';
const TABS = [
  ['info', 'Mi información'],
  ['skills', 'Mis habilidades'],
  ['cursos', 'Mis cursos'],
  ['guard', 'Vacantes guardadas'],
  ['apps', 'Mis postulaciones'],
  ['prefs', 'Mis preferencias'],
  ['rec', 'Recomendado'],
];
const none = '<span class=u-muted>Sin completar</span>';
const tags = (a) =>
  a && a.length
    ? a.map((x) => /* HTML */ `<span class="tag">${escapeHtml(x)}</span>`).join('')
    : none;
const dl = (a) =>
  /* HTML */ `<dl class="data">
    ${a
      .map(
        ([k, v]) =>
          /* HTML */ `<div class="data__row">
            <dt class="data__label">${k}</dt>
            <dd class="data__value">${v || none}</dd>
          </div>`,
      )
      .join('')}
  </dl>`;
const grid = (h) => /* HTML */ `<div class="grid grid--cards">${h}</div>`;
const sec = (t, h) =>
  h
    ? /* HTML */ `<h2 class="section__title">${t}</h2>
        ${grid(h)}`
    : '';
const why = (r) => 'Por qué: ' + r.join('; ') + '.';
const edit = (id, l) =>
  /* HTML */ `<div class="row">
    <button class="btn btn--primary" data-a="edit" data-id=${id}>${l}</button>
  </div>`;
const profilePage = () => {
  if (state.role != 'cand') return loginRequired('Mi perfil', 'estudiante');
  const m = state.me,
    pc = profileCompletion(),
    t = ui.pt;
  let b = '';
  if (t == 'info')
    b = /* HTML */ `<div class="card">
      ${dl([
        ['Nombre', escapeHtml(m.name)],
        ['Ciudad', escapeHtml(m.city)],
        ['Carrera', escapeHtml(m.career)],
        ['Institución', escapeHtml(m.school)],
        ['Semestre o nivel', escapeHtml(m.semester)],
        ['Egreso estimado', escapeHtml(m.grad)],
        ['Presentación', escapeHtml(m.bio)],
      ])}${edit('info', 'Editar información')}
    </div>`;
  if (t == 'skills')
    b = /* HTML */ `<div class="card">
      <h3>Habilidades</h3>
      <div>${tags(m.skills)}</div>
      <h3>Áreas de interés</h3>
      <div>${tags(m.interests)}</div>
      ${dl([
        ['Idiomas', escapeHtml(m.langs)],
        ['Experiencia', escapeHtml(m.exp)],
      ])}${edit('skills', 'Editar habilidades')}
    </div>`;
  if (t == 'prefs')
    b = /* HTML */ `<div class="card">
      ${dl([
        ['Modalidad preferida', escapeHtml(m.mode)],
        ['Tipo de oportunidad', escapeHtml(m.opp)],
      ])}${edit('prefs', 'Editar preferencias')}
    </div>`;
  if (t == 'cursos') {
    const l = Object.keys(state.cs)
        .map((id) => db.courses.get(id))
        .filter(Boolean),
      n = (s) => l.filter((c) => state.cs[c.id] == s).length;
    b = l.length
      ? /* HTML */ `<p class="u-muted">
            ${STATUS_LABELS.guardado}: ${n('guardado')} · ${STATUS_LABELS.progreso}:
            ${n('progreso')} · ${STATUS_LABELS.completado}: ${n('completado')}
          </p>
          ${grid(l.map((c) => courseCard(c)).join(''))}`
      : '<div class=empty-state>Aún no guardas cursos. <a href="#/cursos">Explora el catálogo</a>.</div>';
  }
  if (t == 'guard') {
    const l = state.sj.map((id) => db.jobs.get(id)).filter(Boolean);
    b = l.length
      ? grid(l.map((j) => jobCard(j)).join(''))
      : '<div class=empty-state>Aún no guardas vacantes. <a href="#/empleos">Explora las oportunidades</a>.</div>';
  }
  if (t == 'apps') {
    const l = state.apps.filter((a) => a.cand == (state.session || 'me'));
    b = l.length
      ? /* HTML */ `<div class="card">
          ${l
            .map((a) => {
              const j = db.jobs.get(a.job);
              return /* HTML */ `<div class="row">
                <b class="u-grow">${escapeHtml(j?.t)}</b
                ><span class="u-muted">${escapeHtml(companyOf(j?.co).n)}</span
                ><span class="tag tag--success">${a.st}</span>
              </div>`;
            })
            .join('')}
          <p class="u-muted">Postulaciones ficticias: no se enviaron a ninguna empresa.</p>
        </div>`
      : '<div class=empty-state>Todavía no te has postulado.</div>';
  }
  if (t == 'rec')
    b =
      sec(
        'Vacantes para ti',
        recommendJobs()
          .map(({ j, r }) => jobCard(j, why(r)))
          .join(''),
      ) +
        sec(
          'Cursos recomendados',
          recommendCourses()
            .map(({ c, r }) => courseCard(c, 'Por qué: coincide con ' + r.join(', ') + '.'))
            .join(''),
        ) +
        sec(
          'Empresas para conocer',
          recommendCompanies()
            .map(({ c, r }) => compCard(c, why(r)))
            .join(''),
        ) +
        sec(
          'Guías que te pueden servir',
          recommendArticles()
            .map(({ a, r }) => artCard(a, why(r)))
            .join(''),
        ) ||
      '<div class=empty-state>Agrega habilidades e intereses en tu perfil para recibir recomendaciones.</div>';
  return /* HTML */ `<h1 class="page-title page-title--spaced">Mi perfil</h1>
    <div class="card profile">
      <div class="row">
        <div class="avatar profile__avatar">${escapeHtml(initials(m.name))}</div>
        <div class="u-grow">
          <h2 class="profile__name">${escapeHtml(m.name)}</h2>
          <span class="u-muted">${escapeHtml(m.career)} · ${escapeHtml(m.city)}</span>
        </div>
        <div class="profile__progress">
          <span class="u-muted">Perfil completo al ${pc}%</span>
          <div class="progress"><i class="progress__fill" style="width:${pc}%"></i></div>
        </div>
      </div>
    </div>
    <div class="tabs">
      ${TABS.map(([k, l]) => /* HTML */ `<button class="btn ${t == k ? 'btn--active' : ''}" data-a="tab" data-id=${k}>${l}</button>`).join('')}
    </div>
    ${b}`;
};
export { profilePage };
