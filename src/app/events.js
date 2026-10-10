import {$,toast} from '../utils/dom.js';
import {S,F,CF,EF,AF,save} from '../state/store.js';
import {A} from './actions.js';
import {render,refresh} from './render.js';
import {submitLogin} from '../pages/login/login.js';
import {submitSignup} from '../pages/signup/signup.js';
import {homeFor} from '../services/auth.js';
const FILTERS={F,CF,EF,AF};
const FORMS={login:submitLogin,signup:submitSignup,search:async d=>{Object.keys(F).forEach(k=>delete F[k]);F.q=d.q;location.hash='#/empleos';render();return{}}};
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b)return;e.preventDefault();A[b.dataset.a]?.(b.dataset.id,b)});
document.addEventListener('input',e=>{const f=e.target.dataset.f;if(f){const[s,k]=f.split('.');FILTERS[s][k]=e.target.value;refresh()}});
document.addEventListener('change',e=>{const t=e.target;if(t.id=='rs')A.role(t.value);if(t.dataset.ap){S.apps.find(a=>a.id==t.dataset.ap).st=t.value;save();toast('Estado de la postulación actualizado')}});
document.addEventListener('submit',async e=>{const n=e.target.dataset.form;if(!n)return;e.preventDefault();
  const r=await FORMS[n](Object.fromEntries(new FormData(e.target)));
  if(r.error){const er=$('#er');if(er)er.textContent=r.error;return}
  if(r.user){location.hash=homeFor(r.user);render();toast(r.created?'Cuenta creada. ¡Bienvenida/o, '+r.user.name+'!':'Sesión iniciada')}});
