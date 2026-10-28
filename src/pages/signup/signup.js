/* Pantalla de registro para estudiantes y empresas. */
import { signUp } from '../../services/auth.js';
import { ui } from '../../state/store.js';
import { CAREERS, CITIES } from '../../data/constants.js';
import '../auth/auth.css';
const f = (l, n, t = 'text', x = '') =>
  /* HTML */ `<label class="form__label"
    >${l}<input class="form__control" name="${n}" type="${t}" ${x}
  /></label>`;
const s = (l, n, a) =>
  /* HTML */ `<label class="form__label"
    >${l}<select class="form__control" name="${n}">
      ${a.map((o) => /* HTML */ `<option>${o}</option>`).join('')}
    </select></label
  >`;
export const signupPage = () => {
  const e = ui.signup == 'emp';
  return /* HTML */ `<section class="auth">
    <div class="auth__panel">
      <h1 class="auth__title">Crear cuenta</h1>
      <p class="u-muted">Cuenta local de demostración: se guarda solo en este navegador.</p>
      <div class="tabs">
        <button class="btn ${e ? '' : 'btn--active'}" data-a="signupType" data-id="cand">
          Soy estudiante</button
        ><button class="btn ${e ? 'btn--active' : ''}" data-a="signupType" data-id="emp">
          Soy empresa
        </button>
      </div>
      <form class="form" data-form="signup" novalidate>
        <input type="hidden" name="role" value="${e ? 'emp' : 'cand'}" />
        ${f(e ? 'Nombre de la persona responsable' : 'Nombre completo', 'name', 'text', 'autocomplete="name"')}${f('Correo electrónico', 'email', 'email', 'autocomplete="username"')}
        ${f('Contraseña (mínimo 6 caracteres)', 'pass', 'password', 'autocomplete="new-password"')}${f('Confirmar contraseña', 'pass2', 'password', 'autocomplete="new-password"')}
        ${e ? f('Nombre de la empresa', 'company') + f('Sector', 'sector') : s('Carrera', 'career', CAREERS)}${s('Ciudad', 'city', CITIES)}
        <p class="form__error" id="er"></p>
        <button class="btn btn--primary">Crear cuenta</button>
      </form>
      <p>¿Ya tienes cuenta? <a href="#/login">Iniciar sesión</a></p>
    </div>
  </section>`;
};
export const submitSignup = (d) => signUp(d);
