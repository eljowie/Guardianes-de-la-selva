---
layout: base.njk
descripcion: "Una expedición por la Amazonía para 6.º grado: cuatro misiones para investigar qué le pasó a la selva."
clase: portada
---

<section class="bienvenida" aria-labelledby="titulo-sitio">
<div class="bienvenida__texto">
<p class="bienvenida__sello">Expedición · 6.º grado</p>
<h1 id="titulo-sitio">{{ sitio.titulo }}</h1>
<p class="subtitulo">{{ sitio.subtitulo }}</p>

{% mensajeLia "Bienvenida" %}
«Soy Lía, guardaparque de la reserva. Nos llegó un archivo urgente: dos imágenes satelitales del mismo lugar, tomadas con diez años de diferencia. Necesito exploradores. ¿Se animan?»

<p class="borrador">Texto provisorio: lo confirma el grupo.</p>
{% endmensajeLia %}
</div>

<div class="pregunta-esencial">
<p class="pregunta-esencial__rotulo">Pregunta esencial</p>
<p class="pregunta-esencial__texto">¿Qué sucedió para que la Amazonía se vea así en la actualidad, qué intereses económicos y sociales están en juego, y qué estrategias fundamentadas podemos proponer para protegerla?</p>
</div>
</section>

<section class="mapa" id="mapa" aria-labelledby="titulo-mapa">
<h2 id="titulo-mapa">Mapa de la expedición</h2>
<p class="mapa__ayuda">Elijan una zona para entrar a su misión. Hay un orden sugerido, del 1 al 4, pero pueden empezar por cualquiera.</p>

{% include "partes/mapa.njk" %}

<ol class="tarjetas-misiones">
{%- for m in misiones %}
<li class="tarjeta-mision tarjeta-mision--{{ m.numero }}">
<a href="{{ m.url }}">
<span class="tarjeta-mision__numero">Misión {{ m.numero }}</span>
<span class="tarjeta-mision__titulo">{{ m.titulo }}</span>
<span class="tarjeta-mision__enfoque">{{ m.enfoque }}</span>
</a>
</li>
{%- endfor %}
</ol>
</section>

<section class="informe" id="informe" aria-labelledby="titulo-informe">
<h2 id="titulo-informe">Mirá el informe de alerta</h2>
<p>Video base: «¡La Maravillosa Selva del Amazonas!», del canal «Videos Educativos para Escuela Primaria».</p>
{%- set idVideo = enlaces.videoBase | youtubeId %}
{% if idVideo %}
<div class="video">
<iframe src="https://www.youtube-nocookie.com/embed/{{ idVideo }}" title="Video base: ¡La Maravillosa Selva del Amazonas!" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
{% else %}
<div class="video video--pendiente" role="note"><p>Video pendiente: el grupo todavía no cargó el enlace de YouTube.</p></div>
{% endif %}
</section>

<section class="accesos" aria-labelledby="titulo-accesos">
<h2 id="titulo-accesos" class="sr">Más secciones</h2>
<div class="accesos__grilla">
<div class="acceso">
<h3>Biblioteca del Explorador</h3>
<p>Prensa, especies, mapas, podcast, ONG y pueblos originarios.</p>
{% boton "Entrar a la Biblioteca", "/biblioteca/" %}
</div>
<div class="acceso">
<h3>Bitácora</h3>
<p>El muro donde cada equipo publica sus fichas.</p>
{% boton "Entrar a la Bitácora", "/bitacora/" %}
</div>
</div>
</section>
