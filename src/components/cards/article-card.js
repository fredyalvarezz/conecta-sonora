/* Tarjeta de artículo de orientación profesional. */
import './card.css';
import { escapeHtml } from '../../utils/dom.js';
const artCard = (a, why) =>
  /* HTML */ `<div class="card">
    <div class="card__icon">${escapeHtml(a.ic)}</div>
    <span class="tag card__tag">${escapeHtml(a.cat)}</span>
    <h3 class="card__title">${escapeHtml(a.t)}</h3>
    <div class="u-muted">${a.min} min de lectura · ${escapeHtml(a.upd)}</div>
    ${why ? /* HTML */ `<p class="card__why">${why}</p>` : ''}<button
      class="btn btn--primary btn--small"
      data-a="art"
      data-id=${a.id}
    >
      Leer
    </button>
  </div>`;
export { artCard };
