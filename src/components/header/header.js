/* Componente Header: logo, menú y botones de sesión. Cambia según el rol activo (estudiante, empresa, administrador). */
import { qs, escapeHtml } from '../../utils/dom.js';
import { state } from '../../state/store.js';
import './header.css';
// BASE_URL respeta la carpeta donde se publica la app (por ejemplo /conecta-sonora/ en GitHub Pages).
const LOGO = `${import.meta.env.BASE_URL}images/logo-mark.png`;
const LOGO_LIGHT = `${import.meta.env.BASE_URL}images/logo-mark-light.png`;

export function renderHeader(route) {
  const x = state.role,
    u = state.users.find((v) => v.id == state.session);
  const last =
    x == 'emp'
      ? ['/panel', 'Panel empresa']
      : x == 'admin'
        ? ['/admin', 'Administración']
        : ['/perfil', 'Mi perfil'];
  const links = [
    ['/', 'Inicio'],
    ['/cursos', 'Cursos'],
    ['/empleos', 'Empleos'],
    ['/empresas', 'Empresas'],
    ['/orientacion', 'Orientación'],
    last,
  ];
  const sel = /* HTML */ `<select
    class="header__role"
    id="rs"
    aria-label="Cambiar perfil de demostración"
  >
    ${[
      ['cand', 'Estudiante'],
      ['emp', 'Empresa'],
      ['admin', 'Administrador'],
    ]
      .map(([v, l]) => /* HTML */ `<option value="${v}" ${x == v ? 'selected' : ''}>${l}</option>`)
      .join('')}
  </select>`;
  const right = x
    ? `${u ? /* HTML */ `<span class="header__user">${escapeHtml(u.name)}</span>` : sel}<button class="btn" data-a="role" data-id="">Salir</button>`
    : /* HTML */ `<a class="btn" href="#/login">Iniciar sesión</a
        ><a class="btn btn--primary" href="#/registro">Crear cuenta</a>`;
  qs('#hd').innerHTML = /* HTML */ `<a class="logo" href="#/"
      ><picture
        ><source media="(prefers-color-scheme: dark)" srcset="${LOGO_LIGHT}" />
        <img class="logo__mark" src="${LOGO}" alt="" /></picture
      ><span class="logo__text"
        ><span class="logo__name">Conecta</span><span class="logo__accent">Sonora</span></span
      ></a
    >
    <nav class="nav">
      ${links.map(([h, l]) => /* HTML */ `<a class="nav__link ${route == h ? 'nav__link--active' : ''}" href="#${h}">${l}</a>`).join('')}
    </nav>
    ${right}`;
}
