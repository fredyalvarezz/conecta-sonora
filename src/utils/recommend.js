import {S} from '../state/store.js';

const toks=()=>[...S.me.skills,...S.me.interests,S.me.career].map(s=>s.toLowerCase());
function recJobs(){const T=toks(),m=S.me;return S.jobs.filter(j=>j.status=='activa').map(j=>{let s=0,r=[];if(j.careers.includes(m.career)){s+=3;r.push('es para tu carrera')}const k=j.skills.filter(x=>T.includes(x.toLowerCase()));if(k.length){s+=2*k.length;r.push('pide '+k.join(', '))}if(T.includes(j.area.toLowerCase())){s+=2;r.push('te interesa '+j.area)}if(j.city==m.city){s++;r.push('está en '+m.city)}return{j,s,r}}).filter(x=>x.s).sort((a,b)=>b.s-a.s).slice(0,3)}
function recCourses(){const T=toks();return S.courses.map(c=>{const k=[...c.skills,c.cat].filter(x=>T.includes(x.toLowerCase()));return{c,s:k.length,r:k}}).filter(x=>x.s).sort((a,b)=>b.s-a.s).slice(0,3)}

export {toks,recJobs,recCourses};
