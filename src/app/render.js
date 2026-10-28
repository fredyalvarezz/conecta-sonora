/* Dibuja la pantalla actual: el header y la página que corresponde a la ruta. También refresca los resultados de los filtros. */
import { qs } from '../utils/dom.js';
import { saveState } from '../state/store.js';
import { renderHeader } from '../components/header/header.js';
import { syncFilterInputs } from '../components/filters/filter-select.js';
import { pages } from '../pages/index.js';
import { renderJobResults } from '../pages/jobs/jobs.js';
import { renderCourseResults } from '../pages/courses/courses.js';
import { renderCompanyResults } from '../pages/companies/companies.js';
import { renderArticleResults } from '../pages/guides/guides.js';
export const currentRoute = () => location.hash.slice(1) || '/';
const RESULT_RENDERERS = {
  '/empleos': renderJobResults,
  '/cursos': renderCourseResults,
  '/empresas': renderCompanyResults,
  '/orientacion': renderArticleResults,
};
export const refreshResults = () => RESULT_RENDERERS[currentRoute()]?.();
export function renderApp() {
  const r = currentRoute();
  renderHeader(r);
  qs('#app').innerHTML = (pages[r] || pages['/'])();
  syncFilterInputs();
  refreshResults();
  saveState();
  window.scrollTo(0, 0);
}
