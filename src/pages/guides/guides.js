import {empty} from '../../components/empty-state/empty-state.js';
import {sel} from '../../components/filters/filter-select.js';
import {AF,S} from '../../state/store.js';
import {$,esc} from '../../utils/dom.js';
import {uniq} from '../../utils/format.js';

const guidesPage=()=>`<h1 class="page-title page-title--spaced">Orientación profesional</h1><div class=filters><input class=filters__control data-f=AF.q placeholder="Buscar guía" aria-label="Buscar">${sel('cat',uniq(S.articles,'cat'),'Categoría','AF')}</div><div class="grid grid--cards" id=res></div>`;
const artsRes=()=>{const q=(AF.q||'').toLowerCase(),l=S.articles.filter(a=>(!q||a.t.toLowerCase().includes(q))&&(!AF.cat||a.cat==AF.cat));$('#res').innerHTML=l.length?l.map(a=>`<div class=card><div style="font-size:30px">${a.ic}</div><span class=tag style="align-self:start">${esc(a.cat)}</span><h3 style="margin:0">${esc(a.t)}</h3><div class=u-muted>${a.min} min de lectura · ${a.upd} (simulado)</div><button class="btn btn--primary btn--small" data-a=art data-id=${a.id}>Leer</button></div>`).join(''):`<div style="grid-column:1/-1">${empty('No hay guías con esa búsqueda.')}</div>`};

export {guidesPage,artsRes};
