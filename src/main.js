/* Punto de entrada de la app: carga los estilos, dibuja la primera pantalla y vuelve a dibujar cuando cambia la ruta (#/empleos, #/cursos...). */
import './styles/base.css';
import './components/button/button.css';
import './components/tag/tag.css';
import './components/avatar/avatar.css';
import './components/progress/progress.css';
import './components/toast/toast.css';
import './components/footer/footer.css';
import { renderApp } from './app/render.js';
import './app/events.js';
window.addEventListener('hashchange', renderApp);
renderApp();
