---
numero: 1
title: "Misión 1: El territorio que cambió"
descripcion: "Observar imágenes satelitales, leer prensa ambiental y formular una hipótesis."
proyecto: "Guardianes de la Selva"
---

{% mensajeLia %}
"¡Bienvenidos exploradores! Soy Lía, guardaparque de la reserva. Necesitamos su ayuda urgente. Nos han llegado imágenes satelitales de una misma zona de la Amazonía tomadas con 10 años de diferencia. El paisaje verde y continuo que conocíamos ha cambiado. Su primera misión no es adivinar qué pasó, sino aprender a observar detenidamente como científicos, consultar fuentes de información y formular una hipótesis fundamentada sobre las causas de esta transformación."
{% endmensajeLia %}

{% paso "📌", "PASO 1: Observación Detenida en Google Earth (Enseñar a mirar)", "paso-1" %}
**Consigna:** Abran la línea de tiempo en Google Earth en la coordenada asignada por el docente. Observen primero la imagen de hace 10 años y luego la imagen actual. Dividan la imagen mentalmente en 4 cuadrantes para no pasar nada por alto.

<div class="recursos no-imprimir">
<p class="recursos__titulo">Coordenadas para Google Earth</p>
{% if coordenadas.puntos.length %}
<ul class="coordenadas">
{% for p in coordenadas.puntos %}<li><span class="coordenadas__nombre">{{ p.nombre }}</span> <span class="coordenadas__valor">{{ p.latitud }}, {{ p.longitud }}</span> {% boton "Abrir en Google Earth", "https://earth.google.com/web/@" + p.latitud + "," + p.longitud + ",500a,5000d,35y,0h,0t,0r" %}</li>
{% endfor %}</ul>
{% else %}
<p class="pendiente pendiente--chico">Coordenadas pendientes: las asigna el docente.</p>
{% endif %}
</div>

Grilla de Evidencias Visuales:

<div class="tabla-envoltorio">

| Cuadrante | ¿Qué elementos o vegetación había HACE 10 AÑOS? | ¿Qué elementos NUEVOS o cambios aparecen HOY? (Caminos, humo, manchas madereras) |
|---|---|---|
| Noroeste (Arriba Izq.) |   |   |
| Noreste (Arriba Der.) |   |   |
| Suroeste (Abajo Izq.) |   |   |
| Sudeste (Abajo Der.) |   |   |

</div>

Comparación de colores y texturas:

Color y textura predominante en el pasado: {% completar "largo" %}

Color y textura predominante en el presente: {% completar "largo" %}

¿Se observan ríos o cursos de agua modificados o secos? (Describir): {% completar "largo" %}
{% endpaso %}

{% paso "📰", "PASO 2: Guía de Lectura Crítica de Prensa Ambiental", "paso-2" %}
**Consigna:** Consulten los 3 artículos breves de noticias seleccionados en la Biblioteca del Explorador (sitio web del proyecto) para buscar datos sobre la región.

{% recursos %}
{% boton "Las 3 noticias en la Biblioteca", "/biblioteca/#prensa" %}
{% endrecursos %}

<div class="noticia">

Noticia 1 (Título / Fuente): {% completar "largo" %}

¿Qué actividad o evento se menciona?: {% completar "largo" %}

¿Qué consecuencia directa sobre la selva se reporta?: {% completar "largo" %}

</div>
<div class="noticia">

Noticia 2 (Título / Fuente): {% completar "largo" %}

¿Qué actividad o evento se menciona?: {% completar "largo" %}

¿Qué consecuencia directa sobre la selva se reporta?: {% completar "largo" %}

</div>
<div class="noticia">

Noticia 3 (Título / Fuente): {% completar "largo" %}

¿Qué actividad o evento se menciona?: {% completar "largo" %}

¿Qué consecuencia directa sobre la selva se reporta?: {% completar "largo" %}

</div>
{% endpaso %}

{% paso "💡", "PASO 3: Formulación y Contrastación de la Hipótesis Inicial", "paso-3" %}
**Consigna:** Integrando lo que observaron en el mapa (Paso 1) y lo que leyeron en las noticias (Paso 2), redacten la explicación inicial de su equipo.

{% caja "hipotesis" %}
**NUESTRA HIPÓTESIS DE EQUIPO:** "Consideramos que el territorio de la Amazonía cambió en estos 10 años debido a {% completar "renglones", 3 %}"
{% endcaja %}

Evidencia Visual (Google Earth): La captura de pantalla N.° {% completar "corto" %} demuestra nuestra hipótesis porque {% completar "renglones", 2 %}

Evidencia de Prensa: El dato de la Noticia N.° {% completar "corto" %} confirma que {% completar "renglones", 2 %}
{% endpaso %}

{% paso "🌦️", "PASO 4: Causa Climática Natural vs. Intervención Humana (El Niño)", "paso-4" %}
**Consigna:** Lean la ficha informativa corta sobre el Fenómeno de El Niño y clasifiquen los siguientes factores marcando con una X:

{% recursos %}
{% boton "Ficha de El Niño en la Biblioteca", "/biblioteca/#fichas" %}
{% endrecursos %}

<div class="tabla-envoltorio">

| Evento o Factor Identificado | Fenómeno Climático Natural | Acción Antrópica Directa (Humana) |
|---|---|---|
| Aumento de sequías e incendios por El Niño | {% casilla %} | {% casilla %} |
| Apertura de carreteras y caminos de tierra | {% casilla %} | {% casilla %} |
| Desmonte de parcelas para ganadería o agricultura | {% casilla %} | {% casilla %} |
| Quemas intencionales para despejar el suelo | {% casilla %} | {% casilla %} |
| Calentamiento de las aguas del Océano Pacífico | {% casilla %} | {% casilla %} |

</div>

Pregunta de reflexión: ¿Por qué es importante diferenciar una sequía natural de la tala e incendio intencional?

Respuesta del equipo: {% completar "renglones", 3 %}
{% endpaso %}

{% paso "📤", "PASO 5: Publicación en la Bitácora Digital (Padlet)", "paso-5" %}
Suban la foto o archivo de esta ficha completa a la columna "Misión 1" del Padlet del curso.

Adjunten la captura de pantalla de Google Earth con las marcas del equipo.

Lean la hipótesis de otro equipo y dejen un comentario constructivo o una pregunta.

{% include "partes/bitacora.njk" %}
{% endpaso %}
