import './card.css';
import {co} from '../../services/repo.js';
import {S} from '../../state/store.js';
import {esc} from '../../utils/dom.js';
import {ago,ini} from '../../utils/format.js';

const jobCard=(j,why)=>`<div class=card><div class=row><div class=avatar style="background:${co(j.co).col}">${ini(co(j.co).n)}</div><div><h3 style="margin:0;font-size:17px">${esc(j.t)}</h3><span class=u-muted>${esc(co(j.co).n)} · ${esc(j.city)}</span></div></div><div><span class=tag>${j.mode}</span><span class="tag tag--success">${j.type}</span><span class="tag tag--accent">${j.exp}</span></div><div class=u-muted>${esc(j.sal)} · ${ago(j.days)}</div><div class=u-muted>${j.skills.map(esc).join(' · ')}</div>${why?`<p class=card__why>${why}</p>`:''}<div class=row><button class="btn btn--primary btn--small" data-a=job data-id=${j.id}>Ver más</button><button class="btn btn--small" data-a=sj data-id=${j.id}>${S.sj.includes(j.id)?'★ Guardada':'☆ Guardar'}</button></div></div>`;

export {jobCard};
