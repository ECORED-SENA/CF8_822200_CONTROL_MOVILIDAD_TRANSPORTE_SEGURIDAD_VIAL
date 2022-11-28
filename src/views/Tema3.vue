<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Características de las heridas
    
    p Las heridas son lesiones producto de un traumatismo en la piel, las cuales pueden presentar diferentes características teniendo en cuenta factores de valoración como:

    .row.mb-5
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema3/img01.svg')
          p.text-center.mb-0 <span style="color:#000">Diámetro</span>
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema3/img02.svg')
          p.text-center.mb-0 <span style="color:#000">Profundidad</span>
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema3/img03.svg')
          p.text-center.mb-0 <span style="color:#000">Bordes</span>
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-xl-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema3/img04.svg')
          p.text-center.mb-0 <span style="color:#000">Ángulos</span>
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema3/img05.svg')
          p.text-center.mb-0 <span style="color:#000">Paredes</span>
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema3/img06.svg')
          p.text-center.mb-0 <span style="color:#000">Fondo</span>
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema3/img07.svg')
          p.text-center.mb-0 <span style="color:#000">Piel circundante</span>
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-xl-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema3/img08.svg')
          p.text-center.mb-0 <span style="color:#000">Compromiso del tejido</span>
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema3/img09.svg')
          p.text-center.mb-0 <span style="color:#000">Coloración de la herida</span>
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema3/img10.svg')
          p.text-center.mb-0 <span style="color:#000">Cantidad de tejido</span>
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema3/img11.svg')
          p.text-center.mb-0 <span style="color:#000">Calidad de la secreción</span>

    p Las heridas se pueden clasificar de acuerdo a las siguientes categorías:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img12.svg')
          .BGR05A.p-3(x="18%" y="19%" numero="+")
            .h5.mb-2 Heridas abiertas
            p.mb-0 Aquellas en las cuales se presenta separación de la piel, en este tipo de heridas se debe tener en cuenta la distancia entre los bordes y su profundidad, pues de esto dependerá la necesidad de sutura.
          .BGR05A.p-3(x="11%" y="55%" numero="+")
            .h5.mb-2 Heridas cerradas
            p.mb-0 En estas no se presenta separación de piel, pero generalmente hay hematoma o evidencias de la lesión. 
          .BGR05A.p-3(x="18%" y="89.3%" numero="+")
            .h5.mb-2 Heridas con laceraciones
            p.mb-0 Estas se producen cuando el tejido o la piel del paciente se rasga, debido a la fuerza que ocasionó la lesión, en estas heridas se presenta abundante sangrado. 
          .BGR05A.p-3(x="83%" y="19%" numero="+")
            .h5.mb-2 Heridas abrasivas
            p.mb-0 Son aquellas que son producidas por fricción con algún elemento que ocasiona abrasiones leves, generalmente de tratamiento en casa. 
          .BGR05A.p-3(x="89%" y="55%" numero="+")
            .h5.mb-2 Heridas avulsivas
            p.mb-0 En este tipo de heridas se separa el tejido del cuerpo y se rasga, de igual manera se presenta un sangrado abundante, uno de los ejemplos más descriptivos son las mordeduras de perro. 
          .BGR05A.p-3(x="83%" y="89.3%" numero="+")
            .h5.mb-2 Heridas amputación
            p.mb-0 Es la pérdida de alguna extremidad del cuerpo, por lo general son las que producen locomoción o movimiento, como lo son manos, brazos, piernas o los pies. 
    
    .cajon-b.color-acento-botones.inv01.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-lg-11
          p.mb-0 Para poder realizar una adecuada caracterización de las heridas es importante tener en cuenta que pueden clasificarse según el espesor de los tejidos afectados, según la dirección, según la forma, según los agentes que la provocan y según su grado de contaminación; de acuerdo a lo anterior, a continuación, se realizará la descripción de las clasificaciones mencionadas.
        .col-lg-1.col-2.p-3.d-none.d-lg-flex
          img(src="@/assets/curso/tema3/img13.svg")
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Heridas según el espesor de los tejidos afectados

    p En el momento de evaluar el espesor de una herida se deben tener en cuenta las siguientes características:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .BGR05B.p-4
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/tema3/img14.png' alt='AvatarTop')
          .h4.text-center Rasguños
          p.text-center.mb-0 Herida de aspecto epidérmico.
        .BGR05B.p-4
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/tema3/img15.png' alt='AvatarTop')
          .h4.text-center Con erosión
          p.text-center.mb-0 Herida con pérdida o no de sustancia de la epidermis.
        .BGR05B.p-4
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/tema3/img16.png' alt='AvatarTop')
          .h4.text-center Superficial
          p.text-center.mb-0 Herida con ausencia de penetración en la cavidad o afectación únicamente en tejido subcutáneo.
        .BGR05B.p-4
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/tema3/img17.png' alt='AvatarTop')
          .h4.text-center Profunda
          p.text-center.mb-0 Herida penetrante que pueda afectar las cavidades torácicas, cervicales, articulaciones, etc.
        .BGR05B.p-4
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/tema3/img18.png' alt='AvatarTop')
          .h4.text-center Perforante
          p.text-center.mb-0 Herida que pueda penetrar cavidades provocando lesiones en vísceras huecas.

    p En adición, es necesario mencionar otros tipos de categorías y sus correspondientes características para que al observarlas pueda reconocerlas, por lo que le invito a revisar el siguiente contenido:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-12.d-none.d-lg-flex
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img19.svg')
          .BGR07.p-3(x="26.8%" y="39.8%" numero="+")
            .h5.mb-2 Heridas según el agente que las provocan
            p.mb-0 Dentro de las mismas se evalúa si son contusas o incisas, si son cortantes o punzantes, si tienen atrición o abrasión, si presentan colgajos, arrancamiento o si son heridas por quemaduras.
          .BGR07.p-3(x="32.8%" y="60.3%" numero="+")
            .h5.mb-2 Heridas según la forma
            p.mb-0 En este tipo de heridas se evalúa si son: simples o angulares, si la herida presenta colgajos o si son arqueadas o angulares, si son estrelladas, punzantes o con aspecto crateriforme.
          .BGR07.p-3(x="96.5%" y="23.7%" numero="+")
            .h5.mb-2 Heridas según su grado de contaminación
            p En estas heridas se evalúa:
            ul.lista-ul--color
              li
                <i class="fas fa-circle" style="color:#000; font-size: x-small"></i> 
                | Si son limpias con mínimo daño en los tejidos orgánicos.
              li
                <i class="fas fa-circle" style="color:#000; font-size: x-small"></i> 
                | Sucias con mayor daño y penetración en los tejidos orgánicos.  
          .BGR07.p-3(x="96.8%" y="79.5%" numero="+")
            .h5.mb-2 Heridas según la dirección
            p.mb-0 En el momento de valorar las heridas según su dirección es indispensable tener en cuenta los siguientes aspectos: la longitud, si está en forma transversal, si tiene dirección oblicua o por el contrario está en forma espiroidea.
      .col-12.d-lg-none.d-flex
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img20.svg')
          .BGR07.p-3(x="6%" y="19%" numero="+")
            .h5.mb-2 Heridas según el agente que las provocan
            p.mb-0 Dentro de las mismas se evalúa si son contusas o incisas, si son cortantes o punzantes, si tienen atrición o abrasión, si presentan colgajos, arrancamiento o si son heridas por quemaduras.
          .BGR07.p-3(x="5%" y="90.5%" numero="+")
            .h5.mb-2 Heridas según la forma
            p.mb-0 En este tipo de heridas se evalúa si son: simples o angulares, si la herida presenta colgajos o si son arqueadas o angulares, si son estrelladas, punzantes o con aspecto crateriforme.
          .BGR07.p-3(x="94%" y="28%" numero="+")
            .h5.mb-2 Heridas según su grado de contaminación
            p En estas heridas se evalúa:
            ul.lista-ul--color
              li
                <i class="fas fa-circle" style="color:#000; font-size: x-small"></i> 
                | Si son limpias con mínimo daño en los tejidos orgánicos.
              li
                <i class="fas fa-circle" style="color:#000; font-size: x-small"></i> 
                | Sucias con mayor daño y penetración en los tejidos orgánicos.  
          .BGR07.p-3(x="91.5%" y="73%" numero="+")
            .h5.mb-2 Heridas según la dirección
            p.mb-0 En el momento de valorar las heridas según su dirección es indispensable tener en cuenta los siguientes aspectos: la longitud, si está en forma transversal, si tiene dirección oblicua o por el contrario está en forma espiroidea.

</template>

<script>
export default {
  name: 'Tema3',
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
