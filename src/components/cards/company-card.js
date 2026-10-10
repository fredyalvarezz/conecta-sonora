import './card.css';
import {S} from '../../state/store.js';
import {esc} from '../../utils/dom.js';
import {ini} from '../../utils/format.js';

const compCard=c=>{const n=S.jobs.filter(j=>j.co==c.id&&j.status=='activa').length;return`<div class=card><div class=row><div class=avatar style="background:${c.col}">${ini(c.n)}</div><div><h3 style="margin:0;font-size:17px">${esc(c.n)}</h3><span class=u-muted>${esc(c.sec)} · ${esc(c.city)}</span></div><span class="tag tag--accent u-grow" style="flex:none">Datos de ejemplo</span></div><div class=u-muted>${esc(c.d)}</div><div>${c.areas.map(a=>`<span class=tag>${esc(a)}</span>`).join('')}</div><div class=u-muted>${n} vacante(s) activa(s) de demostración</div><button class="btn btn--primary btn--small" data-a=comp data-id=${c.id}>Ver perfil</button></div>`};

export {compCard};
