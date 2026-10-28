/* Acciones de sesión: ir al login, entrar como perfil de demostración, cerrar sesión y cambiar tipo de cuenta en el registro. */
import { renderApp } from '../render.js';
import { signOut, startDemo } from '../../services/auth.js';
import { ui } from '../../state/store.js';
import { closeModal, showToast } from '../../utils/dom.js';

export const authActions = {
  login: () => {
    closeModal();
    location.hash = '#/login';
  },
  role: (id) => {
    if (id) startDemo(id);
    else signOut();
    closeModal();
    location.hash = id == 'emp' ? '#/panel' : id == 'admin' ? '#/admin' : id ? '#/perfil' : '#/';
    renderApp();
    showToast(id ? 'Perfil de demostración activo' : 'Sesión cerrada');
  },
  signupType: (id) => {
    ui.signup = id;
    renderApp();
  },
};
