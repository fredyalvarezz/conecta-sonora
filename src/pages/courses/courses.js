/* Página de cursos y capacitación: filtros y catálogo. */
import { courseCard } from '../../components/cards/course-card.js';
import { emptyState } from '../../components/empty-state/empty-state.js';
import { filterSelect } from '../../components/filters/filter-select.js';
import { courseFilters, state } from '../../state/store.js';
import { qs } from '../../utils/dom.js';

const coursesPage = () =>
  /* HTML */ `<div class="row" style="margin-top:24px">
      <h1 class="page-title u-grow">Cursos y capacitación</h1>
      ${state.role == 'admin' ? '<button class="btn btn--accent" data-a=newc>+ Nuevo curso</button>' : ''}
    </div>
    <p class="u-muted">Precios y proveedores ficticios; no hay inscripción real.</p>
    <div class="filters">
      <input
        class="filters__control"
        data-f="courses.q"
        placeholder="Buscar curso"
        aria-label="Buscar"
      />${filterSelect('cat', state.cats.courses, 'Categoría', 'courses')}${filterSelect('lvl', ['Básico', 'Intermedio', 'Avanzado'], 'Nivel', 'courses')}<select
        class="filters__control"
        data-f="courses.pr"
        aria-label="Precio"
      >
        <option value="">Cualquier precio</option>
        <option value="free">Gratis</option>
        <option value="paid">De pago (demo)</option>
      </select>
    </div>
    <p id="cnt" class="u-muted"></p>
    <div class="grid grid--cards" id="res"></div>`;
const renderCourseResults = () => {
  const q = (courseFilters.q || '').toLowerCase(),
    l = state.courses.filter(
      (c) =>
        (!q || (c.t + c.d).toLowerCase().includes(q)) &&
        (!courseFilters.cat || c.cat == courseFilters.cat) &&
        (!courseFilters.lvl || c.lvl == courseFilters.lvl) &&
        (!courseFilters.pr || (courseFilters.pr == 'free') == !c.price),
    );
  qs('#cnt').textContent = `${l.length} curso(s)`;
  qs('#res').innerHTML = l.length
    ? l.map((c) => courseCard(c)).join('')
    : /* HTML */ `<div style="grid-column:1/-1">
        ${emptyState('No hay cursos con esos filtros.')}
      </div>`;
};

export { coursesPage, renderCourseResults };
