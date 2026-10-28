/* Panel de la empresa: resumen, vacantes (crear/editar/pausar/cerrar) y postulaciones. */
import '../../components/table/table.css';
import { loginRequired } from '../../components/empty-state/empty-state.js';
import { db } from '../../services/repo.js';
import { state } from '../../state/store.js';
import { escapeHtml } from '../../utils/dom.js';

const panelPage = () => {
  if (state.role != 'emp') return loginRequired('Panel de empresa', 'empresa');
  const c = db.companies.get(state.myco);
  if (!c) return loginRequired('Panel de empresa', 'empresa');
  const js = state.jobs.filter((j) => j.co == c.id),
    ap = state.apps.filter((a) => js.some((j) => j.id == a.job));
  return /* HTML */ `<div class="row" style="margin-top:24px">
      <h1 class="page-title u-grow">Panel de ${escapeHtml(c.n)}</h1>
      <button class="btn btn--accent" data-a="newj">+ Nueva vacante</button
      ><button class="btn" data-a="comp" data-id=${c.id}>Ver vista pública</button>
    </div>
    <div class="grid grid--4" style="margin:14px 0">
      ${[
        ['Vacantes activas', js.filter((j) => j.status == 'activa').length],
        ['Postulaciones', ap.length],
        ['Visitas (ficticias)', 1240],
      ]
        .map(
          ([l, v]) =>
            /* HTML */ `<div class="card">
              <span class="u-muted">${l}</span><b style="font-size:28px">${v}</b>
            </div>`,
        )
        .join('')}
    </div>
    <h2>Mis vacantes</h2>
    <div class="card u-scroll-x">
      <table class="table">
        ${
          js
            .map(
              (j) =>
                /* HTML */ `<tr>
                  <td class="table__cell">
                    <b>${escapeHtml(j.t)}</b><br /><span class="u-muted"
                      >${escapeHtml(j.city)}</span
                    >
                  </td>
                  <td class="table__cell">
                    <span class="tag ${j.status == 'activa' ? 'tag--success' : 'tag--accent'}"
                      >${j.status}</span
                    >
                  </td>
                  <td class="table__cell row">
                    ${j.status == 'activa' ? /* HTML */ `<button class="btn btn--small" data-a="jst" data-id=${j.id} data-s="pausada">Pausar</button>` : /* HTML */ `<button class="btn btn--small" data-a="jst" data-id=${j.id} data-s="activa">Reactivar</button>`}${j.status != 'cerrada' ? /* HTML */ `<button class="btn btn--small" data-a="jst" data-id=${j.id} data-s="cerrada">Cerrar</button>` : ''}<button
                      class="btn btn--small"
                      data-a="editj"
                      data-id=${j.id}
                    >
                      Editar</button
                    ><button class="btn btn--small" data-a="delj" data-id=${j.id}>Eliminar</button>
                  </td>
                </tr>`,
            )
            .join('') || '<tr><td class=table__cell>Aún no tienes vacantes.</td></tr>'
        }
      </table>
    </div>
    <h2 style="margin-top:24px">Postulaciones simuladas</h2>
    <div class="card u-scroll-x">
      <table class="table">
        ${
          ap
            .map(
              (a) =>
                /* HTML */ `<tr>
                  <td class="table__cell">
                    <b
                      >${escapeHtml(a.cand == 'me' ? state.me.name : state.users.find((u) => u.id == a.cand)?.name || a.cand)}</b
                    >
                  </td>
                  <td class="table__cell">${escapeHtml(db.jobs.get(a.job)?.t)}</td>
                  <td class="table__cell">
                    <select class="table__select" data-ap=${a.id} aria-label="Estado">
                      ${['Recibida', 'En revisión', 'Entrevista', 'No seleccionada'].map((s) => /* HTML */ `<option ${s == a.st ? 'selected' : ''}>${s}</option>`).join('')}
                    </select>
                  </td>
                </tr>`,
            )
            .join('') || '<tr><td class=table__cell>Sin postulaciones aún.</td></tr>'
        }
      </table>
    </div>`;
};

export { panelPage };
