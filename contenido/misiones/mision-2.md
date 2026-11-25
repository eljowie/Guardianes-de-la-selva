---
numero: 2
title: "Misión 2: Las huellas humanas"
descripcion: "Investigar las actividades humanas que transforman la selva y debatir sus dos caras."
proyecto: "Guardianes de la Selva"
---

{% mensajeLia %}
"¡Atención, equipo! Han avanzado hacia el corazón de la reserva y han comenzado a encontrar 'huellas' muy concretas: parcelas totalmente despejadas, troncos apilados, caminos de tierra abiertos entre los árboles y columnas de humo en el horizonte.

Para entender la crisis amazónica, no alcanza con saber qué cambia; necesitamos averiguar quiénes están detrás de estos cambios, por qué realizan estas actividades y qué debates existen entre las necesidades humanas y la conservación de la naturaleza. ¡A investigar!"
{% endmensajeLia %}

{% include "partes/antes-pensaba.njk" %}

<section class="disparadoras" aria-labelledby="disparadoras-titulo">
<h2 id="disparadoras-titulo"><span aria-hidden="true">❓</span> Preguntas disparadoras</h2>

¿Qué actividades humanas reconocen a partir de cada huella?

Respuesta: {% completar "renglones", 3 %}

¿Quiénes participan de esta actividad? ¿Qué obtiene cada uno y qué otros grupos se ven afectados?

Respuesta: {% completar "renglones", 3 %}

</section>

{% paso "📌", "PASO 1: Asignación e Investigación de la \"Huella\"", "paso-1" %}
**Consigna:** Cada equipo investigará una actividad humana específica. Marquen con una X la huella asignada a su grupo y consulten el material disponible en la Biblioteca del Explorador de nuestra página web:

<ul class="huellas">
<li class="huella huella--a">{% casilla %} <span class="huella__texto"><strong>Huella A:</strong> Expansión Agropecuaria (Ganadería y cultivo de soja)</span> <span class="no-imprimir">{% boton "Material en la Biblioteca", "/biblioteca/#huella-a", "chico" %}</span></li>
<li class="huella huella--b">{% casilla %} <span class="huella__texto"><strong>Huella B:</strong> Minería a gran escala y Minería Ilegal ({% g "garimpo", "Garimpo" %})</span> <span class="no-imprimir">{% boton "Material en la Biblioteca", "/biblioteca/#huella-b", "chico" %}</span></li>
<li class="huella huella--c">{% casilla %} <span class="huella__texto"><strong>Huella C:</strong> Tala de Madera y Extracción Forestal</span> <span class="no-imprimir">{% boton "Material en la Biblioteca", "/biblioteca/#huella-c", "chico" %}</span></li>
<li class="huella huella--d">{% casilla %} <span class="huella__texto"><strong>Huella D:</strong> Incendios Intencionales para cambio de uso del suelo</span> <span class="no-imprimir">{% boton "Material en la Biblioteca", "/biblioteca/#huella-d", "chico" %}</span></li>
</ul>
{% endpaso %}

{% paso "📊", "PASO 2: Matriz Causa - Actor - Consecuencia", "paso-2" %}
**Consigna:** A partir de los textos e infografías de la Biblioteca del Explorador, completen la siguiente matriz analizando los elementos clave de la actividad asignada:

{% recursos %}
{% boton "Noticia BBC: las principales amenazas para la selva", "/biblioteca/#noticia-2" %}
{% boton "Material de cada huella", "/biblioteca/#huellas" %}
{% endrecursos %}

<div class="tabla-envoltorio">

| Pregunta Guía | Registro de Investigación del Equipo |
|---|---|
| 1. Actividad: ¿En qué consiste exactamente esta huella o intervención? |   |
| 2. {% g "actores", "Actores" %}: ¿Quiénes participan de esta actividad? ¿Qué obtiene cada uno y qué otros grupos se ven afectados? |   |
| 3. Productos y Destino: ¿Qué recursos se obtienen y a qué mercados o industrias abastecen? |   |
| 4. Impacto ambiental: ¿Qué consecuencias ambientales genera esta actividad? ¿Cuáles pueden observarse a corto plazo y cuáles podrían aparecer después de varios años? |   |

</div>
{% endpaso %}

{% paso "⚖️", "PASO 3: Análisis Polifónico – \"Cara A y Cara B\"", "paso-3" %}
Reflexión del equipo: En los problemas ambientales reales rara vez hay villanos de película; existen intereses, necesidades humanas y dilemas complejos. Vamos a analizar ambas caras de la moneda para comprender la postura de los distintos actores.

{% caja "orientacion" %}
<p class="caja__rotulo">Cómo se reparten el trabajo</p>

Dentro del equipo, una pareja responde la Cara A y otra pareja la Cara B. Después, cada pareja le explica a la otra lo que respondió. El dilema lo resuelven todos juntos.
{% endcaja %}
<div class="caras">

{% caja "cara-a" %}
<p class="caja__pareja">Pareja 1</p>
<h3><span aria-hidden="true">🟢</span> CARA A: La perspectiva socioeconómica (Necesidades y Desarrollo)</h3>

Integrantes de la pareja: {% completar "largo" %}

1\. Si tuvieran que establecer un orden de prioridad entre el beneficio económico, la generación de empleo y la satisfacción de necesidades básicas, ¿cuál dirían que es el motor principal de esta actividad y por qué?

Respuesta: {% completar "renglones", 4 %}

2\. ¿Qué relación encuentran entre los recursos que extrae o genera esta producción y las necesidades de la vida urbana actual?

Respuesta: {% completar "renglones", 4 %}

3\. Frente a la necesidad de obtener estos productos de uso diario y generar empleo, ¿qué criterios debería priorizar la sociedad para decidir hasta qué punto y de qué manera desarrollar esta actividad?

Respuesta: {% completar "renglones", 4 %}
{% endcaja %}

{% caja "cara-b" %}
<p class="caja__pareja">Pareja 2</p>
<h3><span aria-hidden="true">🔴</span> CARA B: La perspectiva ecológica (Costos Ambientales)</h3>

Integrantes de la pareja: {% completar "largo" %}

1\. Si analizamos el funcionamiento de la selva como un sistema, ¿qué cambios concretos se producen en el suelo, el agua y la {% g "biodiversidad" %} al inicio de esta actividad y cuáles aparecen recién décadas después?

Respuesta: {% completar "renglones", 4 %}

2\. ¿Qué relaciones de causa y consecuencia pueden establecer entre la intensidad con la que se realiza esta actividad y la capacidad de recuperación natural del {% g "ecosistema" %}?

Respuesta: {% completar "renglones", 4 %}

3\. ¿A partir de qué {% g "indicadores" %} o señales ambientales considerarían que esta actividad superó el límite de lo {% g "sostenible" %} en la selva? ¿Qué criterios deberían definir esos límites?

Respuesta: {% completar "renglones", 4 %}

4\. Frente a los costos ambientales detectados, ¿qué alternativas de {% g "regulación" %} o manejo creen que serían más eficaces para equilibrar la producción y la conservación del ecosistema?

Respuesta: {% completar "renglones", 4 %}
{% endcaja %}

</div>

{% caja "dilema" %}
<h3><span aria-hidden="true">🤝</span> EL DILEMA DEL EQUIPO:</h3>

A partir de lo que analizaron en la Cara A y la Cara B, ¿qué cambios o medidas concretas propondrían para que esta actividad reduzca su impacto ambiental sin dejar de considerar las necesidades de las personas? Justifiquen con lo que investigaron.

Conclusión de nuestro grupo: {% completar "renglones", 4 %}
{% endcaja %}
{% endpaso %}

{% paso "🔍", "PASO 4: Claridad Conceptual (Legal vs. Ilegal vs. Indiscriminado)", "paso-4" %}
**Consigna:** Relacionen con flechas o definan con sus palabras las diferencias entre estos tres conceptos:

Actividad Legal / Regulada: {% completar "renglones", 2 %}

Actividad Ilegal: {% completar "renglones", 2 %}

Explotación Indiscriminada: {% completar "renglones", 2 %}
{% endpaso %}

{% include "partes/antes-ahora.njk" %}

{% paso "📤", "PASO 5: Entrega y Cierre en la Bitácora (Padlet)", "paso-5" %}
Suban una foto o archivo de esta matriz completa a la columna "Misión 2" del Padlet del curso.

Publiquen una breve frase que sintetice la conclusión de su equipo sobre el debate "Cara A y Cara B".

Lean la matriz de otro equipo que haya investigado una huella diferente y dejen un comentario comparando ambos impactos.

{% include "partes/bitacora.njk" %}
{% endpaso %}
