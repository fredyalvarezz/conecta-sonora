import {esc} from './dom.js';

const uniq=(a,k)=>[...new Set(a.map(x=>x[k]))],opts=(a,l)=>`<option value="">${l}</option>`+a.map(o=>`<option>${esc(o)}</option>`).join('');
const price=p=>p?`$${p} MXN (demo)`:'Gratis',ago=d=>d<2?'Hace 1 día':`Hace ${d} días`,ini=n=>n.split(' ').slice(0,2).map(w=>w[0]).join('');
const arr=s=>String(s).split(',').map(x=>x.trim()).filter(Boolean);

export {uniq,opts,price,ago,ini,arr};
