// Glosario: al tocar una palabra marcada se abre su definición.
// Se cierra tocando de nuevo, tocando afuera o sobre la definición, o con la tecla Escape.
// Sin JavaScript, las definiciones están igual en «Palabras de la expedición».
(function () {
  var abierta = null;

  function cerrar(devolverFoco) {
    if (!abierta) return;
    var def = document.getElementById(abierta.getAttribute("aria-controls"));
    def.hidden = true;
    def.style.left = "";
    abierta.setAttribute("aria-expanded", "false");
    if (devolverFoco) abierta.focus();
    abierta = null;
  }

  function abrir(boton) {
    cerrar(false);
    var def = document.getElementById(boton.getAttribute("aria-controls"));
    def.hidden = false;
    boton.setAttribute("aria-expanded", "true");
    abierta = boton;
    // Que no se salga de la pantalla por la derecha (celulares).
    var r = def.getBoundingClientRect();
    var sobra = r.right - (document.documentElement.clientWidth - 12);
    if (sobra > 0) def.style.left = -sobra + "px";
  }

  document.addEventListener("click", function (e) {
    var boton = e.target.closest(".glosa__palabra");
    if (boton) {
      if (boton === abierta) cerrar(false);
      else abrir(boton);
    } else if (abierta) {
      // Tocar afuera o sobre la propia definición la cierra (así no tapa otra palabra).
      cerrar(false);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") cerrar(true);
  });
})();
