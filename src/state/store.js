import {seed} from '../data/seed.js';
/* Estado único de la app. Se guarda en localStorage (clave KEY) y se recupera al cargar. */
export const KEY='conecta-sonora-v2';
const clone=o=>JSON.parse(JSON.stringify(o));
export const DEMO_ME={name:'Ana Moreno (demo)',city:'Hermosillo',career:'Ingeniería Industrial',interests:['Logística','Manufactura'],skills:['Excel','Calidad'],mode:'Híbrida',bio:''};
const apps0=()=>[{id:'p1',job:'j2',cand:'Luis Pérez (demo)',st:'En revisión'},{id:'p2',job:'j1',cand:'María Soto (demo)',st:'Recibida'}];
export const S={...seed(),role:null,me:clone(DEMO_ME),sj:[],cs:{},apps:apps0(),myco:'c1',users:[],session:null,seq:100};
export const UI={pt:'info',signup:'cand'};
export const F={},CF={},EF={},AF={};
try{const l=JSON.parse(localStorage.getItem(KEY));if(l&&l.companies)Object.assign(S,l)}catch(e){}
export const save=()=>{try{const u=S.users.find(x=>x.id==S.session);if(u&&u.role=='cand')u.me=S.me;localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
export function resetDemo(){Object.assign(S,seed(),{sj:[],cs:{},apps:apps0()});S.users.filter(u=>u.role=='emp').forEach(u=>S.companies.unshift(clone(u.company)))}
