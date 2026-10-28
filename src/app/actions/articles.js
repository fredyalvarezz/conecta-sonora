/* Acciones de artículos de orientación: leer y crear/editar (administrador). */
import { openFormModal } from '../../components/form-modal/form-modal.js';
import { db } from '../../services/repo.js';
import { state } from '../../state/store.js';
import { escapeHtml, openModal } from '../../utils/dom.js';

export const articlesActions = {
  art: (id) => {
    const a = db.articles.get(id),
      rel = state.articles
        .filter((x) => x.cat == a.cat && x.id != id)
        .concat(state.articles.filter((x) => x.cat != a.cat && x.id != id))
        .slice(0, 2);
    openModal(
      /* HTML */ `<h2>${a.ic} ${escapeHtml(a.t)}</h2>
        <p class="u-muted">${a.min} min · ${a.upd} (simulado)</p>
        ${escapeHtml(a.body)
          .split('\n\n')
          .map((p) => /* HTML */ `<p>${p}</p>`)
          .join('')}
        <h3>Artículos relacionados</h3>
        ${rel.map((r) => /* HTML */ `<p><a href="#" data-a="art" data-id=${r.id}>${escapeHtml(r.t)}</a></p>`).join('')}`,
    );
  },
  newa: () => articlesActions.edita(),
  edita: (id) => {
    const a = id ? db.articles.get(id) : { cat: state.cats.articles[0], ic: '📄', min: 5 };
    openFormModal(
      id ? 'Editar artículo' : 'Nuevo artículo',
      [
        { k: 't', l: 'Título', r: 1 },
        { k: 'cat', l: 'Categoría', t: 'sel', o: state.cats.articles },
        { k: 'ic', l: 'Icono (un emoji)', r: 1 },
        { k: 'min', l: 'Minutos de lectura' },
        { k: 'body', l: 'Contenido (separa párrafos con una línea en blanco)', t: 'area', r: 1 },
      ],
      a,
      (d) => {
        if (!(+d.min > 0)) return 'Los minutos de lectura deben ser un número mayor que 0.';
        if (d.body.trim().length < 40) return 'El contenido debe tener al menos 40 caracteres.';
        const o = { ...d, min: +d.min, upd: 'Hoy (simulado)' };
        id ? db.articles.update(id, o) : db.articles.create(o);
      },
    );
  },
};
