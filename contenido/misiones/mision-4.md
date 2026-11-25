---
numero: 4
title: "Misión 4: Guardianes en acción"
descripcion: "Investigar organizaciones reales, debatir sobre la tecnología y escribir un Plan de Rescate."
proyecto: "Guardianes de la Selva"
---

{% mensajeLia %}
"¡Felicitaciones, exploradores! Han completado la fase de investigación de campo. Ahora que comprenden cómo cambia el territorio, quiénes intervienen y cómo la deforestación afecta la biodiversidad y el clima, es momento de actuar.

En la selva no estamos solos: existen científicos, organizaciones no gubernamentales (ONGs) y comunidades originarias que trabajan todos los días para proteger el territorio. Su última misión es investigar su trabajo, reflexionar sobre el uso de la tecnología y redactar un Plan de Rescate Ambiental para compartir con otros estudiantes."
{% endmensajeLia %}

{% include "partes/antes-pensaba.njk" %}

{% paso "🌐", "PASO 1: Rastreo de Organizaciones y Pueblos Originarios Reales", "paso-1" %}
**Consigna:** Abran la sección Biblioteca del Explorador en nuestra página web y elijan una de las organizaciones reales que trabajan en la Cuenca Amazónica (ejemplo: COICA, RAISG, WWF o Greenpeace).

{% set ids = ["ong-coica", "ong-raisg", "ong-wwf", "ong-greenpeace", "ong-vidasilvestre"] %}{% set tituloVisual = "Elijan una organización y toquen su logo" %}
{% include "partes/recursos-visuales.njk" %}

Organización seleccionada: {% completar "largo" %}

Página web o red consultada: {% completar "largo" %}

Ficha Técnica de Investigación:

¿Quiénes son y a quiénes representan?:

Respuesta: {% completar "renglones", 2 %}

Acciones concretas: ¿Qué acciones concretas realiza esta organización o pueblo?

Respuesta: {% completar "renglones", 3 %}

Preguntas de entrevista: Si pudieran hablar con un integrante de esta organización, ¿qué 3 preguntas le harían?

Pregunta 1: {% completar "largo" %}

Pregunta 2: {% completar "largo" %}

Pregunta 3: {% completar "largo" %}
{% endpaso %}

{% paso "🤖", "PASO 2: Debate sobre el Eje Sociotécnico (La tecnología que daña vs. la que cuida)", "paso-2" %}
**Consigna:** En la expedición hemos visto que la tecnología cumple un doble rol en la Amazonia. Analicen la siguiente contradicción y respondan en equipo:

<div class="caras">

{% caja "cara-b" %}
**Tecnología de transformación/destrucción:** Maquinaria pesada, motosierras industriales, vías de transporte.
{% endcaja %}

{% caja "cara-a" %}
**Tecnología de monitoreo/protección:** Satélites (Google Earth), GPS, drones de vigilancia, datos abiertos, redes digitales.
{% endcaja %}

</div>

1. ¿La tecnología es buena o mala en sí misma, o depende de quién y para qué se utilice?

Respuesta: {% completar "renglones", 3 %}

2. ¿Qué diferencias encuentran entre las tecnologías que se utilizan para transformar la selva y las que permiten monitorearla y protegerla?

Respuesta: {% completar "renglones", 3 %}

3. ¿Qué ejemplos de la investigación permiten fundamentar su respuesta?

Respuesta: {% completar "renglones", 3 %}
{% endpaso %}

{% paso "✉️", "PASO 3: Carta - Plan de Rescate Ambiental (Producción Integradora)", "paso-3" %}
**Consigna:** Redacten una carta colaborativa dirigida a estudiantes de 6.° grado de otra escuela o curso para explicarles la situación de la Amazonia y proponerles sumarse como Guardianes.

{% caja "orientacion" %}
<p class="caja__rotulo">Antes de escribir la carta</p>

Teniendo en cuenta lo que investigaron en las misiones anteriores, ¿qué problema consideran más urgente de resolver y por qué? ¿Qué información o evidencia de su investigación respalda esa decisión?

Respuesta: {% completar "renglones", 4 %}

En cada propuesta, expliquen qué acción llevarían adelante, quiénes deberían participar y qué cambio esperan conseguir.
{% endcaja %}

{% caja "carta" %}
<h3>CARTA A LOS FUTUROS GUARDIANES</h3>

Queridos/as compañeros/as:

{% completar "renglones", 8 %}

Para proteger la selva y cuidar el clima del planeta, proponemos el siguiente Plan de Acción:

Propuesta de conservación a gran escala: {% completar "renglones", 4 %}

Compromiso cívico y cotidiano desde nuestra escuela/hogar: {% completar "renglones", 4 %}

Mensaje final de compromiso: {% completar "renglones", 2 %}

Firma del equipo de Guardianes: {% completar "largo" %}
{% endcaja %}
{% endpaso %}

{% paso "🇦🇷", "PASO 4: Transferencia Local (Del Amazonas a nuestro territorio)", "paso-4" %}
**Consigna:** Lo que aprendimos sobre la deforestación no ocurre solo lejos en la selva tropical. Investiguen brevemente una problemática ambiental cercana en Argentina (como la deforestación en el Gran Chaco, las Yungas o los incendios en humedales).

Territorio argentino seleccionado: {% completar "largo" %}

¿Qué similitudes y diferencias encuentran entre las transformaciones ambientales de la Amazonia y las del territorio argentino que investigaron? ¿Qué causas y consecuencias comparten y cuáles son diferentes?

Respuesta: {% completar "renglones", 4 %}

¿Consideran que las estrategias de {% g "conservación" %} podrían ser las mismas en ambos territorios o deberían adaptarse a las características de cada lugar? ¿Por qué?

Respuesta: {% completar "renglones", 4 %}
{% endpaso %}

{% include "partes/antes-ahora.njk" %}

{% paso "📤", "PASO 5: Cierre Final del Proyecto en la Web y Padlet", "paso-5" %}
Publiquen la versión final de su Carta - Plan de Rescate en la columna "Misión 4" del Padlet.

Lean las cartas de los otros equipos en la web del proyecto y voten/comenten la propuesta que les parezca más innovadora.

{% include "partes/bitacora.njk" %}

<p class="final"><span aria-hidden="true">🏅</span> ¡Felicidades! Han completado la expedición y recibido sus credenciales virtuales de Guardianes de la Selva.</p>

<div class="no-imprimir">{% boton "Obtener la credencial de Guardianes", "/credencial/", "acento" %}</div>
{% endpaso %}
