import {$} from '../utils/dom.js';
import {save} from '../state/store.js';
import {renderHeader} from '../components/header/header.js';
import {fval} from '../components/filters/filter-select.js';
import {P} from '../pages/index.js';
import {jobsRes} from '../pages/jobs/jobs.js';import {coursesRes} from '../pages/courses/courses.js';import {compsRes} from '../pages/companies/companies.js';import {artsRes} from '../pages/guides/guides.js';
export const route=()=>location.hash.slice(1)||'/';
const RES={'/empleos':jobsRes,'/cursos':coursesRes,'/empresas':compsRes,'/orientacion':artsRes};
export const refresh=()=>RES[route()]?.();
export function render(){const r=route();renderHeader(r);$('#app').innerHTML=(P[r]||P['/'])();fval();refresh();save();window.scrollTo(0,0)}
