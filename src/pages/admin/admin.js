import '../../components/table/table.css';
import { gate } from '../../components/empty-state/empty-state.js';
import { co } from '../../services/repo.js';
import { S } from '../../state/store.js';
import { esc } from '../../utils/dom.js';

const adminPage = () => { if (S.role != 'admin') return gate('Administración', 'administrador'); const T = (t, l, f) => `<h2 style="margin-top:24px">${t}</h2><div class="card u-scroll-x"><table class=table>${l.map(x => `<tr><td class=table__cell>${esc(f(x))}</td><td class=table__cell style="text-align:right"><button class="btn btn--small" data-a=del data-id=${x.id} data-k=${t[0]}>Eliminar</button></td></tr>`).join('')}</table></div>`; return `<div class=row style="margin-top:24px"><h1 class="page-title u-grow">Administración (demo)</h1><button class="btn btn--accent" data-a=reset>Restablecer demostración</button></div><p class=u-muted>Solo ilustra herramientas de gestión; no es un sistema de permisos.</p>${T('Empresas', S.companies, x => x.n)}${T('Vacantes', S.jobs, x => x.t + ' · ' + co(x.co).n)}${T('Cursos', S.courses, x => x.t)}${T('Artículos', S.articles, x => x.t)}` };

export { adminPage };
