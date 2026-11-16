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
**Consigna:** Abran la línea de tiempo en Google Earth en la coordenada asignada por el docente. Observen primero la imagen de hace 10 años y luego la imagen actual. Dividan la imagen mentalmente en 4 {% g "cuadrantes" %} para no pasar nada por alto.

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

Grilla de Evidencias Visuales: Registren qué elementos del paisaje observan en cada imagen.

<div class="tabla-envoltorio">

| Cuadrante | ¿Qué elementos o vegetación había HACE 10 AÑOS? | ¿Qué elementos NUEVOS o cambios aparecen HOY? |
|---|---|---|
| Noroeste (Arriba Izq.) |   |   |
| Noreste (Arriba Der.) |   |   |
| Suroeste (Abajo Izq.) |   |   |
| Sudeste (Abajo Der.) |   |   |

</div>

Comparación de colores y texturas:

Color y textura predominante en el pasado: {% completar "largo" %}

Color y textura predominante en el presente: {% completar "largo" %}

¿Qué cambios observan en los ríos o cursos de agua? Descríbanlos.

Respuesta: {% completar "renglones", 2 %}

¿Qué relaciones encuentran entre los cambios que observaron en las imágenes? ¿Cuáles creen que podrían estar relacionados entre sí y por qué?

Respuesta: {% completar "renglones", 4 %}
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

Evidencia Visual (Google Earth): La captura de pantalla N.° {% completar "corto" %} apoya o pone en duda nuestra {% g "hipótesis" %} porque {% completar "renglones", 2 %}

Evidencia de Prensa: El dato de la Noticia N.° {% completar "corto" %} apoya o pone en duda nuestra hipótesis porque {% completar "renglones", 2 %}

Después de observar las imágenes y consultar las noticias, ¿mantienen la hipótesis inicial o cambiarían alguna parte? ¿Qué información nueva los llevó a confirmarla o modificarla?

Respuesta: {% completar "renglones", 4 %}
{% endpaso %}

{% paso "🌦️", "PASO 4: Causa Climática Natural vs. Intervención Humana (El Niño)", "paso-4" %}
**Consigna:** Lean la ficha informativa corta sobre el Fenómeno de El Niño y clasifiquen los siguientes factores marcando con una X:

{% recursos %}
{% boton "Ficha de El Niño en la Biblioteca", "/biblioteca/#fichas" %}
{% endrecursos %}

<div class="tabla-envoltorio">

| Evento o Factor Identificado | Fenómeno Climático Natural | Acción {% g "antrópica", "Antrópica" %} Directa (Humana) | ¿En qué {% g "evidencia" %} se basan? |
|---|---|---|---|
| Aumento de sequías e incendios | {% casilla %} | {% casilla %} |   |
| Apertura de carreteras y caminos de tierra | {% casilla %} | {% casilla %} |   |
| Desmonte de parcelas para ganadería o agricultura | {% casilla %} | {% casilla %} |   |
| Quemas intencionales para despejar el suelo | {% casilla %} | {% casilla %} |   |
| Calentamiento de las aguas del Océano Pacífico | {% casilla %} | {% casilla %} |   |

</div>

Pregunta de reflexión: ¿Qué diferencias encuentran entre una sequía relacionada con El Niño y las acciones humanas que transforman la selva? ¿De qué manera pueden influir ambas situaciones, por separado o combinadas, en la aparición y propagación de incendios?

Respuesta del equipo: {% completar "renglones", 4 %}
{% endpaso %}

{% include "partes/antes-ahora.njk" %}

{% paso "📤", "PASO 5: Publicación en la Bitácora Digital (Padlet)", "paso-5" %}
Suban la foto o archivo de esta ficha completa a la columna "Misión 1" del Padlet del curso.

Adjunten la captura de pantalla de Google Earth con las marcas del equipo.

Lean la hipótesis de otro equipo y dejen un comentario constructivo o una pregunta.

{% include "partes/bitacora.njk" %}
{% endpaso %}
