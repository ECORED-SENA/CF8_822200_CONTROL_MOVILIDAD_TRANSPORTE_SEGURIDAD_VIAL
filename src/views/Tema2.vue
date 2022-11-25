<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas atención primeros auxilios
    
    .cajon-b.color-acento-contenido.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-lg-1.col-2.p-3
          img(src="@/assets/curso/tema2/img01.svg")
        .col-lg-11
          p.mb-0 Es muy importante que las personas usuarias de las infraestructuras de transporte tengan nociones en atención a primeros  auxilios, mientras llegan los cuerpos especializados en este tipo de atenciones, en razón a ello, se presentan  una serie de técnicas que se aplican a las víctimas de accidentes, lesionados o en caso de enfermedades repentinas, como primera asistencia, las cuales son universales y que propenden siempre por preservar la vida.
    
    .h4.text-center <span style="background-color:#FFD817; padding: 5px">¿Qué se debe hacer en un accidente de tránsito ?</span>

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rM5Mf3aF2UI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Técnicas de valoración
    
    p.mb-5 La técnica  consiste en realizar una valoración de manera global del estado del paciente, determinando la gravedad o complejidad de sus lesiones, una vez determinada esta situación se procederá a adoptar las medidas necesarias ajustada a la condición de la víctima , sea esta primaria o secundaria, según sus características. 

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-5(data-aos="fade-right")
        .BG04B
          .row.justify-content-center.img01
            .col-xl-10.col-11
              img(src="@/assets/curso/tema2/img02.svg")
          .p-4
            ul.lista-ul--color
              li
                <i class="fas fa-check" style="color:#FD9827"></i>
                | De observación.
              li
                <i class="fas fa-check" style="color:#FD9827"></i>
                | Se identifican las situaciones que se puedan presentar de manera inmediata y que puedan llegar a colocar en riesgo la vida de la persona accidentada o lesionada. 
              li
                <i class="fas fa-check" style="color:#FD9827"></i>
                | Se determina el estado de conciencia de la persona a través de estimular los sentidos como: el auditivo, el táctil, la visión y el oído.
              li
                <i class="fas fa-check" style="color:#FD9827"></i>
                | Se realiza la medición del pulso carotideo, para verificar la circulación de la sangre y la revisión de posibles hemorragias severas, con el finde intentar detenerlas.
      .col-lg-5.col-10(data-aos="fade-left")
        .BG04B
          .row.justify-content-center.img01
            .col-xl-10.col-11
              img(src="@/assets/curso/tema2/img03.svg")
          .p-4
            ul.lista-ul--color
              li
                <i class="fas fa-check" style="color:#FD9827"></i>
                | De diálogo
              li
                <i class="fas fa-check" style="color:#FD9827"></i>
                | Se da mediante una comunicación más fluida con el herido, para tranquilizarlo, e ir contándole cada una de las valoraciones para que este informado.
              li
                <i class="fas fa-check" style="color:#FD9827"></i>
                | Se revisa como fue el mecanismo del accidente y sus consecuencias.
              li
                <i class="fas fa-check" style="color:#FD9827"></i>
                | Finalmente se hace una revisión de pies a cabeza para verificar el estado total del paciente.

    p A continuación, se describe cómo se hace la revisión del paciente en la valoración secundaria, con el fin de conocer el estado real tanto físico como emocional:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .BGR05.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema2/img04.svg' alt='AvatarTop')
          .h4.text-center CABEZA
          p.text-center.mb-0 Se revisan heridas o contusiones debajo del cabello y la cara, hemorragias, sangrado por los oídos, lesiones en los ojos y aspecto general del rostro.
        .BGR05.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema2/img05.svg' alt='AvatarTop')
          .h4.text-center CUELLO
          p.text-center.mb-0 Tocarlo con suavidad, en caso de tener que movilizar a los pacientes se tiene que mantener en el mismo sentido de la cabeza y tronco, revisar pulso carotídeo y aflojar las prendas de vestir.
        .BGR05.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema2/img06.svg' alt='AvatarTop')
          .h4.text-center TÓRAX
          p.text-center.mb-0 Revisar heridas o deformaciones de la caja torácica y revisar movimientos respiratorios.
        .BGR05.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema2/img07.svg' alt='AvatarTop')
          .h4.text-center ABDOMEN
          p.text-center.mb-0 Revisar heridas, localizar dolores presentes, palpar si el abdomen está duro o depresible, prever posibles lesiones internas.
        .BGR05.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema2/img08.svg' alt='AvatarTop')
          .h4.text-center EXTREMIDADES
          p.text-center.mb-0 Evitar moverlas, compararlas visualmente, buscar heridas, deformaciones, inflamaciones, explorar sensibilidad y movimientos.
        .BGR05.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/tema2/img09.svg' alt='AvatarTop')
          .h4.text-center ESPALDA
          p.text-center.mb-0 Revisar si hay posibles fracturas vertebrales o lesiones en la médula, etc.
    
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-5.col-10.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img10.png")
      .col-lg-7.px-0(data-aos="fade-left")
        p.ms-4 Cuidar la vida del paciente es importante, por lo que siempre hay que estar monitoreando los signos vitales, como: 
        figure
          img(src="@/assets/curso/tema2/img11.svg")
        
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Figura 3
      span Técnicas de valoración
    
    .BGIMG01.p-md-5.p-4.mb-4(data-aos="zoom-in")
      img(src="@/assets/curso/tema2/img12.svg")
    
    p También es importante buscar e indagar cualquier tipo de antecedente médico, además de tarjetas de información, brazaletes que puedan dar indicios de otros posibles problemas médicos. 
    p Después de tener claro el estado del paciente a través de la toma de signos vitales, se deben identificar una serie de apreciaciones adicionales que son cruciales para mantener el control de la salud de la víctima, las cuales puede conocer a continuación:

    .BGIMG02.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Condición general
            p.mb-0 Condición general Observar al lesionado, revisando la postura, su expresión, temperamento y estado de conciencia.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img13.png")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Ropa-Accesorios
            p.mb-0 Aflojar la ropa apretada o quitar elementos para permitir una mejor evaluación de su estado en general.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img14.png")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Piel
            p.mb-0 Observar coloraciones y cambios en la piel.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img15.png")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Examen individual
            p.mb-0 Examen individual de cada parte del cuerpo, iniciando por la cabeza hacia los pies, detallando cualquier posibilidad de daño, lesión, fractura o hemorragia, como está descrito en la evaluación secundaria o de diálogo.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img16.png")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Documentación
            p.mb-0 Sí la persona está inconsciente, se buscarán documentos que acrediten quién es esa persona, en lo posible con la presencia de un testigo y realizar el paso anterior.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img17.png")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Registros
            p.mb-0 Dejar un registro en lo posible por escrito de las personas lesionadas atendidas y datos más relevantes.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img18.png")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Preguntar
            p.mb-0 Interrogar al lesionado, siendo amable, entendiendo su situación, revisando los signos y síntomas que le generen mayor molestia, preguntarle: dónde le duele, lugar de irradiación, intensidad del dolor, duración del mismo.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img19.png")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Verificación
            p.mb-0 Es muy importante verificar la respuesta verbal, mediante el uso del lenguaje y sonidos, de la misma forma es vital revisar la apertura ocular, sí abre o no los ojos espontáneamente, sí existe respuesta motora o no, o sí son orientados o desorientados.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img20.png")

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Técnicas de reanimación
    
    p Estas técnicas tienen como objetivo y en caso de emergencia preservar la vida cuando el paciente no respira o el corazón ha dejado de palpitar, como consecuencia de eventos como: una descarga eléctrica , un ataque cardíaco o ahogamiento. A continuación, describiremos algunas:

    .row.align-items-center.img03.mb-4(data-aos="fade-right")
      .col-lg-1.col-2.img02
        img.w-75(src="@/assets/curso/temas/img03.svg")
      .col-auto.BG06.p-2
        .h4.ms-5.mb-0.text-white RCP
    
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img21.png")
      .col-lg-7(data-aos="fade-left")
        p Por sus siglas Reanimación Cardio respiratoria o RCP  permite mantener el flujo de sangre con oxígeno hacia el cerebro y otros órganos vitales hasta que la persona pueda ser atendida adecuadamente, pues si el corazón deja de bombear sangre oxigenada puede causar daño cerebral irreversible en muy pocos minutos, los pasos son los siguientes:
        ul.lista-ul--color
          li
            <i class="fas fa-check" style="color:#FD9827"></i>
            | Realizar compresiones a nivel del tórax para mantener la circulación sanguínea.
          li
            <i class="fas fa-check" style="color:#FD9827"></i>
            | Abrir las vías respiratorias a través de respiración boca a boca o de boca a nariz.
          li
            <i class="fas fa-check" style="color:#FD9827"></i>
            | Reanudar las compresiones del tórax para continuar el impulso de sangre a los órganos.

    .row.align-items-center.img03.mb-4(data-aos="fade-right")
      .col-lg-1.col-2.img02
        img.w-75(src="@/assets/curso/temas/img03.svg")
      .col-auto.BG06.p-2
        .h4.ms-5.mb-0.text-white Maniobra de Heimlich


    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img22.png")
      .col-lg-7(data-aos="fade-left")
        p Se aplica en casos de Atragantamientos o asfixias y se realiza de la siguiente manera:
        ul.lista-ul--color
          li
            <i class="fas fa-check" style="color:#FD9827"></i>
            | Se colocan los brazos alrededor de la cintura de la persona que se está asfixiando.
          li
            <i class="fas fa-check" style="color:#FD9827"></i>
            | Cierra el puño con una de tus manos y coloca el lado del dedo pulgar de tu puño entre el ombligo y la parte baja de las costillas de la persona a la que vas a ayudar.
          li
            <i class="fas fa-check" style="color:#FD9827"></i>
            | Coloca tu otra mano sobre tu puño y haz una presión rápida contra el abdomen de la persona. La presión debe hacerse hacia adentro y hacia arriba.
          li
            <i class="fas fa-check" style="color:#FD9827"></i>
            | Repite las presiones hasta que el objeto salga o la persona pueda volver a respirar . 

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Técnicas de inmovilización

    p Estas tienen como principal función disminuir los efectos de la lesión primaria y evitar que se complique dando avance a una lesión secundaria, estos elementos permiten una adecuada movilización de la víctima. A continuación, se describen las inmovilizaciones más frecuentes y su respectiva utilización:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-12.d-none.d-lg-flex
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img23.svg')
          .BGR07.p-3(x="40.8%" y="60%" numero="+")
            .h5.mb-2 Inmovilización espinal
            p.mb-0 Se utiliza para inmovilizaciones a nivel de Columna con el inmovilizador de Kendrick, este también permite inmovilizar pacientes que se encuentren atrapados, se inmoviliza el cuerpo con tres cintas a la altura del tórax y la cabeza.
          .BGR07.p-3(x="82.8%" y="27.5%" numero="+")
            .h5.mb-2 Inmovilizador de cabeza
            p.mb-0 Es complemento al collarín y a la camilla, para que se dé la #[b inmovilización cervical] total en pacientes con sospecha de traumatismo craneoencefálico o cervical. Primero se coloca el collarín y luego la base del inmovilizador sobre la base de la cabeza de la camilla, fijándola con el velcro.
          .BGR07.p-3(x="88.6%" y="55.3%" numero="+")
            .h5.mb-2 Inmovilización con collarín cervical
            p.mb-0 Antes de colocarlo se debe descartar lesiones a nivel de cuello, luego se debe colocar la columna vertebral recta, sujetar manera firma la cabeza del paciente y fijar el collarín con las sujeciones, tratando que no quede suelto.
          .BGR07.p-3(x="47.6%" y="87%" numero="+")
            .h5.mb-2 Inmovilización de extremidades
            p.mb-0 Se da en casos de fractura de extremidades para no complicar la condición del miembro afectado, para esto se debe cortar la ropa de la zona, se despeja totalmente y se selecciona la férula adecuada en cada caso.
      .col-12.d-lg-none.d-flex
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img24.svg')
          .BGR07.p-3(x="25%" y="50%" numero="+")
            .h5.mb-2 Inmovilización espinal
            p.mb-0 Se utiliza para inmovilizaciones a nivel de Columna con el inmovilizador de Kendrick, este también permite inmovilizar pacientes que se encuentren atrapados, se inmoviliza el cuerpo con tres cintas a la altura del tórax y la cabeza.
          .BGR07.p-3(x="81.7%" y="21.7%" numero="+")
            .h5.mb-2 Inmovilizador de cabeza
            p.mb-0 Es complemento al collarín y a la camilla, para que se dé la #[b inmovilización cervical] total en pacientes con sospecha de traumatismo craneoencefálico o cervical. Primero se coloca el collarín y luego la base del inmovilizador sobre la base de la cabeza de la camilla, fijándola con el velcro.
          .BGR07.p-3(x="92.5%" y="42.4%" numero="+")
            .h5.mb-2 Inmovilización con collarín cervical
            p.mb-0 Antes de colocarlo se debe descartar lesiones a nivel de cuello, luego se debe colocar la columna vertebral recta, sujetar manera firma la cabeza del paciente y fijar el collarín con las sujeciones, tratando que no quede suelto.
          .BGR07.p-3(x="24%" y="68.5%" numero="+")
            .h5.mb-2 Inmovilización de extremidades
            p.mb-0 Se da en casos de fractura de extremidades para no complicar la condición del miembro afectado, para esto se debe cortar la ropa de la zona, se despeja totalmente y se selecciona la férula adecuada en cada caso.

    .BGR03(data-aos="flip-up")
      .row.align-items-center
        .col-lg-1.col-2
          img(src="@/assets/curso/temas/img02.svg")
        .col.p-4
          .h4 Importante
          p.mb-0 #[b No se debe inmovilizar] a un paciente cuando los traumatismos sean fuertes y se observe que no tiene dolor en la línea media de la espalda o no tiene signos neurológicos, entre otras. La inmovilización debe realizarla el personal capacitado en el lugar del accidente.

</template>

<script>
export default {
  name: 'Tema2',
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
