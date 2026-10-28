/* Tarjeta de empresa con botones para ver su perfil y explorar sus vacantes. */
import './card.css';
import { state } from '../../state/store.js';
import { escapeHtml } from '../../utils/dom.js';
import { initials } from '../../utils/format.js';

const compCard = (c, why) => {
  const n = state.jobs.filter((j) => j.co == c.id && j.status == 'activa').length;
  return /* HTML */ `<div class="card">
    <div class="row">
      <div class="avatar" style="background:${c.col}">${initials(c.n)}</div>
      <div>
        <h3 style="margin:0;font-size:17px">${escapeHtml(c.n)}</h3>
        <span class="u-muted">${escapeHtml(c.sec)} · ${escapeHtml(c.city)}</span>
      </div>
      <span class="tag tag--accent u-grow" style="flex:none">Datos de ejemplo</span>
    </div>
    <div class="u-muted">${escapeHtml(c.d)}</div>
    <div>
      ${c.areas.map((a) => /* HTML */ `<span class="tag">${escapeHtml(a)}</span>`).join('')}
    </div>
    <div class="u-muted">${n} vacante(s) activa(s) de demostración</div>
    ${why ? /* HTML */ `<p class="card__why">${why}</p>` : ''}
    <div class="row">
      <button class="btn btn--primary btn--small" data-a="comp" data-id=${c.id}>Ver perfil</button
      ><button class="btn btn--small" data-a="cojobs" data-id=${c.id}>Explorar vacantes</button>
    </div>
  </div>`;
};

export { compCard };
