/* Acciones de empresas: ver perfil y crear/editar (administrador). */
import { openFormModal } from '../../components/form-modal/form-modal.js';
import { CITIES } from '../../data/constants.js';
import { db } from '../../services/repo.js';
import { state } from '../../state/store.js';
import { escapeHtml, openModal } from '../../utils/dom.js';
import { splitList } from '../../utils/format.js';

const isDuplicateCompany = (n, id) =>
  state.companies.some((c) => c.n.toLowerCase() == n.trim().toLowerCase() && c.id != id);

export const companiesActions = {
  comp: (id) => {
    const c = db.companies.get(id),
      l = state.jobs.filter((j) => j.co == id && j.status == 'activa');
    openModal(
      /* HTML */ `<h2>${escapeHtml(c.n)}</h2>
        <span class="tag tag--accent">Datos de ejemplo</span>
        <p>${escapeHtml(c.d)}</p>
        <p class="u-muted">
          ${escapeHtml(c.sec)} ·
          ${escapeHtml(c.city)}${c.prog ? ' · Programa: ' + escapeHtml(c.prog) : ''}
        </p>
        <div>
          ${c.skills.map((s) => /* HTML */ `<span class="tag">${escapeHtml(s)}</span>`).join('')}
        </div>
        <h3 style="margin-top:14px">Vacantes activas (${l.length})</h3>
        ${l.map((j) => /* HTML */ `<p><a href="#" data-a="job" data-id=${j.id}>${escapeHtml(j.t)}</a> <span class="u-muted">· ${j.type}</span></p>`).join('') || '<p class=u-muted>Sin vacantes activas.</p>'}${state.role == 'admin' ? /* HTML */ `<button class="btn" data-a="editco" data-id=${id}>Editar empresa</button>` : ''}`,
    );
  },
  newco: () => companiesActions.editco(),
  editco: (id) => {
    const c = id ? db.companies.get(id) : { city: 'Hermosillo', col: '#2C3E66' };
    openFormModal(
      id ? 'Editar empresa' : 'Nueva empresa',
      [
        { k: 'n', l: 'Nombre', r: 1 },
        { k: 'sec', l: 'Sector', r: 1 },
        { k: 'city', l: 'Ciudad', t: 'sel', o: CITIES },
        { k: 'areas', l: 'Áreas profesionales (coma)' },
        { k: 'skills', l: 'Habilidades que busca (coma)' },
        { k: 'prog', l: 'Programa para estudiantes (opcional)' },
        { k: 'd', l: 'Descripción', t: 'area', r: 1 },
      ],
      { ...c, areas: (c.areas || []).join(', '), skills: (c.skills || []).join(', ') },
      (d) => {
        if (isDuplicateCompany(d.n, id)) return 'Ya existe una empresa con ese nombre.';
        const o = { ...d, areas: splitList(d.areas), skills: splitList(d.skills), col: c.col };
        id ? db.companies.update(id, o) : db.companies.create(o);
      },
    );
  },
};
