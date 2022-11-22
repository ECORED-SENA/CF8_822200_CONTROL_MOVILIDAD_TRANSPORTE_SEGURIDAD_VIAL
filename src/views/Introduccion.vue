<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.BG01.p-4.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Los resultados del estudio por muertes causadas en accidentes viales muestra un aumento en las últimas décadas, lo cual ha llevado a diseñar políticas y campañas internacionales y nacionales con el fin de concientizar a los ciudadanos en el autocuidado y el cuidado por la vida del otro. 
        p.mb-0 Por esta razón, este componente toma mayor importancia, ya que busca formar competencias en técnicas de primeros auxilios y primer respondiente que le servirán en su vida personal y laboral, por lo anterior, le invito a mirar el siguiente video: Primeros Auxilios.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/intro/img01.svg")

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
