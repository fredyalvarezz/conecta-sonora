# Conecta Sonora (prototipo)

Plataforma de empleabilidad juvenil para Sonora: vacantes, cursos, directorio de empresas y orientación profesional.
Todo el contenido es de demostración (ficticio) y se guarda en el navegador (localStorage). No hay base de datos.

## Cómo ejecutarlo
1. `npm install`
2. Desarrollo: `npm run dev` → http://localhost:5173
3. Producción con Express: `npm run prod` → http://localhost:3000
4. Ordenar el código: `npm run format` (Prettier)

## Mapa de carpetas
```
public/images/        logo-mark.png y logo-mark-light.png (logo para fondo claro y oscuro)
server/index.js       Express: sirve la app compilada (docs) y /api/salud
index.html            esqueleto: header, main, footer, modal y aviso
src/
  main.js             punto de entrada
  styles/base.css     colores y tipografía de la marca (variables) + utilidades
  app/
    render.js         dibuja header + página según la ruta
    events.js         escucha clics, filtros y formularios
    actions/          qué hace cada botón (un archivo por tema: jobs, courses, companies, articles, profile, auth, admin, general)
  components/         piezas reutilizables, cada una con su .js y su .css
    header/ cards/ filters/ form-modal/ empty-state/ button/ tag/ avatar/ progress/ tabs/ table/ chip/ toast/ footer/
  pages/              una carpeta por pantalla (.js + .css si lo necesita)
    home/ jobs/ courses/ companies/ guides/ profile/ company-panel/ admin/ login/ signup/
  services/
    repo.js           listar / consultar / crear / actualizar / eliminar datos
    auth.js           registro e inicio de sesión locales
  state/store.js      estado de la app + guardado en localStorage
  data/               seed.js (datos de ejemplo) y constants.js (carreras y ciudades)
  utils/              dom.js, format.js, recommend.js
```

## Publicar en GitHub Pages
GitHub Pages no ejecuta Vite: solo muestra archivos ya compilados. Por eso el repositorio guarda **dos cosas**:
el código fuente separado por carpetas (`src/`, `public/`, `server/`) y la carpeta **`docs/`** con la página compilada.

1. Sube todo el proyecto al repositorio (rama `main`), incluida la carpeta `docs/`.
2. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama **main**, carpeta **/docs** → Save.
3. La página queda en `https://TU-USUARIO.github.io/conecta-sonora/`.

**Cada vez que cambies código** (en `src/`), vuelve a compilar y sube también `docs/`:
```
npm run build
```
Después haz commit de los cambios. Si no compilas, la página publicada no cambia.

## Cómo fluye la app (de lo simple a lo complejo)
1. La URL cambia (`#/empleos`) → `app/render.js` busca la página en `pages/index.js` y la dibuja.
2. Los botones llevan `data-a="nombre"` → `app/events.js` llama a `actions[nombre]` (carpeta `app/actions/`).
3. Los filtros llevan `data-f="jobs.city"` → `events.js` guarda el valor y refresca los resultados.
4. Las acciones leen y escriben datos con `db.jobs.list()`, `db.jobs.create()`, etc. (`services/repo.js`).
5. Cada vez que se dibuja la app, `state/store.js` guarda todo en localStorage.

## ¿Dónde cambio...?
| Quiero cambiar | Archivo |
|---|---|
| Colores y tipografía | `src/styles/base.css` (variables `--color-*`, `--tint-*`, `--font-main`) |
| Logo | `public/images/logo-mark*.png` y `src/components/header/header.js` |
| Textos e imágenes del inicio | `src/pages/home/home.js` y `home.css` |
| Vacantes, cursos, empresas y artículos de ejemplo | `src/data/seed.js` (si usuarios ya tienen datos guardados, sube `SEED_VERSION` en `state/store.js`) |
| Carreras o ciudades | `src/data/constants.js` |
| Reglas de recomendación | `src/utils/recommend.js` |
| Formularios de crear/editar | `src/app/actions/*.js` (por ejemplo `jobs.js`) |
| Registro e inicio de sesión | `src/services/auth.js` y `src/pages/login`, `src/pages/signup` |

### Agregar una página nueva
1. Crea `src/pages/mi-pagina/mi-pagina.js` que exporte una función que devuelva HTML.
2. Regístrala en `src/pages/index.js` (`'/mi-ruta': miPagina`).
3. Agrega el enlace en `src/components/header/header.js`.

### Agregar un botón con acción
1. En el HTML: `<button data-a="miAccion" data-id="5">`.
2. En la carpeta `src/app/actions/`, agrega `miAccion: (id) => {...}` en el archivo del tema.

## BEM en una línea
`bloque__elemento--modificador`: `card` (bloque) → `card__why` (parte de la tarjeta) → `btn--primary` (variante del botón). Cada bloque vive en su propio `.css` junto a su componente.

## Marca
Azul marino `#2C3E66` · violeta `#A78BFA` · lavanda `#F6E7FF` · fondo `#F7F7FA`. Eslogan: "Tu futuro, más cerca".

## Datos y cuentas locales
- Todo se guarda en localStorage (clave `conecta-sonora-v2`).
- Registro e inicio de sesión funcionan contra ese almacenamiento; la contraseña se guarda con hash y sal solo para que el flujo funcione: **no es seguridad real**.
- "Explorar como estudiante / empresa / administrador" entra sin cuenta. "Restablecer demostración" (administrador) vuelve a los datos iniciales y conserva las cuentas.
- El curso "Capacítate Carso" es un enlace externo real verificado el 10 de octubre de 2026; el resto de cursos y proveedores son ficticios.

## Simulado / requiere backend
Cuentas y contraseñas reales, envío real de postulaciones, carga de CV, inscripción a cursos, estadísticas reales, permisos por rol y datos compartidos entre usuarios.

## Pasar a backend real
1. En Express, crear `/api/auth`, `/api/vacantes`, `/api/empresas`, `/api/cursos`, `/api/articulos`, `/api/postulaciones` con una base de datos.
2. Reemplazar `services/repo.js` y `services/auth.js` por versiones con `fetch`; quitar el guardado de `state/store.js`.
3. Añadir autenticación real (sesiones o JWT) y permisos por rol en el servidor.
