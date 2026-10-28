/* Página de inicio: portada, buscador, secciones destacadas, empresas, orientación y pasos. */
import './home.css';
import { courseCard } from '../../components/cards/course-card.js';
import { jobCard } from '../../components/cards/job-card.js';
import { profileCompletion } from '../../utils/recommend.js';
import { compCard } from '../../components/cards/company-card.js';
import { artCard } from '../../components/cards/article-card.js';
import { state } from '../../state/store.js';

const homePage = () => {
  const pc = profileCompletion();
  return /* HTML */ `<section class="hero">
      <svg class="hero__bg" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="sk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#E4DCFF" />
            <stop offset="1" stop-color="#F6E7FF" />
          </linearGradient>
        </defs>
        <rect width="1200" height="360" fill="url(#sk)" />
        <circle cx="700" cy="85" r="34" fill="#A78BFA" />
        <path d="M420 300 640 120 730 200 820 110 1050 300Z" fill="#6C7DB3" />
        <path d="M0 300 200 215 420 300Z" fill="#9AA7D6" />
        <rect y="290" width="1200" height="70" fill="#DCD3F8" />
        <g fill="#2C3E66">
          <rect x="900" y="150" width="24" height="150" rx="12" />
          <rect x="868" y="200" width="14" height="50" rx="7" />
          <rect x="868" y="236" width="44" height="14" rx="7" />
          <rect x="940" y="190" width="14" height="44" rx="7" />
          <rect x="912" y="222" width="40" height="14" rx="7" />
        </g>
      </svg>
      <div class="hero__content">
        <h1 class="hero__title">Conecta tu talento con nuevas oportunidades</h1>
        <p class="hero__text">
          Vacantes, cursos y empresas de Sonora para estudiantes y recién egresados, en un solo
          lugar.
        </p>
        <form class="search" data-form="search">
          <input
            class="search__input"
            name="q"
            placeholder="Buscar vacantes, cursos o empresas…"
            aria-label="Buscar"
          /><button class="btn btn--primary">Buscar</button>
        </form>
        <div class="row">
          <a class="btn btn--accent" href="#/empleos">Explorar vacantes</a
          ><a class="btn" href="#/cursos">Descubrir cursos</a>
        </div>
      </div>
    </section>
    <div class="grid grid--4">
      <a class="section-card section-card--courses" href="#/cursos"
        ><h3 class="section-card__title">🎓 Cursos y capacitación</h3>
        <ul class="section-card__list">
          <li>Excel</li>
          <li>Inteligencia artificial</li>
          <li>Idiomas y más</li>
        </ul></a
      ><a class="section-card section-card--jobs" href="#/empleos"
        ><h3 class="section-card__title">💼 Oportunidades laborales</h3>
        <ul class="section-card__list">
          <li>Prácticas y becas</li>
          <li>Primer empleo</li>
        </ul></a
      ><a class="section-card section-card--companies" href="#/empresas"
        ><h3 class="section-card__title">🏢 Conoce las empresas</h3>
        <ul class="section-card__list">
          <li>Perfiles de Sonora</li>
          <li>Habilidades que buscan</li>
        </ul></a
      ><a class="section-card section-card--guides" href="#/orientacion"
        ><h3 class="section-card__title">🧭 Orientación profesional</h3>
        <ul class="section-card__list">
          <li>CV y entrevistas</li>
          <li>Consejos para empezar</li>
        </ul></a
      >
    </div>
    <div class="section split">
      <div>
        <h2 class="section__title">Oportunidades destacadas</h2>
        <div style="display:grid;gap:12px">
          ${state.jobs
            .filter((j) => j.status == 'activa')
            .slice(0, 3)
            .map((j) => jobCard(j))
            .join('')}
        </div>
        <p><a href="#/empleos">Ver todas las vacantes</a></p>
      </div>
      <div class="card" style="align-self:start">
        <h2 style="font-size:20px">Completa tu perfil</h2>
        <p class="u-muted">Para recibir recomendaciones personalizadas.</p>
        <div class="progress"><i class="progress__fill" style="width:${pc}%"></i></div>
        <b>${pc}%</b
        ><a class="btn btn--primary" href="#/perfil" style="text-align:center;text-decoration:none"
          >${state.role == 'cand' ? 'Editar mi perfil' : 'Entrar como estudiante'}</a
        >
      </div>
    </div>
    <div class="section">
      <h2 class="section__title">Cursos recomendados</h2>
      <div class="grid grid--cards">
        ${state.courses
          .slice(0, 3)
          .map((c) => courseCard(c))
          .join('')}
      </div>
    </div>
    <div class="section">
      <h2 class="section__title">Conoce las empresas de Sonora</h2>
      <div class="grid grid--cards">
        ${state.companies
          .slice(0, 3)
          .map((c) => compCard(c))
          .join('')}
      </div>
      <p><a href="#/empresas">Ver todas las empresas</a></p>
    </div>
    <div class="section">
      <h2 class="section__title">Orientación profesional</h2>
      <div class="grid grid--cards">
        ${state.articles
          .slice(0, 3)
          .map((a) => artCard(a))
          .join('')}
      </div>
      <p><a href="#/orientacion">Ver todas las guías</a></p>
    </div>
    <div class="section">
      <h2 class="section__title">Cómo funciona</h2>
      <ol class="steps">
        <li class="steps__item">
          <h3 class="steps__title">Crea tu perfil</h3>
          <span class="u-muted">Cuéntanos tu carrera, habilidades e intereses.</span>
        </li>
        <li class="steps__item">
          <h3 class="steps__title">Aprende</h3>
          <span class="u-muted">Toma cursos que fortalezcan lo que piden las empresas.</span>
        </li>
        <li class="steps__item">
          <h3 class="steps__title">Conoce empresas</h3>
          <span class="u-muted">Explora perfiles y vacantes de tu ciudad.</span>
        </li>
        <li class="steps__item">
          <h3 class="steps__title">Postúlate</h3>
          <span class="u-muted">Envía tu postulación y da seguimiento.</span>
        </li>
      </ol>
    </div>
    <div
      class="card"
      style="background:var(--tint-3);flex-direction:row;align-items:center;flex-wrap:wrap"
    >
      <div class="u-grow">
        <h2 style="margin:0">¿Eres empresa de Sonora?</h2>
        <span class="u-muted">Publica vacantes y conoce talento joven (demostración).</span>
      </div>
      <button class="btn btn--accent" data-a="login">Ingresar como empresa</button>
    </div>`;
};

export { homePage };
