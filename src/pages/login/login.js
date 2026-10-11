import { signIn } from '../../services/auth.js';
import '../auth/auth.css';
export const loginPage = () => `<section class="auth"><div class="auth__panel"><h1 class="auth__title">Iniciar sesión</h1>
<p class="u-muted">Las cuentas se guardan solo en este navegador. No uses una contraseña que utilices en otros sitios.</p>
<form class="form" data-form="login" novalidate>
<label class="form__label">Correo electrónico<input class="form__control" name="email" type="email" autocomplete="username"></label>
<label class="form__label">Contraseña<input class="form__control" name="pass" type="password" autocomplete="current-password"></label>
<p class="form__error" id="er"></p><button class="btn btn--primary">Entrar</button></form>
<p>¿Aún no tienes cuenta? <a href="#/registro">Crear cuenta</a></p>
<div class="auth__demo"><p class="u-muted">O explora sin cuenta:</p><div class="row">
<button class="btn btn--small" data-a="role" data-id="cand">Explorar como estudiante</button>
<button class="btn btn--small" data-a="role" data-id="emp">Explorar como empresa</button>
<button class="btn btn--small" data-a="role" data-id="admin">Explorar como administrador</button></div></div></div></section>`;
export const submitLogin = d => signIn(d.email, d.pass);
