// Revisa todos los enlaces del sitio ya construido (_site): internos, anclas (#), archivos y externos.
// Uso: node herramientas/revisar-enlaces.mjs   → escribe informe-enlaces.md
// Un "script" es un programa chico: este visita cada link y avisa cuáles fallan o redirigen.
import { readFileSync, readdirSync, statSync, existsSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const SITIO = fileURLToPath(new URL("../_site/", import.meta.url));
const paginas = [];
(function recorrer(d) { for (const n of readdirSync(d)) { const p = join(d, n); if (statSync(p).isDirectory()) recorrer(p); else if (p.endsWith(".html")) paginas.push(p); } })(SITIO);

const urlDe = (archivo) => "/" + relative(SITIO, archivo).split(sep).join("/").replace(/index\.html$/, "");
const html = Object.fromEntries(paginas.map((p) => [urlDe(p), readFileSync(p, "utf8")]));
const ids = Object.fromEntries(Object.entries(html).map(([u, h]) => [u, new Set([...h.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))]));

const filas = [];
const externos = new Map();
for (const [pagina, h] of Object.entries(html)) {
  if (pagina.startsWith("/propuesta/")) continue; // página de trabajo del grupo, no es parte del sitio
  for (const m of h.matchAll(/<(a|link|script|img|iframe|source|audio)\b[^>]*?\s(href|src)="([^"]+)"[^>]*>/g)) {
    const url = m[3];
    if (/^(mailto:|tel:|data:|javascript:)/.test(url)) continue;
    let texto = "";
    if (m[1] === "a") { const fin = h.indexOf("</a>", m.index); texto = h.slice(m.index + m[0].length, fin).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(); }
    else texto = (m[0].match(/(?:alt|title)="([^"]*)"/) || [, m[1]])[1];
    if (/^https?:/.test(url)) { if (!externos.has(url)) externos.set(url, []); externos.get(url).push({ pagina, texto }); continue; }
    const [ruta, ancla] = url.split("#");
    const destino = ruta === "" ? pagina : ruta.startsWith("/") ? ruta : new URL(ruta, "http://x" + pagina).pathname;
    let estado = "OK";
    if (ruta !== "") {
      const archivo = join(SITIO, decodeURI(destino));
      if (!(existsSync(archivo) && statSync(archivo).isFile()) && !existsSync(join(archivo, "index.html"))) estado = "ROTO (no existe)";
    }
    if (estado === "OK" && ancla && !(ids[destino.endsWith("/") ? destino : destino + "/"] || ids[destino] || new Set()).has(ancla)) estado = "ROTO (falta el ancla #" + ancla + ")";
    filas.push({ pagina, texto, url, estado });
  }
}

const revisar = async (url) => {
  const op = { redirect: "manual", headers: { "user-agent": "Mozilla/5.0 (revisor de enlaces del sitio Guardianes de la Selva)" } };
  try {
    let r = await fetch(url, { ...op, method: "HEAD" });
    if (r.status >= 400 || r.status === 0) r = await fetch(url, { ...op, method: "GET" });
    if (r.status >= 300 && r.status < 400) {
      const a = new URL(r.headers.get("location"), url).href;
      const mismo = a.replace(/\/$/, "") === url.replace(/\/$/, "") || a.replace("http:", "https:") === url;
      return (mismo ? "OK " : "REDIRIGE → ") + (mismo ? r.status : a);
    }
    return r.ok ? "OK " + r.status : "ERROR " + r.status;
  } catch (e) { return "ERROR (" + e.message + ")"; }
};
for (const [url, usos] of externos) { const estado = await revisar(url); usos.forEach((u) => filas.push({ ...u, url, estado })); }

filas.sort((a, b) => (a.estado.startsWith("OK") - b.estado.startsWith("OK")) || a.pagina.localeCompare(b.pagina));
const unicos = new Map(); filas.forEach((f) => unicos.set(f.pagina + f.url + f.texto, f));
const lista = [...unicos.values()].filter((f) => !/\/(estilos|js|fuentes-tipograficas)\//.test(f.url) || !f.estado.startsWith("OK"));
const md = ["| Página | Texto del link | URL | Estado |", "|---|---|---|---|", ...lista.map((f) => `| ${f.pagina} | ${(f.texto || "").slice(0, 70).replace(/\|/g, "/")} | ${f.url.replace(/\|/g, "%7C")} | ${f.estado} |`)].join("\n");
writeFileSync(new URL("../informe-enlaces.md", import.meta.url), `# Revisión de enlaces\n\nFecha: ${new Date().toLocaleString("es-AR")}\n\n${md}\n`);
const malos = lista.filter((f) => !f.estado.startsWith("OK"));
console.log(`Enlaces revisados: ${lista.length} · con problemas: ${malos.length}`);
malos.forEach((f) => console.log(" ", f.estado, "·", f.pagina, "·", f.url));
