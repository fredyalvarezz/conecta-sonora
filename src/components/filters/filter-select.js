import './filters.css';
import {AF,CF,EF,F} from '../../state/store.js';
import {opts} from '../../utils/format.js';

const sel=(k,o,l,st)=>`<select class=filters__control data-f="${st}.${k}" aria-label="${l}">${opts(o,l)}</select>`;
const fval=()=>{document.querySelectorAll('[data-f]').forEach(e=>{const[s,k]=e.dataset.f.split('.');e.value=({F,CF,EF,AF})[s][k]||''})};

export {sel,fval};
