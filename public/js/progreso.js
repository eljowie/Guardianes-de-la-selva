// Progreso de la expedición: cuando un equipo marca una misión como terminada,
// su zona se «enciende» en el mapa de la portada.
// Se guarda solo en esta computadora (localStorage); no se envía a ningún lado.
(function () {
  var clave = function (n) { return "guardianes-mision-" + n + "-terminada"; };
  var leer = function (n) { try { return localStorage.getItem(clave(n)) === "1"; } catch (e) { return false; } };
  var guardar = function (n, si) { try { si ? localStorage.setItem(clave(n), "1") : localStorage.removeItem(clave(n)); } catch (e) {} };

  // En la página de una misión: botón para marcarla.
  var boton = document.querySelector("[data-terminar-mision]");
  if (boton) {
    var n = boton.dataset.terminarMision;
    var aviso = document.querySelector(".cierre-mision__estado");
    var pintar = function () {
      var hecha = leer(n);
      boton.setAttribute("data-activo", hecha ? "true" : "false");
      boton.textContent = hecha ? "¡Misión terminada! (tocar para desmarcar)" : "Marcar la misión como terminada";
      if (aviso) aviso.textContent = hecha ? "Listo: la zona " + n + " ya está encendida en el mapa de la expedición." : "";
    };
    boton.hidden = false;
    boton.closest(".cierre-mision").hidden = false;
    boton.addEventListener("click", function () { guardar(n, !leer(n)); pintar(); });
    pintar();
  }

  // En la portada: encender las zonas terminadas y contar.
  var zonas = document.querySelectorAll(".zona[data-mision]");
  if (zonas.length) {
    var total = 0;
    zonas.forEach(function (z) {
      var hecha = leer(z.dataset.mision);
      z.classList.toggle("zona--terminada", hecha);
      if (hecha) { total++; z.setAttribute("aria-label", z.getAttribute("aria-label") + " (terminada)"); }
    });
    var cartel = document.querySelector(".mapa__progreso");
    if (cartel && total) {
      cartel.hidden = false;
      cartel.querySelector("strong").textContent = total + " de " + zonas.length;
    }
  }
})();
