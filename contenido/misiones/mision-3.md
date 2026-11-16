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
{# DECIDIR: ver CAMBIOS.md §4 (M3-P2, opción A, B o C). Hasta entonces queda el esquema actual. #}
**Consigna:** La selva es una red donde todos dependen de todos. Completen el siguiente esquema demostrando qué sucede si la especie investigada desaparece de la cadena:

<div class="red">
<p class="red__centro">[ Especie elegida: {% completar "medio" %} ]</p>
<ul class="red__ramas">
<li>Si desaparece, ¿qué animales se quedan sin alimento? {% completar "renglones", 2 %}</li>
<li>Si desaparece, ¿qué plantas o insectos se multiplican en exceso? {% completar "renglones", 2 %}</li>
<li>Conclusión de la red: ¿Cómo cambia el ecosistema completo? {% completar "renglones", 2 %}</li>
</ul>
</div>
{% endpaso %}

{% paso "🎧", "PASO 3: Mesa de Voces – Escucha del Podcast \"Voces de la Amazonía\"", "paso-3" %}
**Consigna:** Abran la sección de audio en la página web del proyecto y escuchen el testimonio asignado (residente local, científico o miembro de una comunidad indígena).

<div class="recursos no-imprimir">
<p class="recursos__titulo">Podcast «Voces de la Amazonía»</p>
<p class="pendiente pendiente--chico">Audio a definir: episodios existentes sobre el tema, que va a elegir el grupo.</p>
<div class="recursos__botones">{% boton "Podcast y audios en la Biblioteca", "/biblioteca/#podcast" %}</div>
</div>

Testimonio escuchado (Nombre / Rol): {% completar "largo" %}

{# DECIDIR: ver CAMBIOS.md §4 (M3-P3, mantener o reformular «Pérdidas sociales y culturales»). #}

Pérdidas sociales y culturales: ¿Qué cuenta el poblador sobre cómo cambió su vida cotidiana o su comunidad tras la deforestación?

Respuesta: {% completar "renglones", 3 %}

Saberes del territorio: ¿Qué enseñanza o consejo nos deja sobre el cuidado y el respeto por la naturaleza?

Respuesta: {% completar "renglones", 3 %}
{% endpaso %}

{% paso "🌡️", "PASO 4: Conexión Climática Global (Deforestación -> Cambio Climático)", "paso-4" %}
{# DECIDIR: ver CAMBIOS.md §4 (M3-P4: mapa A o B, y pregunta de cierre A o B). «Pulmón» ya se cambió en la Fase 1. #}
**Consigna:** La Amazonía es conocida como el "gran regulador del clima" de América del Sur. Completen el mapa de causa-efecto completando los espacios vacíos con las siguientes opciones: (Efecto Invernadero – Absorción de Dióxido de Carbono – Quema de Árboles – Calentamiento Global)

<ul class="opciones" aria-hidden="true">
<li>Efecto Invernadero</li>
<li>Absorción de Dióxido de Carbono</li>
<li>Quema de Árboles</li>
<li>Calentamiento Global</li>
</ul>

<div class="flujo">
<p class="flujo__eslabon"><span class="flujo__num">1.</span> <span class="flujo__causa">Árboles en pie</span> <span class="flujo__flecha" aria-hidden="true">→</span> <span class="flujo__efecto">Realizan la {% completar "medio" %} (guardan el carbono).</span></p>
<p class="flujo__conector"><span aria-hidden="true">▼</span> (Ocurre la Deforestación)</p>
<p class="flujo__eslabon"><span class="flujo__num">2.</span> <span class="flujo__causa">Tala y {% completar "medio" %}</span> <span class="flujo__flecha" aria-hidden="true">→</span> <span class="flujo__efecto">Liberan toneladas de carbono acumulado a la atmósfera.</span></p>
<p class="flujo__conector" aria-hidden="true">▼</p>
<p class="flujo__eslabon"><span class="flujo__num">3.</span> <span class="flujo__causa">Aumento del {% completar "medio" %}</span> <span class="flujo__flecha" aria-hidden="true">→</span> <span class="flujo__efecto">Retiene más calor en la atmósfera.</span></p>
<p class="flujo__conector" aria-hidden="true">▼</p>
<p class="flujo__eslabon"><span class="flujo__num">4.</span> <span class="flujo__causa">Intensificación del {% completar "medio" %}</span> <span class="flujo__flecha" aria-hidden="true">→</span> <span class="flujo__efecto">Provoca sequías y eventos climáticos extremos.</span></p>
</div>
{% endpaso %}

{% paso "📤", "PASO 5: Publicación en la Bitácora Digital (Padlet)", "paso-5" %}
Suban la Ficha de Búsqueda y Rescate (con un dibujo o imagen de la especie) a la columna "Misión 3" del Padlet.

Adjunte una frase del podcast que les haya llamado la atención sobre el testimonio escuchado.

Comenten en la ficha de otro equipo qué aprendieron sobre la especie que ellos investigaron.

{% include "partes/bitacora.njk" %}
{% endpaso %}
