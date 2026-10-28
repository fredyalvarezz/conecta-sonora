/* Panel de administración: gestionar empresas, vacantes, cursos, artículos y categorías. */
import './admin.css';
import '../../components/table/table.css';
import '../../components/chip/chip.css';
import { loginRequired } from '../../components/empty-state/empty-state.js';
import { companyOf } from '../../services/repo.js';
import { state } from '../../state/store.js';
import { escapeHtml } from '../../utils/dom.js';
const block = (title, k, list, fmt, add, edit) =>
  /* HTML */ `<div class="row admin__head">
      <h2 class="admin__title u-grow">${title} (${list.length})</h2>
      <button class="btn btn--accent btn--small" data-a=${add}>+ Nuevo</button>
    </div>
    <div class="card u-scroll-x">
      <table class="table">
        ${
          list
            .map(
              (x) =>
                /* HTML */ `<tr>
                  <td class="table__cell">${escapeHtml(fmt(x))}</td>
                  <td class="table__cell admin__actions">
                    <button class="btn btn--small" data-a=${edit} data-id=${x.id}>Editar</button>
                    <button class="btn btn--small" data-a="del" data-id=${x.id} data-k=${k}>
                      Eliminar
                    </button>
                  </td>
                </tr>`,
            )
            .join('') || '<tr><td class=table__cell>Sin elementos.</td></tr>'
        }
      </table>
    </div>`;
const cats = (t, k) =>
  /* HTML */ `<div class="card">
    <div class="row">
      <h3 class="u-grow">${t}</h3>
      <button class="btn btn--small" data-a="catadd" data-id=${k}>+ Categoría</button>
    </div>
    <div>
      ${state.cats[k].map((n) => /* HTML */ `<span class="chip">${escapeHtml(n)}<button class="chip__remove" data-a="catdel" data-id=${k} data-n="${escapeHtml(n)}" aria-label="Quitar ${escapeHtml(n)}">×</button></span>`).join('')}
    </div>
  </div>`;
const adminPage = () =>
  state.role != 'admin'
    ? loginRequired('Administración', 'administrador')
    : /* HTML */ `<div class="row admin__head">
          <h1 class="page-title u-grow">Administración</h1>
          <button class="btn btn--accent" data-a="reset">Restablecer demostración</button>
        </div>
        <p class="u-muted">
          Herramientas para gestionar el contenido de ejemplo. Es una demostración, no un sistema de
          permisos.
        </p>
        ${block('Empresas', 'E', state.companies, (x) => x.n + ' · ' + x.city, 'newco', 'editco')}${block('Vacantes', 'V', state.jobs, (x) => `${x.t} · ${companyOf(x.co).n} · ${x.status}`, 'newj', 'editj')}${block('Cursos', 'C', state.courses, (x) => `${x.t} · ${x.cat}`, 'newc', 'editc')}${block('Artículos', 'A', state.articles, (x) => `${x.t} · ${x.cat}`, 'newa', 'edita')}
        <div class="row admin__head"><h2 class="admin__title">Categorías</h2></div>
        <div class="grid grid--4">
          ${cats('Cursos', 'courses')}${cats('Artículos', 'articles')}
        </div>`;
export { adminPage };
