/* Acciones de vacantes: ver detalle, guardar, postularse y crear/editar/pausar/eliminar (empresa o administrador). */
import { renderApp } from '../render.js';
import { openFormModal } from '../../components/form-modal/form-modal.js';
import { CITIES } from '../../data/constants.js';
import { companyOf, db } from '../../services/repo.js';
import { jobFilters, state } from '../../state/store.js';
import { closeModal, escapeHtml, openModal, qs, showToast } from '../../utils/dom.js';
import { splitList, timeAgo } from '../../utils/format.js';
import { authActions } from './auth.js';

const jobFormFields = () => [
  { k: 't', l: 'Puesto', r: 1 },
  { k: 'city', l: 'Ciudad', t: 'sel', o: CITIES },
  { k: 'area', l: 'Área profesional', r: 1 },
  { k: 'careers', l: 'Carreras relacionadas (separadas por coma)' },
  { k: 'mode', l: 'Modalidad', t: 'sel', o: ['Presencial', 'Híbrida', 'Remota'] },
  { k: 'type', l: 'Tipo de oportunidad', t: 'sel', o: ['Prácticas', 'Beca', 'Primer empleo'] },
  { k: 'exp', l: 'Experiencia', t: 'sel', o: ['Sin experiencia', 'Menos de 1 año', '1 a 2 años'] },
  { k: 'sal', l: 'Rango salarial (demo)' },
  { k: 'skills', l: 'Habilidades (separadas por coma)', r: 1 },
  { k: 'desc', l: 'Descripción', t: 'area', r: 1 },
];

function openJobForm(id) {
  const adm = state.role == 'admin',
    j = id
      ? db.jobs.get(id)
      : {
          city: 'Hermosillo',
          mode: 'Presencial',
          type: 'Prácticas',
          exp: 'Sin experiencia',
          sal: 'A tratar (demo)',
        },
    fs = jobFormFields();
  if (adm) fs.unshift({ k: 'empresa', l: 'Empresa', t: 'sel', o: state.companies.map((c) => c.n) });
  openFormModal(
    id ? 'Editar vacante' : 'Nueva vacante',
    fs,
    {
      ...j,
      skills: (j.skills || []).join(', '),
      careers: (j.careers || []).join(', '),
      empresa: companyOf(j.co || state.myco).n,
    },
    (d) => {
      if (d.t.trim().length < 5) return 'El puesto debe tener al menos 5 caracteres.';
      if (d.desc.trim().length < 20) return 'La descripción debe tener al menos 20 caracteres.';
      const c = adm ? state.companies.find((x) => x.n == d.empresa) : db.companies.get(state.myco);
      if (!c) return 'Selecciona una empresa.';
      delete d.empresa;
      const o = { ...d, skills: splitList(d.skills), careers: splitList(d.careers), co: c.id };
      id ? db.jobs.update(id, o) : db.jobs.create({ ...o, days: 0, status: 'activa' });
    },
  );
}

export const jobsActions = {
  job: (id) => {
    const j = db.jobs.get(id),
      c = companyOf(j.co);
    openModal(
      /* HTML */ `<h2>${escapeHtml(j.t)}</h2>
        <p>
          <a href="#" data-a="comp" data-id=${j.co}>${escapeHtml(c.n)}</a> · ${escapeHtml(j.city)} ·
          ${j.mode}
        </p>
        <div><span class="tag">${j.type}</span><span class="tag tag--accent">${j.exp}</span></div>
        <p>${escapeHtml(j.desc)}</p>
        <b>Responsabilidades</b>
        <ul class="list">
          <li>Apoyar al equipo en tareas del área de ${escapeHtml(j.area)}.</li>
          <li>Dar seguimiento a pendientes semanales.</li>
        </ul>
        <b>Requisitos</b>
        <ul class="list">
          ${j.skills.map((s) => /* HTML */ `<li>${escapeHtml(s)}</li>`).join('')}
        </ul>
        <p class="u-muted">
          Condiciones de ejemplo: ${escapeHtml(j.sal)} · publicada ${timeAgo(j.days).toLowerCase()}.
          Vacante ficticia.
        </p>
        <div class="row">
          <button class="btn btn--accent" data-a="apply" data-id=${j.id}>Postularme</button
          ><button class="btn" data-a="sj" data-id=${j.id}>
            ${state.sj.includes(j.id) ? '★ Guardada' : '☆ Guardar'}
          </button>
        </div>`,
    );
  },
  sj: (id) => {
    state.sj = state.sj.includes(id) ? state.sj.filter((x) => x != id) : [...state.sj, id];
    renderApp();
    showToast('Vacante guardada actualizada');
  },
  apply: (id) => {
    if (state.role != 'cand') return authActions.login();
    if (state.apps.some((a) => a.cand == (state.session || 'me') && a.job == id))
      return showToast('Ya te postulaste a esta vacante');
    const j = db.jobs.get(id);
    openModal(
      /* HTML */ `<h2>Postularme: ${escapeHtml(j.t)}</h2>
        <p class="u-muted">Simulación: tu postulación no se envía a ninguna empresa.</p>
        <form class="form" id="af">
          <label class="form__label"
            >Mensaje de presentación<textarea
              class="form__control"
              name="m"
              rows="4"
            ></textarea></label
          ><label class="form__label"
            >CV (solo muestra el nombre del archivo)<input
              class="form__control"
              type="file"
              name="f"
              id="ff"
          /></label>
          <p class="form__error" id="er"></p>
          <button class="btn btn--primary">Enviar postulación de ejemplo</button>
        </form>`,
    );
    qs('#af').onsubmit = (e) => {
      e.preventDefault();
      if (qs('#af').m.value.trim().length < 10)
        return (qs('#er').textContent = 'Escribe al menos 10 caracteres en tu mensaje.');
      state.apps.push({
        id: 'p' + ++state.seq,
        job: id,
        cand: state.session || 'me',
        st: 'Recibida',
      });
      closeModal();
      renderApp();
      showToast('Postulación simulada registrada en Mis postulaciones');
    };
  },
  cojobs: (id) => {
    closeModal();
    for (const k in jobFilters) delete jobFilters[k];
    jobFilters.q = companyOf(id).n;
    location.hash = '#/empleos';
    renderApp();
  },
  newj: () => openJobForm(),
  editj: (id) => openJobForm(id),
  delj: (id) => {
    if (confirm('¿Eliminar esta vacante de la demostración?')) {
      db.jobs.remove(id);
      renderApp();
    }
  },
  jst: (id, b) => {
    db.jobs.update(id, { status: b.dataset.s });
    renderApp();
    showToast('Estado actualizado: ' + b.dataset.s);
  },
};
