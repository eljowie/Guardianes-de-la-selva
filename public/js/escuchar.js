// Botón «Escuchar» para el mensaje de Lía y la consigna de cada paso.
// Usa la voz que trae el navegador (speechSynthesis): no hay servidor ni cuenta, y no se envía nada.
// Si el navegador no tiene voz, el botón no aparece.
(function () {
  if (!("speechSynthesis" in window) || !window.SpeechSynthesisUtterance) return;
  var voz = speechSynthesis;
  var activo = null;

  function textoDe(nodos) {
    return nodos.map(function (n) {
      var copia = n.cloneNode(true);
      copia.querySelectorAll(".glosa__def, .sr, .escuchar, [aria-hidden='true']").forEach(function (x) { x.remove(); });
      return copia.textContent.replace(/\s+/g, " ").trim();
    }).join(". ");
  }
  function elegirVoz() {
    var voces = voz.getVoices();
    return voces.find(function (v) { return /^es[-_]AR/i.test(v.lang); }) ||
      voces.find(function (v) { return /^es[-_](419|MX|US|CO|CL|UY)/i.test(v.lang); }) ||
      voces.find(function (v) { return /^es/i.test(v.lang); }) || null;
  }
  function reiniciar(boton) {
    if (!boton) return;
    boton.setAttribute("data-activo", "false");
    boton.querySelector(".escuchar__texto").textContent = boton.dataset.etiqueta;
  }
  function crearBoton(etiqueta, nodos) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "escuchar no-imprimir";
    b.dataset.etiqueta = etiqueta;
    b.setAttribute("data-activo", "false");
    b.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg><span class="escuchar__texto">' + etiqueta + "</span>";
    b.addEventListener("click", function () {
      var estaba = activo === b;
      voz.cancel();
      reiniciar(activo);
      activo = null;
      if (estaba) return;
      var u = new SpeechSynthesisUtterance(textoDe(nodos));
      u.lang = "es-AR";
      var v = elegirVoz();
      if (v) u.voice = v;
      u.rate = 0.95;
      u.onend = u.onerror = function () { if (activo === b) { reiniciar(b); activo = null; } };
      activo = b;
      b.setAttribute("data-activo", "true");
      b.querySelector(".escuchar__texto").textContent = "Detener";
      voz.speak(u);
    });
    return b;
  }

  // Mensajes de Lía: se lee todo menos la cabecera «Mensaje recibido».
  document.querySelectorAll(".mensaje").forEach(function (m) {
    var nodos = [].slice.call(m.children).filter(function (c) { return !c.classList.contains("mensaje__cabecera"); });
    var titulo = m.querySelector("h2");
    if (titulo) titulo.insertAdjacentElement("afterend", crearBoton("Escuchar a Lía", nodos));
  });

  // Pasos de las misiones: se lee el título y la consigna.
  document.querySelectorAll(".paso").forEach(function (p) {
    var h = p.querySelector("h2");
    var consigna = [].slice.call(p.querySelectorAll(":scope > p")).find(function (x) { return /^\s*Consigna/i.test(x.textContent); });
    if (!h || !consigna) return;
    h.insertAdjacentElement("afterend", crearBoton("Escuchar la consigna", [h.querySelector(".paso__titulo") || h, consigna]));
  });

  window.addEventListener("pagehide", function () { voz.cancel(); });
})();
