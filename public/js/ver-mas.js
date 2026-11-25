// Secciones plegables («ver más»).
// 1) Si un enlace apunta a algo que está dentro de una sección cerrada (o justo antes de ella), la abre.
// 2) Al imprimir abre todas, para que el papel tenga el texto completo; después las vuelve a cerrar.
(function () {
  function abrirDestino() {
    if (!location.hash) return;
    var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!el) return;
    var d = el.closest("details.ver-mas");
    if (!d && el.nextElementSibling && el.nextElementSibling.matches("details.ver-mas")) d = el.nextElementSibling;
    if (d) { d.open = true; el.scrollIntoView(); }
  }
  abrirDestino();
  window.addEventListener("hashchange", abrirDestino);

  var cerradas = [];
  window.addEventListener("beforeprint", function () {
    cerradas = [].slice.call(document.querySelectorAll("details:not([open])"));
    cerradas.forEach(function (d) { d.open = true; });
  });
  window.addEventListener("afterprint", function () {
    cerradas.forEach(function (d) { d.open = false; });
  });
})();
