/* Tarjeta de curso y etiquetas de estado (guardado, en progreso, completado). */
import './card.css';
import { state } from '../../state/store.js';
import { escapeHtml } from '../../utils/dom.js';
import { formatPrice } from '../../utils/format.js';

const STATUS_LABELS = { guardado: 'Guardado', progreso: 'En progreso', completado: 'Completado ✓' };
const courseCard = (c, why) =>
  /* HTML */ `<div class="card">
    <span
      ><span class="tag">${escapeHtml(c.cat)}</span
      ><span class="tag tag--accent">${c.lvl}</span
      >${c.ext ? '<span class="tag tag--success">Sitio externo</span>' : ''}</span
    >
    <h3 style="margin:0;font-size:17px">${escapeHtml(c.t)}</h3>
    <div class="u-muted">${escapeHtml(c.d)}</div>
    <div class="u-muted">${c.kind} · ${c.dur} · ${escapeHtml(c.prov)}</div>
    <b>${c.ext ? 'Consulta costos en el sitio' : formatPrice(c.price)}</b
    >${why ? /* HTML */ `<p class="card__why">${why}</p>` : ''}
    <div class="row">
      <button class="btn btn--primary btn--small" data-a="course" data-id=${c.id}>
        Ver detalles</button
      ><button class="btn btn--small" data-a="cs" data-id=${c.id}>
        ${state.cs[c.id] ? STATUS_LABELS[state.cs[c.id]] + ' ▸' : '☆ Guardar'}
      </button>
    </div>
  </div>`;

export { STATUS_LABELS, courseCard };
