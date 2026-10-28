/* Acciones generales: cerrar ventana, limpiar filtros y cambiar de pestaña. */
import { renderApp } from '../render.js';
import {
  articleFilters,
  companyFilters,
  courseFilters,
  jobFilters,
  ui,
} from '../../state/store.js';
import { closeModal } from '../../utils/dom.js';

export const generalActions = {
  x: closeModal,
  tab: (id) => {
    ui.pt = id;
    renderApp();
  },
  clear: () => {
    [jobFilters, courseFilters, companyFilters, articleFilters].forEach((o) => {
      for (const k in o) delete o[k];
    });
    renderApp();
  },
};
