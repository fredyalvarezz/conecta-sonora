# Conecta Sonora (prototipo)
Plataforma de empleabilidad juvenil para Sonora. Datos 100 % ficticios.

## Ejecutar
1. `npm install`
2. Desarrollo: `npm run dev` → http://localhost:5173
3. Producción con Express: `npm run prod` → http://localhost:3000

## Estructura (CSS con metodología BEM: bloque__elemento--modificador)
```
src/
  main.js            punto de entrada
  app/               render, eventos y acciones (clics, formularios)
  components/        un bloque BEM por carpeta: cards, header, filters, form-modal, empty-state, button, tag…
  pages/             home, jobs, courses, companies, guides, profile, company-panel, admin, login, signup
  services/          repo.js (listar/consultar/crear/actualizar/eliminar) y auth.js (cuentas locales)
  state/store.js     estado único + persistencia en localStorage
  data/              datos de ejemplo y constantes
  utils/             dom, formato y recomendaciones
  styles/base.css    variables de color, reset y utilidades
server/index.js      Express: sirve la app compilada y /api/salud
```

## Datos y cuentas locales
- Todo se guarda en **localStorage** (clave `conecta-sonora-v2`): vacantes, cursos, empresas, perfil, postulaciones y cuentas.
- Registro e inicio de sesión funcionan contra ese almacenamiento. La contraseña se guarda con hash y sal, **solo para que el flujo funcione**: no es seguridad real.
- También puedes entrar sin cuenta con "Explorar como estudiante / empresa / administrador".
- "Restablecer demostración" (administrador) devuelve el contenido inicial y conserva las cuentas.

## Pasar a backend real
1. En Express, crear `/api/auth`, `/api/vacantes`, `/api/empresas`, `/api/cursos`, `/api/articulos`, `/api/postulaciones` con base de datos.
2. Reemplazar `services/repo.js` y `services/auth.js` por versiones con `fetch`; quitar `save()` y localStorage de `state/store.js`.
3. Añadir autenticación real (sesiones o JWT) y permisos por rol en el servidor.

## Pendiente
Interfaces TypeScript, CRUD de artículos en el administrador, filtro por carrera y guardados/cursos por cuenta (hoy se comparten en el navegador).
