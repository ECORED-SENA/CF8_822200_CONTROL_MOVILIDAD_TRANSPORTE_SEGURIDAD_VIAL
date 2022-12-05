<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Conceptos de anatomía, fisiopatología y semiología
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img01.png")
      .col-lg-7(data-aos="fade-left")
        p Dada la importancia de conocer, distinguir y evaluar el funcionamiento del cuerpo humano y de la misma forma identificar las manifestaciones, signos y síntomas que puede presentar como reacción a una enfermedad, accidente e incidente o en su desarrollo o evolución es importante para el aprendiz conocer algunos conceptos básico que le permitan actuar de manera segura en un momento dado.
        p En situaciones de emergencias para el caso de accidentes de tránsito en especial es vital que la persona que va a prestar los primeros auxilios tenga conocimientos claros sobre la estructura anatómica del cuerpo humano, sobre el funcionamiento fisiológico del mismo, las posibles patologías a las que se puede enfrentar un cuerpo en el caso de un accidente y los síntomas que debe tener en cuenta al momento de entrar en contacto con un paciente. 
        p.mb-0 Por lo anterior, se hace necesario conocer la anatomía, fisiopatología y semiología del cuerpo humano, para evaluar cualquier condición presentada y las diferentes manifestaciones. 

    p.mb-5 En razón a lo anterior, revise los siguientes conceptos:

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Anatomía
    
    .BGIMG03.px-md-5.px-4.pb-4.mb-4
      p La anatomía es una ciencia o rama encargada del estudio de la estructura y organización de los seres vivos, enfocando su estudio en la forma, disposición, ubicación, comparación, correlación de los diferentes órganos, huesos, músculos y en general la composición del cuerpo, DiccioMed (2008).
      p Dentro del concepto es importante resaltar que en esta ciencia se pueden encontrar dos ramas: 
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-8
          img(src="@/assets/curso/tema4/img02.svg")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Fisiopatología

    p La fisiopatología es el estudio de procesos patológicos, proceso de producción e historia de las enfermedades relacionadas en la evolución de los seres vivos, desde el campo molecular, subcelular, celular, orgánico, anatómico, Universidad de Valencia (2015). Su estudio se centra en tres fases como lo puede observar en el siguiente video:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3n7B0EsO658" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Semiología
    
    .BGIMG03.px-md-5.px-4.pb-4.mb-4
      p.mb-5 La semiología es la encargada del estudio de los signos y síntomas presentados por las enfermedades, que permite por medio de estos establecer un diagnóstico,Olivero R &amp; Barraez c. ( 2011)., en la parte médica se pueden distinguir dos tipos:
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-6
          img(src="@/assets/curso/tema4/img03.svg")

      

</template>

<script>
export default {
  name: 'Tema4',
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
