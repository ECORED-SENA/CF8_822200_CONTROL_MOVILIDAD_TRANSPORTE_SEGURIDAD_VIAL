<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
   
    p Conocer aspectos relacionados con los primeros auxilios, en cuanto a los fundamentos legales y a los conceptos de procedimiento penal y civil, marca la diferencia para una víctima de accidente, un lesionado o un enfermo, pues estos minutos iniciales pueden determinar y aumentar las probabilidades de vida y disminuir las lesiones posteriores.
    p.mb-5 Se deben tener claras las diferentes técnicas de atención incluidas las de valoración, reanimación y por último las técnicas de inmovilización. Dentro de este conocimiento básico se debe conocer las características de las heridas, los conceptos de anatomía, fisiopatología y semiología y signos vitales, entre otros que se vieron en el componente formativo, por lo que a continuación se presenta un mapa conceptual que sintetiza la información del mismo.
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
