/* Página de orientación profesional: biblioteca de artículos con búsqueda. */
import { artCard } from '../../components/cards/article-card.js';
import { emptyState } from '../../components/empty-state/empty-state.js';
import { filterSelect } from '../../components/filters/filter-select.js';
import { articleFilters, state } from '../../state/store.js';
import { qs } from '../../utils/dom.js';

const guidesPage = () =>
  /* HTML */ `<h1 class="page-title page-title--spaced">Orientación profesional</h1>
    <div class="filters">
      <input
        class="filters__control"
        data-f="articles.q"
        placeholder="Buscar guía"
        aria-label="Buscar"
      />${filterSelect('cat', state.cats.articles, 'Categoría', 'articles')}
    </div>
    <div class="grid grid--cards" id="res"></div>`;
const renderArticleResults = () => {
  const q = (articleFilters.q || '').toLowerCase(),
    l = state.articles.filter(
      (a) =>
        (!q || a.t.toLowerCase().includes(q)) &&
        (!articleFilters.cat || a.cat == articleFilters.cat),
    );
  qs('#res').innerHTML = l.length
    ? l.map((a) => artCard(a)).join('')
    : /* HTML */ `<div style="grid-column:1/-1">
        ${emptyState('No hay guías con esa búsqueda.')}
      </div>`;
};

export { guidesPage, renderArticleResults };
