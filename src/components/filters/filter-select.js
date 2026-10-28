/* Select reutilizable para filtros y función que mantiene los campos sincronizados con el estado. */
import './filters.css';
import { articleFilters, courseFilters, companyFilters, jobFilters } from '../../state/store.js';
import { selectOptions } from '../../utils/format.js';

const filterSelect = (k, o, l, st) =>
  /* HTML */ `<select class="filters__control" data-f="${st}.${k}" aria-label="${l}">
    ${selectOptions(o, l)}
  </select>`;
const syncFilterInputs = () => {
  document.querySelectorAll('[data-f]').forEach((e) => {
    const [s, k] = e.dataset.f.split('.');
    e.value =
      {
        jobs: jobFilters,
        courses: courseFilters,
        companies: companyFilters,
        articles: articleFilters,
      }[s][k] || '';
  });
};

export { filterSelect, syncFilterInputs };
