# Guardianes de la Selva — sitio web

Sitio educativo para 6.º grado sobre la deforestación de la Amazonía.
Trabajo final de Tecnología Educativa Audiovisual (UNTREF).

## Dónde está cada cosa

| Carpeta o archivo | Qué hay | ¿Se puede editar? |
|---|---|---|
| `contenido\` | Los textos de cada página, en Markdown (texto con marcas simples: `#` es un título, `**así**` es negrita) | Sí |
| `contenido\_datos\enlaces.json` | Enlaces del video de YouTube, del Padlet y de Genially | Sí: pegar el enlace entre las comillas |
| `contenido\_datos\biblioteca.json` | Todos los recursos de la Biblioteca del Explorador. Arriba de todo explica cómo agregar uno | Sí: copiar un bloque `{ … }` y cambiar los datos |
| `contenido\_datos\coordenadas.json` | Coordenadas de Google Earth para la Misión 1 | Sí |
| `contenido\_datos\sitio.json` | Título, menú y créditos | Sí, con cuidado |
| `diseno\` | Plantillas y estilos: cómo se ve el sitio | No |
| `public\` | Imágenes, audios e íconos | Sí: agregar archivos |
| `.github\workflows\publicar.yml` | La acción que publica el sitio en GitHub Pages | No |

**Reglas para editar un archivo `.json`:** no borrar las comillas, las comas ni las llaves `{ }`.

## Ver el sitio en la computadora

Se necesita Node.js, el programa que hace funcionar a Eleventy. En esta PC está en `G:\VideoTools\node`.

1. Abrir una terminal en esta carpeta.
2. La primera vez, escribir `npm install`: descarga Eleventy, el programa que arma el sitio.
3. Escribir `npm run previsualizar` y abrir <http://localhost:8080> en el navegador.
   Cada vez que se guarda un cambio, la página se actualiza sola. Para cortar: `Ctrl + C`.

## Publicar

El sitio se publica en **GitHub Pages**, el hosting gratuito de GitHub.

1. Crear un repositorio en GitHub (la carpeta del proyecto en internet) y subir esta carpeta.
2. En el repositorio, entrar a **Settings → Pages** y en «Source» elegir **GitHub Actions**.
3. A partir de ahí, cada cambio que se guarde en la rama `main` se publica solo en 1 o 2 minutos.
   El avance se ve en la pestaña **Actions**.

El link queda así: `https://usuario.github.io/nombre-del-repositorio/`. Se abre sin cuenta.

### Antes de subir por primera vez

1. Una persona del grupo crea la cuenta gratuita en <https://github.com> (con su correo; el sitio no lo muestra).
2. En GitHub, **Settings → Emails**: tildar «Keep my email addresses private» y copiar la dirección
   que termina en `@users.noreply.github.com`. Con esa dirección se firman las versiones, así el correo real
   no queda publicado en el historial.
3. Crear un repositorio **público** y vacío (sin README), por ejemplo `guardianes-de-la-selva`.
4. Subir esta carpeta. La primera vez, Git abre el navegador para iniciar sesión en GitHub.
5. Hacer el paso 2 de «Publicar» (Settings → Pages → GitHub Actions).

### Lista de control antes de mostrar el sitio

- [ ] Video y Padlet cargados en `contenido\_datos\enlaces.json`.
- [ ] Cada enlace externo de `biblioteca.json` revisado por un adulto (`"revisado": true`).
- [ ] El grupo confirmó los textos marcados como «Borrador», «Agregado» o «Pendiente del grupo».
- [ ] El Padlet está configurado para que el docente apruebe las publicaciones antes de que se vean.

## Reglas del proyecto

- El texto viene del documento del grupo y **no se reescribe**.
- Si falta un enlace, se deja un cartel de «pendiente», nunca un enlace inventado.
- Es un sitio para chicos: **sin cuentas, sin formularios, sin estadísticas de visitas ni rastreadores.**
