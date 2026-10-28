/* Junta todas las acciones en un solo objeto. Cada botón del HTML usa data-a="nombre" y se resuelve aquí. */
import { generalActions } from './general.js';
import { authActions } from './auth.js';
import { jobsActions } from './jobs.js';
import { coursesActions } from './courses.js';
import { companiesActions } from './companies.js';
import { articlesActions } from './articles.js';
import { profileActions } from './profile.js';
import { adminActions } from './admin.js';

export const actions = {
  ...generalActions,
  ...authActions,
  ...jobsActions,
  ...coursesActions,
  ...companiesActions,
  ...articlesActions,
  ...profileActions,
  ...adminActions,
};
