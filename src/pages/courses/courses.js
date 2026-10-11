import { courseCard } from '../../components/cards/course-card.js';
import { empty } from '../../components/empty-state/empty-state.js';
import { sel } from '../../components/filters/filter-select.js';
import { CF, S } from '../../state/store.js';
import { $ } from '../../utils/dom.js';
import { uniq } from '../../utils/format.js';

const coursesPage = () => `<div class=row style="margin-top:24px"><h1 class="page-title u-grow">Cursos y capacitación</h1>${S.role == 'admin' ? '<button class="btn btn--accent" data-a=newc>+ Nuevo curso</button>' : ''}</div><p class=u-muted>Precios y proveedores ficticios; no hay inscripción real.</p><div class=filters><input class=filters__control data-f=CF.q placeholder="Buscar curso" aria-label="Buscar">${sel('cat', uniq(S.courses, 'cat'), 'Categoría', 'CF')}${sel('lvl', ['Básico', 'Intermedio', 'Avanzado'], 'Nivel', 'CF')}<select class=filters__control data-f=CF.pr aria-label="Precio"><option value="">Cualquier precio</option><option value=free>Gratis</option><option value=paid>De pago (demo)</option></select></div><p id=cnt class=u-muted></p><div class="grid grid--cards" id=res></div>`;
const coursesRes = () => { const q = (CF.q || '').toLowerCase(), l = S.courses.filter(c => (!q || (c.t + c.d).toLowerCase().includes(q)) && (!CF.cat || c.cat == CF.cat) && (!CF.lvl || c.lvl == CF.lvl) && (!CF.pr || (CF.pr == 'free') == !c.price)); $('#cnt').textContent = `${l.length} curso(s)`; $('#res').innerHTML = l.length ? l.map(c=>courseCard(c)).join('') : `<div style="grid-column:1/-1">${empty('No hay cursos con esos filtros.')}</div>` };

export { coursesPage, coursesRes };
