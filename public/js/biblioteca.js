// Filtros de la Biblioteca del Explorador: muestran solo los recursos de una
// misión o de un tipo. Sin JavaScript, la página muestra todo igual.
// No guarda nada: la misión elegida solo queda en la dirección (?mision=2).
(function () {
  var filtros = document.querySelector("[data-filtros]");
  if (!filtros) return;
  filtros.hidden = false;

  var estado = { mision: "todas", tipo: "todos" };
  var params = new URLSearchParams(location.search);
  if (/^[1-4]$/.test(params.get("mision") || "")) estado.mision = params.get("mision");

  var aviso = filtros.querySelector("[data-estado]");
  var recursos = Array.prototype.slice.call(document.querySelectorAll(".recurso"));

  function marcar(atributo, valor) {
    filtros.querySelectorAll("[data-" + atributo + "]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-" + atributo) === valor));
    });
  }

  function aplicar() {
    var visibles = 0;
    recursos.forEach(function (li) {
      var misiones = li.getAttribute("data-misiones").split(" ");
      var ok =
        (estado.mision === "todas" || misiones.indexOf(estado.mision) !== -1) &&
        (estado.tipo === "todos" || li.getAttribute("data-tipo") === estado.tipo);
      li.hidden = !ok;
      if (ok) visibles++;
    });
    document.querySelectorAll("[data-grupo]").forEach(function (g) {
      g.hidden = !g.querySelector(".recurso:not([hidden])");
    });
    document.querySelectorAll("[data-estante]").forEach(function (s) {
      s.hidden = !s.querySelector(".recurso:not([hidden])");
    });
    marcar("mision", estado.mision);
    marcar("tipo", estado.tipo);

    var texto = visibles === 1 ? "Se muestra 1 recurso" : "Se muestran " + visibles + " recursos";
    if (estado.mision !== "todas") texto += " de la Misión " + estado.mision;
    aviso.textContent = visibles ? texto + "." : "No hay recursos para ese filtro. Prueben con otra misión o con «Todos».";

    var url = new URL(location.href);
    if (estado.mision === "todas") url.searchParams.delete("mision");
    else url.searchParams.set("mision", estado.mision);
    history.replaceState(null, "", url);
  }

  filtros.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    if (b.hasAttribute("data-mision")) estado.mision = b.getAttribute("data-mision");
    if (b.hasAttribute("data-tipo")) estado.tipo = b.getAttribute("data-tipo");
    aplicar();
  });

  // Si eligen una sección oculta por el filtro, se vuelve a mostrar todo.
  document.querySelectorAll(".estantes-indice a").forEach(function (a) {
    a.addEventListener("click", function () {
      var destino = document.querySelector(a.getAttribute("href"));
      if (destino && destino.hidden) { estado.mision = "todas"; estado.tipo = "todos"; aplicar(); }
    });
  });

  aplicar();
})();
