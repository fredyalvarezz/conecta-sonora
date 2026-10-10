import {S} from '../state/store.js';
/* Contrato de datos: listar, consultar, crear, actualizar, eliminar.
   Un backend real implementaría esta misma interfaz con fetch. */
export const repo=k=>({
  list:()=>S[k],
  get:id=>S[k].find(x=>x.id==id),
  create:o=>{S[k].unshift({...o,id:k[0]+(++S.seq)});return S[k][0]},
  update:(id,p)=>Object.assign(S[k].find(x=>x.id==id)||{},p),
  remove:id=>{S[k]=S[k].filter(x=>x.id!=id)}});
export const R={companies:repo('companies'),jobs:repo('jobs'),courses:repo('courses'),articles:repo('articles')};
export const co=id=>R.companies.get(id)||{n:'Empresa'};
