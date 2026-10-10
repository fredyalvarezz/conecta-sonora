import {homePage} from './home/home.js';import {jobsPage} from './jobs/jobs.js';import {coursesPage} from './courses/courses.js';import {companiesPage} from './companies/companies.js';
import {guidesPage} from './guides/guides.js';import {profilePage} from './profile/profile.js';import {panelPage} from './company-panel/company-panel.js';import {adminPage} from './admin/admin.js';
import {loginPage} from './login/login.js';import {signupPage} from './signup/signup.js';
/* Registro de rutas: hash → página */
export const P={'/':homePage,'/empleos':jobsPage,'/cursos':coursesPage,'/empresas':companiesPage,'/orientacion':guidesPage,'/perfil':profilePage,'/panel':panelPage,'/admin':adminPage,'/login':loginPage,'/registro':signupPage};
