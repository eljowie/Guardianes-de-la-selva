// «Antes pensaba / Ahora pienso»: guarda lo escrito solo en este dispositivo (localStorage)
// y lo muestra de nuevo al final de la misión. No se envía a ningún lado.
(function () {
  function leer(k) { try { return localStorage.getItem("guardianes-" + k) || ""; } catch (e) { return ""; } }
  function guardar(k, v) { try { localStorage.setItem("guardianes-" + k, v); } catch (e) {} }
  document.querySelectorAll("[data-guardar]").forEach(function (campo) {
    var k = campo.getAttribute("data-guardar");
    campo.value = leer(k);
    campo.addEventListener("input", function () { guardar(k, campo.value); mostrarEco(); });
  });
  function mostrarEco() {
    document.querySelectorAll("[data-eco]").forEach(function (eco) {
      var texto = leer(eco.getAttribute("data-eco")).trim();
      eco.hidden = !texto;
      eco.textContent = texto ? " Escribieron: «" + texto + "»" : "";
    });
  }
  mostrarEco();
})();
