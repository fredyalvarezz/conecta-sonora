/* Página Conoce las empresas: directorio con filtros. */
import { compCard } from '../../components/cards/company-card.js';
import { emptyState } from '../../components/empty-state/empty-state.js';
import { filterSelect } from '../../components/filters/filter-select.js';
import { companyFilters, state } from '../../state/store.js';
import { qs } from '../../utils/dom.js';
import { uniqueValues } from '../../utils/format.js';

const companiesPage = () =>
  /* HTML */ `<div class="row" style="margin-top:24px">
      <h1 class="page-title u-grow">Conoce las empresas</h1>
      ${state.role == 'admin' ? '<button class="btn btn--accent" data-a=newco>+ Nueva empresa</button>' : ''}
    </div>
    <p class="u-muted">Perfiles inventados; no representan empresas reales.</p>
    <div class="filters">
      <input
        class="filters__control"
        data-f="companies.q"
        placeholder="Nombre de la empresa"
        aria-label="Nombre"
      />${filterSelect('city', uniqueValues(state.companies, 'city'), 'Ciudad', 'companies')}${filterSelect('sec', uniqueValues(state.companies, 'sec'), 'Sector', 'companies')}
    </div>
    <p id="cnt" class="u-muted"></p>
    <div class="grid grid--cards" id="res"></div>`;
const renderCompanyResults = () => {
  const q = (companyFilters.q || '').toLowerCase(),
    l = state.companies.filter(
      (c) =>
        (!q || c.n.toLowerCase().includes(q)) &&
        (!companyFilters.city || c.city == companyFilters.city) &&
        (!companyFilters.sec || c.sec == companyFilters.sec),
    );
  qs('#cnt').textContent = `${l.length} empresa(s)`;
  qs('#res').innerHTML = l.length
    ? l.map((c) => compCard(c)).join('')
    : /* HTML */ `<div style="grid-column:1/-1">
        ${emptyState('Ninguna empresa coincide con tu búsqueda.')}
      </div>`;
};

export { companiesPage, renderCompanyResults };
