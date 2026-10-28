/* Página de oportunidades laborales: filtros y lista de vacantes. */
import { jobCard } from '../../components/cards/job-card.js';
import { emptyState } from '../../components/empty-state/empty-state.js';
import { filterSelect } from '../../components/filters/filter-select.js';
import { companyOf } from '../../services/repo.js';
import { jobFilters, state } from '../../state/store.js';
import { qs } from '../../utils/dom.js';
import { uniqueValues } from '../../utils/format.js';

const jobsPage = () =>
  /* HTML */ `<h1 class="page-title page-title--spaced">Oportunidades laborales en Sonora</h1>
    <p class="u-muted">Vacantes ficticias para demostración.</p>
    <div class="filters">
      <input
        class="filters__control"
        data-f="jobs.q"
        placeholder="Palabra clave"
        aria-label="Palabra clave"
      />${filterSelect('city', uniqueValues(state.jobs, 'city'), 'Ciudad', 'jobs')}${filterSelect('area', uniqueValues(state.jobs, 'area'), 'Área', 'jobs')}${filterSelect('career', [...new Set(state.jobs.flatMap((j) => j.careers))].sort(), 'Carrera', 'jobs')}${filterSelect('mode', ['Presencial', 'Híbrida', 'Remota'], 'Modalidad', 'jobs')}${filterSelect('type', uniqueValues(state.jobs, 'type'), 'Tipo', 'jobs')}${filterSelect('exp', uniqueValues(state.jobs, 'exp'), 'Experiencia', 'jobs')}<select
        class="filters__control"
        data-f="jobs.days"
        aria-label="Fecha"
      >
        <option value="">Cualquier fecha</option>
        <option value="3">Últimos 3 días</option>
        <option value="7">Última semana</option>
        <option value="30">Último mes</option></select
      ><select class="filters__control" data-f="jobs.sort" aria-label="Orden">
        <option value="">Más recientes</option>
        <option value="old">Más antiguas</option>
      </select>
    </div>
    <p id="cnt" class="u-muted"></p>
    <div class="grid grid--cards" id="res"></div>`;
const renderJobResults = () => {
  const q = (jobFilters.q || '').toLowerCase(),
    l = state.jobs
      .filter(
        (j) =>
          j.status == 'activa' &&
          (!q || (j.t + j.skills + companyOf(j.co).n).toLowerCase().includes(q)) &&
          ['city', 'area', 'mode', 'type', 'exp'].every(
            (k) => !jobFilters[k] || j[k] == jobFilters[k],
          ) &&
          (!jobFilters.days || j.days <= +jobFilters.days) &&
          (!jobFilters.career || j.careers.includes(jobFilters.career)),
      )
      .sort((a, b) => (jobFilters.sort ? b.days - a.days : a.days - b.days));
  qs('#cnt').textContent = `${l.length} resultado(s)`;
  qs('#res').innerHTML = l.length
    ? l.map((j) => jobCard(j)).join('')
    : /* HTML */ `<div style="grid-column:1/-1">
        ${emptyState('No encontramos vacantes con esos filtros. Prueba quitar alguno.')}
      </div>`;
};

export { jobsPage, renderJobResults };
