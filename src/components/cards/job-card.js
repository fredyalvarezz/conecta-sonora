/* Tarjeta de vacante. El segundo parámetro (why) muestra el motivo cuando es una recomendación. */
import './card.css';
import { companyOf } from '../../services/repo.js';
import { state } from '../../state/store.js';
import { escapeHtml } from '../../utils/dom.js';
import { timeAgo, initials } from '../../utils/format.js';

const jobCard = (j, why) =>
  /* HTML */ `<div class="card">
    <div class="row">
      <div class="avatar" style="background:${companyOf(j.co).col}">
        ${initials(companyOf(j.co).n)}
      </div>
      <div>
        <h3 style="margin:0;font-size:17px">${escapeHtml(j.t)}</h3>
        <span class="u-muted">${escapeHtml(companyOf(j.co).n)} · ${escapeHtml(j.city)}</span>
      </div>
    </div>
    <div>
      <span class="tag">${j.mode}</span><span class="tag tag--success">${j.type}</span
      ><span class="tag tag--accent">${j.exp}</span>
    </div>
    <div class="u-muted">${escapeHtml(j.sal)} · ${timeAgo(j.days)}</div>
    <div class="u-muted">${j.skills.map(escapeHtml).join(' · ')}</div>
    ${why ? /* HTML */ `<p class="card__why">${why}</p>` : ''}
    <div class="row">
      <button class="btn btn--primary btn--small" data-a="job" data-id=${j.id}>Ver más</button
      ><button class="btn btn--small" data-a="sj" data-id=${j.id}>
        ${state.sj.includes(j.id) ? '★ Guardada' : '☆ Guardar'}
      </button>
    </div>
  </div>`;

export { jobCard };
