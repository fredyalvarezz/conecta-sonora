import {jobCard} from '../../components/cards/job-card.js';
import {empty} from '../../components/empty-state/empty-state.js';
import {sel} from '../../components/filters/filter-select.js';
import {co} from '../../services/repo.js';
import {F,S} from '../../state/store.js';
import {$} from '../../utils/dom.js';
import {uniq} from '../../utils/format.js';

const jobsPage=()=>`<h1 class="page-title page-title--spaced">Oportunidades laborales en Sonora</h1><p class=u-muted>Vacantes ficticias para demostración.</p><div class=filters><input class=filters__control data-f=F.q placeholder="Palabra clave" aria-label="Palabra clave">${sel('city',uniq(S.jobs,'city'),'Ciudad','F')}${sel('area',uniq(S.jobs,'area'),'Área','F')}${sel('mode',['Presencial','Híbrida','Remota'],'Modalidad','F')}${sel('type',uniq(S.jobs,'type'),'Tipo','F')}${sel('exp',uniq(S.jobs,'exp'),'Experiencia','F')}<select class=filters__control data-f=F.days aria-label="Fecha"><option value="">Cualquier fecha</option><option value=3>Últimos 3 días</option><option value=7>Última semana</option><option value=30>Último mes</option></select><select class=filters__control data-f=F.sort aria-label="Orden"><option value="">Más recientes</option><option value=old>Más antiguas</option></select></div><p id=cnt class=u-muted></p><div class="grid grid--cards" id=res></div>`;
const jobsRes=()=>{const q=(F.q||'').toLowerCase(),l=S.jobs.filter(j=>j.status=='activa'&&(!q||(j.t+j.skills+co(j.co).n).toLowerCase().includes(q))&&['city','area','mode','type','exp'].every(k=>!F[k]||j[k]==F[k])&&(!F.days||j.days<=+F.days)).sort((a,b)=>F.sort?b.days-a.days:a.days-b.days);$('#cnt').textContent=`${l.length} resultado(s)`;$('#res').innerHTML=l.length?l.map(jobCard).join(''):`<div style="grid-column:1/-1">${empty('No encontramos vacantes con esos filtros. Prueba quitar alguno.')}</div>`};

export {jobsPage,jobsRes};
