import './card.css';
import {S} from '../../state/store.js';
import {esc} from '../../utils/dom.js';
import {price} from '../../utils/format.js';

const stLbl={guardado:'Guardado',progreso:'En progreso',completado:'Completado ✓'};
const courseCard=(c,why)=>`<div class=card><span><span class=tag>${esc(c.cat)}</span><span class="tag tag--accent">${c.lvl}</span></span><h3 style="margin:0;font-size:17px">${esc(c.t)}</h3><div class=u-muted>${esc(c.d)}</div><div class=u-muted>${c.kind} · ${c.dur} · ${esc(c.prov)}</div><b>${price(c.price)}</b>${why?`<p class=card__why>${why}</p>`:''}<div class=row><button class="btn btn--primary btn--small" data-a=course data-id=${c.id}>Ver detalles</button><button class="btn btn--small" data-a=cs data-id=${c.id}>${S.cs[c.id]?stLbl[S.cs[c.id]]+' ▸':'☆ Guardar'}</button></div></div>`;

export {stLbl,courseCard};
