import './styles/base.css';
import './components/button/button.css';import './components/tag/tag.css';import './components/avatar/avatar.css';import './components/progress/progress.css';
import './components/toast/toast.css';import './components/demo-banner/demo-banner.css';import './components/footer/footer.css';
import {render} from './app/render.js';
import './app/events.js';
window.addEventListener('hashchange',render);
render();
