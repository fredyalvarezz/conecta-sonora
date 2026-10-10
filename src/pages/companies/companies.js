import {compCard} from '../../components/cards/company-card.js';
import {empty} from '../../components/empty-state/empty-state.js';
import {sel} from '../../components/filters/filter-select.js';
import {EF,S} from '../../state/store.js';
import {$} from '../../utils/dom.js';
import {uniq} from '../../utils/format.js';

const companiesPage=()=>`<div class=row style="margin-top:24px"><h1 class="page-title u-grow">Conoce las empresas</h1>${S.role=='admin'?'<button class="btn btn--accent" data-a=newco>+ Nueva empresa</button>':''}</div><p class=u-muted>Perfiles inventados; no representan empresas reales.</p><div class=filters><input class=filters__control data-f=EF.q placeholder="Nombre de la empresa" aria-label="Nombre">${sel('city',uniq(S.companies,'city'),'Ciudad','EF')}${sel('sec',uniq(S.companies,'sec'),'Sector','EF')}</div><p id=cnt class=u-muted></p><div class="grid grid--cards" id=res></div>`;
const compsRes=()=>{const q=(EF.q||'').toLowerCase(),l=S.companies.filter(c=>(!q||c.n.toLowerCase().includes(q))&&(!EF.city||c.city==EF.city)&&(!EF.sec||c.sec==EF.sec));$('#cnt').textContent=`${l.length} empresa(s)`;$('#res').innerHTML=l.length?l.map(compCard).join(''):`<div style="grid-column:1/-1">${empty('Ninguna empresa coincide con tu búsqueda.')}</div>`};

export {companiesPage,compsRes};
