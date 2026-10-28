/* Acciones del panel de administración: eliminar elementos, restablecer datos y gestionar categorías. */
import { renderApp } from '../render.js';
import { openFormModal } from '../../components/form-modal/form-modal.js';
import { db } from '../../services/repo.js';
import { resetDemo, state } from '../../state/store.js';
import { showToast } from '../../utils/dom.js';

export const adminActions = {
  catadd: (k) =>
    openFormModal('Nueva categoría', [{ k: 'n', l: 'Nombre', r: 1 }], {}, (d) => {
      const n = d.n.trim();
      if (state.cats[k].some((x) => x.toLowerCase() == n.toLowerCase()))
        return 'Esa categoría ya existe.';
      state.cats[k].push(n);
    }),
  catdel: (k, b) => {
    const n = b.dataset.n;
    if ((k == 'courses' ? state.courses : state.articles).some((x) => x.cat == n))
      return showToast('No se puede eliminar: hay elementos que usan esta categoría.');
    if (confirm('¿Eliminar la categoría?')) {
      state.cats[k] = state.cats[k].filter((x) => x != n);
      renderApp();
    }
  },
  del: (id, b) => {
    if (confirm('¿Eliminar este elemento de la demostración?')) {
      const k = { E: 'companies', V: 'jobs', C: 'courses', A: 'articles' }[b.dataset.k];
      if (k == 'companies') state.jobs = state.jobs.filter((j) => j.co != id);
      db[k].remove(id);
      renderApp();
    }
  },
  reset: () => {
    if (confirm('¿Restablecer todos los datos de ejemplo?')) {
      resetDemo();
      renderApp();
      showToast('Demostración restablecida');
    }
  },
};
