<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Signos vitales
    
    p Los signos vitales son un conjunto de indicadores fisiológicos que reflejan el estado de salud de una persona, ya que son funciones esenciales del ser humano como son:

    .row.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.mb-3
            .col-xl-5.col-lg-7.col-md-5.col-6
              img(src='@/assets/curso/tema5/img01.png')
          .h5.mb-0 <span style="color:#000">La frecuencia cardíaca</span>
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.mb-3
            .col-xl-5.col-lg-7.col-md-5.col-6
              img(src='@/assets/curso/tema5/img02.png')
          .h5.mb-0 <span style="color:#000">La respiración</span>
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.mb-3
            .col-xl-5.col-lg-7.col-md-5.col-6
              img(src='@/assets/curso/tema5/img03.png')
          .h5.mb-0 <span style="color:#000">La presión arterial</span>
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.mb-3
            .col-xl-5.col-lg-7.col-md-5.col-6
              img(src='@/assets/curso/tema5/img04.png')
          .h5.mb-0 <span style="color:#000">El reflejo pupilar </span>

    p Previ amente a brindar los primeros auxilios se deben revisar y controlar los signos vitales del lesionado, ya que deberá comunicar esta información a los profesionales de la salud que lleguen a atender la emergencia.
    p.mb-5 A continuación, se indica cómo se deben tomar los signos anteriormente mencionados:

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Frecuencia cardiaca o pulso
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema5/img05.png")
      .col-lg-7(data-aos="fade-left")
        p <span style="background-color:#FFF6E9; padding: 2px">#[b Es la velocidad a la que late el corazón],</span> cuando:
        ul.lista-ul--color
          li
            <i class="fas fa-check" style="color:#FD9827"></i>
            | Late rápidamente produce taquicardia.
          li
            <i class="fas fa-check" style="color:#FD9827"></i>
            | Cuando late lentamente se genera una bradicardia.
          li
            <i class="fas fa-check" style="color:#FD9827"></i>
            | Simplemente puede latir de manera irregular, estos cambios en la frecuencia de los latidos pueden generar una arritmia cardiaca.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-left")
        p Para tomar el pulso usted debe colocar las puntas de sus dedos índice y medio en la parte interna de la muñeca del lesionado, por debajo de la base del pulgar, allí se presiona ligeramente, en adición debe hacer uso de un reloj que le permita contar los latidos durante espacio de un minuto. 
        p El pulso puede ser tomado en diferentes zonas del cuerpo como lo son: el cuello, la ingle, la sien, la parte posterior de las rodillas y la muñeca, ésta última,  con frecuencia es la más usada, ya que es un área del cuerpo de fácil y rápido acceso.
        p.mb-0 En la siguiente tabla se muestra la frecuencia cardiaca según la edad, en personas sanas y en estado de reposo, esta referencia le servirá para saber sí el corazón de la víctima está trabajando a ritmo normal.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema5/img06.png")

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 2
          span Frecuencia Cardiaca según la edad
        .tabla-a.color-secundario
          table
            caption Nota. Construcción propia, Frecuencia Cardiaca según edad.
            thead
              tr
                th(style="background-color: #FFF5C5;").text-center EDAD
                th(style="background-color: #FFF5C5;").text-center FRECUENCIA CARDIACA
            tbody
              tr
                td Recién nacido
                td 80 - 160 latidos por minuto (lpm)
              tr
                td Lactante Menor (de 1 a 12 meses)
                td 80 - 130 latidos por minuto (lpm)
              tr
                td Lactante Mayor (de 12 a 24 meses)
                td 110 - 130 latidos por minuto (lpm)
              tr
                td Niños entre 3 y 6 años
                td 80 - 120 latidos por minuto (lpm)
              tr
                td Niños entre 7 y 10 años
                td 70 - 110 latidos por minuto (lpm)
              tr
                td Adultos
                td 60 - 100 latidos por minuto (lpm)

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Respiración
    
    .cajon-b.color-acento-botones.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-lg-1.col-2.p-3
          img(src="@/assets/curso/tema5/img07.svg")
        .col-lg-11
          p.mb-0 Es un proceso metabólico de intercambio de gases, donde se recibe oxígeno del ambiente liberando dióxido de carbono al medio externo, este proceso tiene lugar en el interior de los pulmones, debido a que el tórax y las costillas hacen parte de este proceso es muy importante revisar y controlar este signo vital en caso de sufrir lesiones en estas áreas del cuerpo.
    
    p Con respecto a este signo vital, se debe revisar:

    .row.justify-content-center.mb-5
      .col-xl-5.col-lg-6.col-10.mb-lg-0.mb-4
        figure
          img(src="@/assets/curso/tema5/img08.jpg")
        .BG08.p-4
          p.text-white.mb-0 Que la zona del tórax del lesionado sube y baja como producto de la respiración.
      .col-xl-5.col-lg-6.col-10.mb-lg-0.mb-4
        figure
          img(src="@/assets/curso/tema5/img09.jpg")
        .BG09.p-4
          p.mb-0 Otra opción es acercar nuestra oreja a la boca y nariz del herido y comprobar que efectivamente está respirando.

    p Si se presenta una respiración por encima o por debajo de los siguientes rangos significa que hay algo anormal y se requerirá de una evolución médica. 
    p En la tabla se puede observar la frecuencia respiratoria según la edad en personas sanas y en reposo.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 3
          span Frecuencia Respiratoria
        .tabla-a.color-secundario
          table
            thead
              tr
                th(style="background-color: #FFF5C5;").text-center EDAD
                th(style="background-color: #FFF5C5;").text-center FRECUENCIA RESPIRATORIA
            tbody
              tr
                td Recién nacido hasta un año
                td 30 - 60 respiraciones por minuto (rpm)
              tr
                td Niños entre 1 y 3 años
                td 25 - 40 respiraciones por minuto (rpm)
              tr
                td Niños entre 3 y 6 años
                td 22 - 34 respiraciones por minuto (rpm)
              tr
                td Niños entre 6 a 12 años
                td 18 - 30 respiraciones por minuto (rpm)
              tr
                td Adolescentes entre 12 - 18 años
                td 12 - 16 respiraciones por minuto (rpm)
              tr
                td Adultos
                td 12 - 18 respiraciones por minuto (rpm)
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Temperatura

    p Indica que tan caliente está el cuerpo, se mide con un termómetro. Los puntos corporales donde se puede tomar la temperatura son:

    .row.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.mb-3
            .col-xl-5.col-lg-7.col-md-5.col-6
              img(src='@/assets/curso/tema5/img10.png')
          .h5.mb-0 <span style="color:#000">Boca</span>
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.mb-3
            .col-xl-5.col-lg-7.col-md-5.col-6
              img(src='@/assets/curso/tema5/img11.png')
          .h5.mb-0 <span style="color:#000">Nariz</span>
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.mb-3
            .col-xl-5.col-lg-7.col-md-5.col-6
              img(src='@/assets/curso/tema5/img12.png')
          .h5.mb-0 <span style="color:#000">Axila</span>
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.mb-3
            .col-xl-5.col-lg-7.col-md-5.col-6
              img(src='@/assets/curso/tema5/img13.png')
          .h5.mb-0 <span style="color:#000">Recto</span>

    p.mb-5 La temperatura varía dependiendo de la edad y el sexo de la persona, pero el rango debe estar entre los 36.5° y 37.2°, con un promedio de 37°, una temperatura por encima de este valor puede significar que hay fiebre y una temperatura desciende por debajo de los 35° recibe el nombre de hipotermia.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Presión arterial
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema5/img14.png")
      .col-lg-8(data-aos="fade-left")
        p Esta indica la fuerza de la sangre al empujar contra las paredes de los vasos sanguíneos, al tomar este signo irá acompañado de 2 números, el primero corresponde a la presión cuando el corazón late al bombear la sangre, y recibe el nombre de presión sistólica y cuando el corazón se relaja y se llena de sangre entre los latidos la presión arterial baja, recibe el nombre de presión diastólica.
        .BGR03(data-aos="flip-up")
          .row.align-items-center
            .col-lg-2.col-3.p-lg-0.p-3
              img(src="@/assets/curso/temas/img02.svg")
            .col-lg.p-lg-4.p-5
              .h4 ¡Importante!
              p Generalmente el tensiómetro (aparato que mide la presión arterial) muestra primero la presión sistólica (número mayor) y luego la presión diastólica (número menor), así: #[b 90/60], lo cual quiere decir:
              p Que la #[b presión sistólica] es de 90 y la #[b presión diastólica] es de 60.
              p.mb-0 Una presión arterial mayor a estos rangos puede generar factores de riesgo y por eso es importante consultar al profesional de la salud.

    p.mb-5 Si se dispone del equipo para tomar la tensión arterial, se debe anotar la tensión del lesionado y hacer tres tomas para verificar los valores. El rango normal es 90/60 mm Hg hasta 120/80 mm Hg (milímetros de mercurio).

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Reflejo pupilar
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2
        p Es la respuesta de la pupila a la estimulación de la luz, estos reflejos reciben el nombre de miosis, que se presenta cuando la estructura ocular recibe mucha luz, produciendo la contracción de la pupila y disminuyendo su diámetro. El otro reflejo que se presenta es cuando el ojo está en un lugar oscuro, entonces la pupila se dilata para intensificar la agudeza visual.
        .BGR03(data-aos="flip-up")
          .row.align-items-center
            .col-lg-2.col-3.p-lg-0.p-3
              img(src="@/assets/curso/temas/img02.svg")
            .col-lg.p-lg-4.p-5
              .h4 ¡Importante!
              p Si las pupilas están muy dilatadas el lesionado puede estar presentando #[em shock] o una hemorragia severa y si las pupilas no están de igual tamaño puede indicar una parálisis o una herida en la cabeza.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema5/img15.png")

    p.mb-5 En cuanto al reflejo pupilar, se debe revisar si la pupila está dilatada o contraída, se puede presentar también que carece de reflejo fotomotor (contracción de la pupila a la estimulación de la luz). Por lo que el ojo puede ser alumbrado con el haz de luz de una linterna para observar cómo se contrae la pupila, si no se cuenta en el lugar con dicho elemento puede subir el párpado superior y observar la reacción.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.tarjeta.color-primario.p-4
        .row.justify-content-center.align-items-center
          .col-lg-1.col-2
            img(src="@/assets/curso/temas/img01.svg")
          .col-lg-11.col-10
            .row.justify-content-around.row.align-items-center
              .col-lg-9.col-8
                .h4 Primeros Auxilios en Accidentes de Tránsito
                p.mb-0 Primeros auxilios en un accidente de tránsito 
              .col-lg-3.col-4
                a.boton.color-acento-botones.me-4(href="https://www.youtube.com/embed/T8mBPOxcQrc" target="_blank")
                  span Ver video
                  i.fab.fa-youtube

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
