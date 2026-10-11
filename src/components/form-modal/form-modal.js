import './form.css';
import './modal.css';
import { render } from '../../app/render.js';
import { save } from '../../state/store.js';
import { $, closeM, esc, openM, toast } from '../../utils/dom.js';

function formM(title, fs, v, save) { openM(`<h2>${title}</h2><form class=form id=fm>${fs.map(f => `<label class=form__label>${f.l}${f.t == 'sel' ? `<select class=form__control name=${f.k}>${f.o.map(o => `<option ${o == v[f.k] ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>` : f.t == 'area' ? `<textarea class=form__control name=${f.k} rows=3>${esc(v[f.k])}</textarea>` : `<input class=form__control name=${f.k} value="${esc(v[f.k])}">`}</label>`).join('')}<p class=form__error id=er></p><div class=row><button class="btn btn--primary">Guardar</button><button type=button class=btn data-a=x>Cancelar</button></div></form>`); $('#fm').onsubmit = e => { e.preventDefault(); const d = Object.fromEntries(new FormData(e.target)); for (const f of fs) if (f.r && !String(d[f.k] || '').trim()) return $('#er').textContent = `Completa el campo «${f.l}».`; const er = save(d); if (er) return $('#er').textContent = er; closeM(); toast('Cambios guardados en la demostración'); render() } }

export { formM };
