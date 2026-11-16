---
numero: 3
title: "Misión 3: Lo que se pierde"
descripcion: "Investigar una especie en peligro, su red de vida, las voces de la selva y el clima."
proyecto: "Guardianes de la Selva: Expedición Amazónica"
---

{% mensajeLia %}
"¡Atención, exploradores! Han penetrado en lo profundo del sotobosque amazónico. A medida que avanzan, descubren que la deforestación no sólo derriba árboles o altera el suelo: está destruyendo refugios, interrumpiendo cadenas alimentarias y desplazando a las comunidades humanas que habitan la selva desde hace generaciones.

Su misión hoy es transformarse en rescatistas ecosistémicos: deben investigar una especie en peligro, reconstruir su red de vida, escuchar las voces de los pobladores locales y comprender cómo la pérdida de la selva afecta el clima de todo el planeta."
{% endmensajeLia %}

{% paso "🐾", "PASO 1: Ficha de Búsqueda y Rescate de Especies", "paso-1" %}
**Consigna:** Elijan una especie nativa de la Amazonía (animal o vegetal) disponible en la Biblioteca del Explorador y completen los datos de rescate:

{% recursos %}
{% boton "Fichas de especies en la Biblioteca", "/biblioteca/#especies" %}
{% endrecursos %}

Especie elegida: {% completar "largo" %}

Nombre científico / Nombre común: {% completar "largo" %}

Datos Ecosistémicos:

{% g "hábitat", "Hábitat" %} y {% g "estrato" %}: ¿En qué parte de la selva vive?

Respuesta: {% completar "renglones", 2 %}

{% g "nicho ecológico", "Nicho ecológico" %} y alimentación: ¿De qué se alimenta?

Respuesta: {% completar "renglones", 2 %}

¿Qué función cumple en la selva?

Respuesta: {% completar "renglones", 2 %}

Amenaza directa: ¿De qué manera la tala, los incendios o la minería destruyen o modifican su hábitat? ¿Qué consecuencias tiene esto para la supervivencia de la especie?

Respuesta: {% completar "renglones", 4 %}
{% endpaso %}

{% paso "🕸️", "PASO 2: Red Alimentaria e Interdependencia (El Efecto Dominó)", "paso-2" %}
**Consigna:** La selva es una red donde todos dependen de todos. Completen el siguiente esquema demostrando qué sucede si la especie investigada desaparece de la cadena:

<div class="red">
<p class="red__centro">[ Especie elegida: {% completar "medio" %} ]</p>
<p class="red__pregunta">Si tuvieran que reconstruir la cadena de efectos que provoca la desaparición de esa especie, ¿qué otros seres vivos se verían afectados primero, cuáles después y por qué?</p>
<ul class="red__ramas">
<li><strong>Afectados primero:</strong> {% completar "renglones", 2 %}</li>
<li><strong>Afectados después:</strong> {% completar "renglones", 2 %}</li>
<li><strong>¿Por qué?</strong> {% completar "renglones", 2 %}</li>
</ul>
<p class="red__pregunta">Además de su alimentación, ¿qué otras funciones cumple esa especie en la selva (como dispersar semillas, polinizar o controlar plagas) que quedarían interrumpidas si desapareciera?</p>
<ul class="red__ramas">
<li><strong>Funciones que se interrumpen:</strong> {% completar "renglones", 3 %}</li>
</ul>
</div>

¿Cómo explicarían con sus propias palabras la diferencia entre un desequilibrio pasajero y el colapso de una {% g "red trófica" %}?

Respuesta: {% completar "renglones", 4 %}

¿Qué significa afirmar que la selva funciona como una «red {% g "interdependiente" %}» y qué evidencia de su investigación permite comprobarlo?

Respuesta: {% completar "renglones", 4 %}
{% endpaso %}

{% paso "🎧", "PASO 3: Mesa de Voces – Escucha del Podcast \"Voces de la Amazonía\"", "paso-3" %}
**Consigna:** Abran la sección de audio en la página web del proyecto y escuchen el testimonio asignado (residente local, científico o miembro de una comunidad indígena).

<div class="recursos no-imprimir">
<p class="recursos__titulo">Podcast «Voces de la Amazonía»</p>
<p class="pendiente pendiente--chico">Audio a definir: episodios existentes sobre el tema, que va a elegir el grupo.</p>
<div class="recursos__botones">{% boton "Podcast y audios en la Biblioteca", "/biblioteca/#podcast" %}</div>
</div>

Testimonio escuchado (Nombre / Rol): {% completar "largo" %}

¿Qué cambios en su vida cotidiana mencionan los pobladores? ¿Qué saberes sobre la selva aparecen en sus voces y qué pasaría con ellos si la selva se transforma?

Respuesta: {% completar "renglones", 4 %}

Saberes del territorio: ¿Qué enseñanza o consejo nos deja sobre el cuidado y el respeto por la naturaleza?

Respuesta: {% completar "renglones", 3 %}
{% endpaso %}

{% paso "🌡️", "PASO 4: Conexión Climática Global (Deforestación -> Cambio Climático)", "paso-4" %}
**Consigna:** La Amazonía es conocida como el "gran regulador del clima" de América del Sur. Armen el mapa de causa-efecto: a partir de la tala y la quema, escriban en cada recuadro una consecuencia que encontraron en su investigación, en el orden en que creen que ocurre cada una.

<ol class="flujo flujo--abierto">
<li class="flujo__eslabon flujo__eslabon--inicio"><span class="flujo__num">Punto de partida:</span> <span class="flujo__causa">Tala y quema de árboles</span></li>
<li class="flujo__eslabon"><span class="flujo__num">1.</span> {% completar "renglones", 2 %}</li>
<li class="flujo__eslabon"><span class="flujo__num">2.</span> {% completar "renglones", 2 %}</li>
<li class="flujo__eslabon"><span class="flujo__num">3.</span> {% completar "renglones", 2 %}</li>
<li class="flujo__eslabon"><span class="flujo__num">4.</span> {% completar "renglones", 2 %}</li>
</ol>

¿Qué relación pueden establecer entre lo que ocurre con la selva amazónica y el clima de otras regiones del planeta? ¿Qué evidencia de lo que investigaron lo muestra?

Respuesta: {% completar "renglones", 4 %}
{% endpaso %}

{% include "partes/antes-ahora.njk" %}

{% paso "📤", "PASO 5: Publicación en la Bitácora Digital (Padlet)", "paso-5" %}
Suban la Ficha de Búsqueda y Rescate (con un dibujo o imagen de la especie) a la columna "Misión 3" del Padlet.

Adjunte una frase del podcast que les haya llamado la atención sobre el testimonio escuchado.

Comenten en la ficha de otro equipo qué aprendieron sobre la especie que ellos investigaron.

{% include "partes/bitacora.njk" %}
{% endpaso %}
