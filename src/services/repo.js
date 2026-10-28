/* Capa de datos: listar, consultar, crear, actualizar y eliminar. Para usar un backend real, reemplaza este archivo por llamadas fetch. */
import { state } from '../state/store.js';
/* Contrato de datos: listar, consultar, crear, actualizar, eliminar.
   Un backend real implementaría esta misma interfaz con fetch. */
export const createRepo = (k) => ({
  list: () => state[k],
  get: (id) => state[k].find((x) => x.id == id),
  create: (o) => {
    state[k].unshift({ ...o, id: k[0] + ++state.seq });
    return state[k][0];
  },
  update: (id, p) => Object.assign(state[k].find((x) => x.id == id) || {}, p),
  remove: (id) => {
    state[k] = state[k].filter((x) => x.id != id);
  },
});
export const db = {
  companies: createRepo('companies'),
  jobs: createRepo('jobs'),
  courses: createRepo('courses'),
  articles: createRepo('articles'),
};
export const companyOf = (id) => db.companies.get(id) || { n: 'Empresa' };
