/* Acciones de cursos: ver detalle, guardar/cambiar estado y crear/editar (administrador). */
import { renderApp } from '../render.js';
import { STATUS_LABELS } from '../../components/cards/course-card.js';
import { openFormModal } from '../../components/form-modal/form-modal.js';
import { db } from '../../services/repo.js';
import { state } from '../../state/store.js';
import { escapeHtml, openModal, showToast } from '../../utils/dom.js';
import { formatPrice, splitList } from '../../utils/format.js';

export const coursesActions = {
  course: (id) => {
    const c = db.courses.get(id);
    openModal(
      /* HTML */ `<h2>${escapeHtml(c.t)}</h2>
        <span class="tag">${escapeHtml(c.cat)}</span><span class="tag tag--accent">${c.lvl}</span>
        <p>${escapeHtml(c.d)}</p>
        <b>Habilidades que desarrolla</b>
        <ul class="list">
          ${c.skills.map((s) => /* HTML */ `<li>${escapeHtml(s)}</li>`).join('')}
        </ul>
        <p class="u-muted">
          ${c.kind} · ${c.dur} · ${escapeHtml(c.prov)} ·
          ${c.ext ? 'Consulta costos y requisitos en el sitio.' : formatPrice(c.price) + '. Recurso demostrativo: no hay inscripción ni enlace real.'}
        </p>
        ${
          c.ext
            ? /* HTML */ `<p>
                  <a
                    class="btn btn--accent"
                    href="${escapeHtml(c.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Abrir sitio externo</a
                  >
                </p>
                <p class="u-muted">
                  Enlace externo verificado el 10 de octubre de 2026. Al abrirlo sales de Conecta
                  Sonora.
                </p>`
            : ''
        }
        <div class="row">
          <button class="btn btn--primary" data-a="cs" data-id=${c.id}>
            ${state.cs[id] ? STATUS_LABELS[state.cs[id]] + ' ▸' : '☆ Guardar'}</button
          >${state.role == 'admin' ? /* HTML */ `<button class="btn" data-a="editc" data-id=${id}>Editar</button>` : ''}
        </div>`,
    );
  },
  cs: (id) => {
    const n = { undefined: 'guardado', guardado: 'progreso', progreso: 'completado' }[state.cs[id]];
    n ? (state.cs[id] = n) : delete state.cs[id];
    renderApp();
    showToast(n ? STATUS_LABELS[n] : 'Curso quitado de tu lista');
  },
  newc: () => coursesActions.editc(),
  editc: (id) => {
    const c = id
      ? db.courses.get(id)
      : { cat: state.cats.courses[0], lvl: 'Básico', kind: 'Curso', price: 0 };
    openFormModal(
      id ? 'Editar curso' : 'Nuevo curso',
      [
        { k: 't', l: 'Nombre', r: 1 },
        { k: 'cat', l: 'Categoría', t: 'sel', o: state.cats.courses },
        { k: 'lvl', l: 'Nivel', t: 'sel', o: ['Básico', 'Intermedio', 'Avanzado'] },
        { k: 'kind', l: 'Tipo de recurso', t: 'sel', o: ['Curso', 'Video', 'Guía', 'Plataforma'] },
        { k: 'price', l: 'Precio demo (0 = gratis)' },
        { k: 'dur', l: 'Duración', r: 1 },
        { k: 'prov', l: 'Proveedor (demo)', r: 1 },
        { k: 'skills', l: 'Habilidades que desarrolla (coma)' },
        { k: 'd', l: 'Descripción', t: 'area', r: 1 },
      ],
      { ...c, skills: (c.skills || []).join(', ') },
      (d) => {
        if (isNaN(+d.price)) return 'El precio debe ser un número.';
        const sk = splitList(d.skills),
          o = { ...d, price: +d.price, skills: sk.length ? sk : [d.cat] };
        id ? db.courses.update(id, o) : db.courses.create(o);
      },
    );
  },
};
