/* Mensajes de apoyo: emptyState (sin resultados) y loginRequired (hace falta iniciar sesión). */
import './empty-state.css';

const emptyState = (m, a = 'Limpiar filtros') =>
  /* HTML */ `<div class="empty-state">
    <p>${m}</p>
    <button class="btn btn--primary" data-a="clear">${a}</button>
  </div>`;
export const loginRequired = (t, r) =>
  /* HTML */ `<div class="empty-state empty-state--gate">
    <h2>${t}</h2>
    <p>Inicia sesión como ${r} para ver esta sección.</p>
    <div class="row" style="justify-content:center">
      <a class="btn btn--primary" href="#/login">Iniciar sesión</a
      ><a class="btn" href="#/registro">Crear cuenta</a>
    </div>
  </div>`;

export { emptyState };
