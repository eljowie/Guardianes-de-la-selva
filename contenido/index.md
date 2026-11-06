---
layout: base.njk
descripcion: Una expedición por la Amazonía
---

<p class="aviso">Página de prueba del proyecto base. La portada definitiva llega en la Fase 1.</p>

# {{ sitio.titulo }}

<p class="subtitulo">{{ sitio.subtitulo }}</p>

<blockquote class="pregunta-esencial">
  <p>¿Qué sucedió para que la Amazonía se vea así en la actualidad, qué intereses económicos y sociales están en juego, y qué estrategias fundamentadas podemos proponer para protegerla?</p>
</blockquote>

{% if enlaces.videoBase %}
<p><a href="{{ enlaces.videoBase }}">Video base</a></p>
{% else %}
<p class="pendiente">Video base: enlace pendiente.</p>
{% endif %}
