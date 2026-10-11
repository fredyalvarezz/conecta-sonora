import { $, esc } from '../../utils/dom.js';
import { S } from '../../state/store.js';
import './header.css';
export function renderHeader(route) {
  const x = S.role, u = S.users.find(v => v.id == S.session);
  const last = x == 'emp' ? ['/panel', 'Panel empresa'] : x == 'admin' ? ['/admin', 'Administración'] : ['/perfil', 'Mi perfil'];
  const links = [['/', 'Inicio'], ['/cursos', 'Cursos'], ['/empleos', 'Empleos'], ['/empresas', 'Empresas'], ['/orientacion', 'Orientación'], last];
  const sel = `<select class="header__role" id="rs" aria-label="Cambiar perfil de demostración">${[['cand', 'Estudiante'], ['emp', 'Empresa'], ['admin', 'Administrador']].map(([v, l]) => `<option value="${v}" ${x == v ? 'selected' : ''}>${l}</option>`).join('')}</select>`;
  const right = x ? `${u ? `<span class="header__user">${esc(u.name)}</span>` : sel}<button class="btn" data-a="role" data-id="">Salir</button>` : `<a class="btn" href="#/login">Iniciar sesión</a><a class="btn btn--primary" href="#/registro">Crear cuenta</a>`;
  $('#hd').innerHTML = `<a class="logo" href="#/"><svg width="34" height="34" viewBox="0 0 34 34"><path d="M6 4h16l6 8-4 6 3 12H12l-3-9z" fill="#0B4DA2"/><circle cx="22" cy="14" r="4" fill="#E8832A"/></svg><span class="logo__text">CONECTA<b class="logo__accent">SONORA</b></span></a><nav class="nav">${links.map(([h, l]) => `<a class="nav__link ${route == h ? 'nav__link--active' : ''}" href="#${h}">${l}</a>`).join('')}</nav>${right}`
}
