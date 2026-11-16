// Configuración de Eleventy: le dice dónde está cada cosa y define las "piezas"
// que se usan en los textos (botones, espacios para completar, pasos).
// El grupo no necesita tocar este archivo.
import { readFileSync } from "node:fs";
import { HtmlBasePlugin } from "@11ty/eleventy";

const DATOS_SITIO = new URL("./contenido/_datos/sitio.json", import.meta.url);

// Páginas que todavía no existen (marcadas "lista": false en sitio.json).
function paginaLista(url) {
  const sitio = JSON.parse(readFileSync(DATOS_SITIO, "utf8"));
  const base = url.split("#")[0];
  const item = [...sitio.menu, ...sitio.pie, ...(sitio.otras || [])].find((i) => i.url === base);
  return item ? item.lista : true;
}

const escapar = (t) =>
  String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export default function (eleventyConfig) {
  // Corrige los enlaces cuando el sitio se publica en una subcarpeta
  // (GitHub Pages lo publica en usuario.github.io/nombre-del-repositorio/).
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Copia tal cual las imágenes, audios, íconos y estilos.
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addPassthroughCopy({ "diseno/estilos": "estilos" });
  eleventyConfig.addWatchTarget("diseno/estilos");
  eleventyConfig.addWatchTarget("contenido/_datos");

  eleventyConfig.addFilter("anio", () => new Date().getFullYear());

  // Saca el código del video de un enlace de YouTube.
  eleventyConfig.addFilter("youtubeId", (url) => {
    const m = String(url || "").match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : "";
  });

  // Saca la dirección del muro del código «Insertar» de Padlet. Acepta el código
  // completo (<iframe src="…">) o solo la dirección. Solo deja pasar padlet.com.
  eleventyConfig.addFilter("padletEmbed", (codigo) => {
    const texto = String(codigo || "").trim();
    const src = (texto.match(/src=["']([^"']+)["']/) || [, texto])[1];
    return /^https:\/\/padlet\.com\/embed\/[\w-]+/.test(src) ? src : "";
  });

  // Filtra una lista: {{ biblioteca.recursos | donde("seccion", "prensa") }}
  eleventyConfig.addFilter("donde", (lista, clave, valor) =>
    (lista || []).filter((item) => item[clave] === valor)
  );

  // Busca un elemento por su id: {{ biblioteca.tipos | buscar("noticia") }}
  eleventyConfig.addFilter("buscar", (lista, id) => (lista || []).find((item) => item.id === id) || {});

  // Tipos de recurso que se usan al menos una vez (para los filtros de la Biblioteca).
  eleventyConfig.addFilter("tiposUsados", (tipos, recursos) =>
    (tipos || []).filter((t) => (recursos || []).some((r) => r.tipo === t.id))
  );

  // ── Piezas para los textos ───────────────────────────────────────────

  // Línea para escribir. Tamaños: "corto", "medio" (por defecto), "largo"
  // o "renglones" con la cantidad de renglones: {% completar "renglones", 3 %}
  eleventyConfig.addShortcode("completar", (tamano = "medio", renglones = 2) => {
    const sr = '<span class="sr">espacio para completar</span>';
    if (tamano === "renglones") {
      return `<span class="renglones" style="--renglones:${Number(renglones) || 2}">${sr}</span>`;
    }
    return `<span class="completar completar--${tamano}">${sr}</span>`;
  });

  // Casilla para marcar con una X.
  eleventyConfig.addShortcode(
    "casilla",
    () => '<span class="casilla" role="img" aria-label="casilla para marcar"></span>'
  );

  // Botón o enlace. Si el destino falta o la página no existe todavía, muestra un cartel.
  eleventyConfig.addShortcode("boton", (texto, destino = "", estilo = "") => {
    const clase = `boton${estilo ? " boton--" + estilo : ""}`;
    if (!destino) {
      return `<span class="${clase} boton--pendiente">${escapar(texto)} <small>(enlace pendiente)</small></span>`;
    }
    if (destino.startsWith("http")) {
      return `<a class="${clase}" href="${escapar(destino)}" target="_blank" rel="noopener noreferrer">${escapar(texto)}<span class="sr"> (se abre en otra pestaña)</span></a>`;
    }
    if (!paginaLista(destino)) {
      return `<span class="${clase} boton--pendiente">${escapar(texto)} <small>(próximamente)</small></span>`;
    }
    return `<a class="${clase}" href="${escapar(destino)}">${escapar(texto)}</a>`;
  });

  // Glosario: {% g "indicadores" %} o {% g "hábitat", "Hábitat" %} (clave, texto visible).
  // La palabra se toca y muestra su definición (de _datos/glosario.json). Cada página
  // junta sus palabras para el recuadro «Palabras de la expedición» del final.
  const palabrasPorPagina = new Map();
  let contadorGlosa = 0;
  const leerGlosario = () => JSON.parse(readFileSync(new URL("./contenido/_datos/glosario.json", import.meta.url), "utf8"));

  eleventyConfig.addShortcode("g", function (clave, visible) {
    const entrada = leerGlosario()[clave];
    if (!entrada) throw new Error(`Glosario: falta la palabra «${clave}» en glosario.json`);
    const pagina = this.page?.inputPath || "";
    if (!palabrasPorPagina.has(pagina)) palabrasPorPagina.set(pagina, new Set());
    palabrasPorPagina.get(pagina).add(clave);
    const id = `glosa-${++contadorGlosa}`;
    return `<span class="glosa"><button type="button" class="glosa__palabra" aria-expanded="false" aria-controls="${id}">${escapar(visible || clave)}</button><span class="glosa__def" id="${id}" role="note" hidden><strong>${escapar(entrada.termino)}:</strong> ${escapar(entrada.definicion)}</span></span>`;
  });

  eleventyConfig.addShortcode("glosarioPagina", function () {
    const pagina = this.page?.inputPath || "";
    const claves = [...(palabrasPorPagina.get(pagina) || [])];
    palabrasPorPagina.delete(pagina);
    if (!claves.length) return "";
    const datos = leerGlosario();
    const items = claves
      .map((c) => datos[c])
      .sort((a, b) => a.termino.localeCompare(b.termino, "es"))
      .map((e) => `<div><dt>${escapar(e.termino)}</dt><dd>${escapar(e.definicion)}</dd></div>`)
      .join("");
    return `<aside class="glosario" aria-labelledby="titulo-glosario"><h2 id="titulo-glosario">Palabras de la expedición</h2><dl>${items}</dl></aside>`;
  });

  // Cartel visible para contenido que todavía no existe.
  eleventyConfig.addPairedShortcode(
    "pendiente",
    (contenido) => `<div class="pendiente" role="note">\n\n${contenido}\n\n</div>`
  );

  // Tarjeta de un paso: {% paso "📌", "PASO 1: …", "paso-1" %} … {% endpaso %}
  eleventyConfig.addPairedShortcode("paso", (contenido, icono, titulo, id) => {
    const [, etiqueta = "", resto = titulo] = titulo.match(/^(PASO \d+):\s*(.*)$/) || [];
    return `<section class="paso" id="${id}" aria-labelledby="${id}-titulo">
<h2 id="${id}-titulo"><span class="paso__icono" aria-hidden="true">${icono}</span> ${
      etiqueta ? `<span class="paso__numero">${etiqueta}:</span> ` : ""
    }<span class="paso__titulo">${resto}</span></h2>

${contenido}

</section>`;
  });

  // Caja con estilo (Cara A, Cara B, dilema, carta…).
  eleventyConfig.addPairedShortcode(
    "caja",
    (contenido, clase) => `<div class="caja caja--${clase}">\n\n${contenido}\n\n</div>`
  );

  // Mensaje de radio de Lía.
  eleventyConfig.addPairedShortcode(
    "mensajeLia",
    (contenido, titulo = "Situación de expedición") => `<section class="mensaje" aria-labelledby="situacion">
<p class="mensaje__cabecera" aria-hidden="true"><span class="mensaje__luz"></span> Mensaje recibido · Lía, guardaparque</p>
<h2 id="situacion">${titulo}</h2>

${contenido}

</section>`
  );

  // Recursos de un paso (no se imprimen).
  eleventyConfig.addPairedShortcode(
    "recursos",
    (contenido) =>
      `<div class="recursos no-imprimir"><p class="recursos__titulo">Recursos para este paso</p>\n<div class="recursos__botones">${contenido.trim()}</div></div>`
  );
}

export const config = {
  dir: {
    input: "contenido",
    includes: "../diseno/plantillas",
    data: "_datos",
    output: "_site",
  },
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  pathPrefix: process.env.PATH_PREFIX || "/",
};
