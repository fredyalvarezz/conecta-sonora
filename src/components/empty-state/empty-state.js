import './empty-state.css';

const empty = (m, a = 'Limpiar filtros') => `<div class=empty-state><p>${m}</p><button class="btn btn--primary" data-a=clear>${a}</button></div>`;
export const gate = (t, r) => `<div class="empty-state empty-state--gate"><h2>${t}</h2><p>Inicia sesión como ${r} para ver esta sección.</p><div class=row style="justify-content:center"><a class="btn btn--primary" href="#/login">Iniciar sesión</a><a class=btn href="#/registro">Crear cuenta</a></div></div>`;

export { empty };
