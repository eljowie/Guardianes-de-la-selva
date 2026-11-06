// Configuración de Eleventy: le dice dónde está cada cosa.
// El grupo no necesita tocar este archivo.
import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Corrige los enlaces cuando el sitio se publica en una subcarpeta
  // (GitHub Pages lo publica en usuario.github.io/nombre-del-repositorio/).
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Copia tal cual las imágenes, audios, íconos y estilos.
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addPassthroughCopy({ "diseno/estilos": "estilos" });
  eleventyConfig.addWatchTarget("diseno/estilos");

  // Fecha para el pie, en formato argentino.
  eleventyConfig.addFilter("anio", () => new Date().getFullYear());
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
