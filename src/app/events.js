/* Escucha clics (data-a), filtros (data-f), selects y formularios (data-form) de toda la página y llama a la acción correspondiente. */
import { qs, showToast } from '../utils/dom.js';
import {
  state,
  jobFilters,
  courseFilters,
  companyFilters,
  articleFilters,
  saveState,
} from '../state/store.js';
import { actions } from './actions/index.js';
import { renderApp, refreshResults } from './render.js';
import { submitLogin } from '../pages/login/login.js';
import { submitSignup } from '../pages/signup/signup.js';
import { homeFor } from '../services/auth.js';
const FILTERS = {
  jobs: jobFilters,
  courses: courseFilters,
  companies: companyFilters,
  articles: articleFilters,
};
const FORMS = {
  login: submitLogin,
  signup: submitSignup,
  search: async (d) => {
    Object.keys(jobFilters).forEach((k) => delete jobFilters[k]);
    jobFilters.q = d.q;
    location.hash = '#/empleos';
    renderApp();
    return {};
  },
};
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-a]');
  if (!b) return;
  e.preventDefault();
  actions[b.dataset.a]?.(b.dataset.id, b);
});
document.addEventListener('input', (e) => {
  const f = e.target.dataset.f;
  if (f) {
    const [s, k] = f.split('.');
    FILTERS[s][k] = e.target.value;
    refreshResults();
  }
});
document.addEventListener('change', (e) => {
  const t = e.target;
  if (t.id == 'rs') actions.role(t.value);
  if (t.dataset.ap) {
    state.apps.find((a) => a.id == t.dataset.ap).st = t.value;
    saveState();
    showToast('Estado de la postulación actualizado');
  }
});
document.addEventListener('submit', async (e) => {
  const n = e.target.dataset.form;
  if (!n) return;
  e.preventDefault();
  const r = await FORMS[n](Object.fromEntries(new FormData(e.target)));
  if (r.error) {
    const er = qs('#er');
    if (er) er.textContent = r.error;
    return;
  }
  if (r.user) {
    location.hash = homeFor(r.user);
    renderApp();
    showToast(r.created ? 'Cuenta creada. ¡Bienvenida/o, ' + r.user.name + '!' : 'Sesión iniciada');
  }
});
