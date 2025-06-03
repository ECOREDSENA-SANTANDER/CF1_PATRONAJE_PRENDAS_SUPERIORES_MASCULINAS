<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.borde-recto-abajo
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Estructura del cuerpo

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/t1/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          br
          p.mb-0 La estructura del cuerpo es entendida a partir de su arquitectura, con relación a su composición y movimiento, esto es de suma importancia para comprender la fundamentación del patronaje y sus diferentes metodologías empleadas para su realización.  
            br
            br
            | La estructura corporal está definida a partir de la organización y disposición de los segmentos del cuerpo partiendo de la función y biomecánica (Norton, 2019), es decir, el movimiento, en donde están implícitos factores anatómicos, morfológicos y posturales que afectan directamente el movimiento del cuerpo, la estabilidad y la ergonomía, en distintos contextos, como, por ejemplo, el diseño de atuendos. 
            br
            br

      p.text-center A continuación, podrá encontrar los conceptos relacionados a la estructura corporal.

      Separador  
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.1 Antropometría
          
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.col-md-12.col-sm-12
          .row.bgamarilloclaro.align-items-center.justify-content-center
            .col-auto.p-0
              img(src='@/assets/curso/t1/img2.png', alt='')
            .col
              p.p-4.mt-4.mb-5 La antropometría es una ciencia dedicada a medir y analizar las dimensiones físicas del cuerpo humano, así como sus proporciones a lo largo de las diferentes etapas del desarrollo.
          .row.bgverdemate.mt-5.borde-redondo
            p.p-5 Esta disciplina también se relaciona con campos como la ergonomía, la nutrición y la medicina, permitiendo evaluar el estado de salud de una persona y adaptar objetos, espacios y elementos a partir de las variaciones físicas observadas en distintos contextos.
        .col-lg-6.col-md-12.col-sm-12
          .row.align-items-center.justify-content-center.mt-2
            .col-lg-10.col-md-12.col-sm-12
              .titulo-sexto.color-acento-contenido
                  h5 Figura 1. 
                  | Medidas corporales segmentadas
              figure
                img(src='@/assets/curso/t1/fig1.png', alt='La imagen presenta esquemas anatómicos de un hombre, una mujer y un niño con medidas antropométricas en centímetros, destacando proporciones corporales clave. Estos datos son esenciales para el diseño ergonómico, el patronaje y estudios biomecánicos.')
              figcaption Fuente: https://www.timetoast.com/timelines/pasos-para-realizar-una-adecuada-evaluacion-nutricional-antropometrica.


      .row.justify-content-center.align-items-center.bgazulclaro
        p.text-center.p-3 En el ámbito del vestuario, la antropometría se aplica mediante el análisis ergonómico, con el objetivo de diseñar prendas que se ajusten adecuadamente al cuerpo y faciliten el movimiento.

      Separador  
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.2 Anatomía

      .bloque-texto-g.bloque-texto-g--inverso.bgfondo11.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img.mover(
          :style="{'background-image': `url(${require('@/assets/curso/t1/img3.png')})`}"
        ).d-none.d-lg-block
        .bloque-texto-g__texto.agrandar.p-4
          br
          br
          p.mb-0 La anatomía es una rama de la biología que estudia la estructura de los seres vivos, con especial énfasis en la forma, ubicación y relación entre órganos y sistemas del cuerpo (Cabrera, 2016).
            br
            br
            | En el diseño de vestuario, este conocimiento es fundamental, ya que permite desarrollar prendas que se adapten correctamente a la forma del cuerpo humano, optimizando su funcionalidad, confort y desempeño en diferentes contextos de uso.
          br
          br
          br

    .container.tarjeta.px-4

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.col-md-12.col-sm-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 2. 
            |  Anatomía del cuerpo masculino
          .row.align-items-center.justify-content-center
            .col-lg-6.col-md-12.col-sm-12
              figure
                img(src='@/assets/curso/t1/fig2.png', alt='Dos vistas anatómicas del cuerpo humano masculino, una anterior y una posterior, con exposición detallada de la musculatura. La imagen frontal destaca pectorales, abdominales, brazos y muslos; la imagen posterior evidencia la musculatura de la espalda, glúteos, piernas y el recorrido de la columna vertebral.')

    .container.tarjeta.tarjeta--blanca.p-4.mb-5.borde-recto-arriba

      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.3 Biomecánica

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.col-md-7.col-sm-12
          img(src='@/assets/curso/t1/img4.png', alt='')
        .col-lg-7.col-md-12.col-sm-12.bgrosado.borde-redondo
          p.px-5.py-4.mt-4 La biomecánica es la disciplina que estudia los principios mecánicos que regulan el movimiento y la estructura del cuerpo humano: analiza las fuerzas internas y externas que actúan sobre el cuerpo, así como la respuesta del sistema musculoesquelético ante dichas fuerzas. Sus aplicaciones incluyen campos como el diseño de prótesis ortopédicas, el deporte y la rehabilitación.

      .row.justify-content-center.align-items-center.bgamarilloclaro.borde-redondo
        p.px-5.py-4 En el diseño de prendas de vestir, la relación entre anatomía y biomecánica se fundamenta en los principios de adaptación y funcionalidad. Comprender estos conceptos, junto con la ergonomía, permite desarrollar prendas que respondan a las necesidades físicas del usuario, facilitando la interacción entre el cuerpo y el vestuario (Sierra y Mosquera, 2013).

      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.4 Morfología

      p.mb-5 La morfología del cuerpo humano se refiere a la forma y estructura del cuerpo, considerando la relación y disposición de sus partes. Esta disciplina es fundamental en campos como la anatomía y la fisiología, ya que permite comprender la organización corporal desde una perspectiva estructural, lo cual resulta esencial para el diseño de prendas ajustadas a la silueta humana.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.col-md-12.col-sm-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 3. 
            |  Morfología del cuerpo masculino
          .row.align-items-center.justify-content-center
            .col-lg-12.col-md-12.col-sm-12
              figure
                img(src='@/assets/curso/t1/img5.png', alt='La figura presenta cinco siluetas corporales masculinas con diferentes complexiones físicas. Se evidencian variaciones en la distribución del tejido adiposo, tonicidad muscular y proporciones corporales, lo cual permite analizar la diversidad morfológica masculina. Esta diversidad es relevante para el diseño de prendas que se ajusten adecuadamente a distintos tipos de cuerpo.')

      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.5 Ergonomía

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/t1/img6.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La ergonomía es una disciplina científica que estudia las interacciones entre los seres humanos y los elementos de un sistema, con el propósito de promover el bienestar, la eficiencia y la seguridad (#[em International Ergonomics Association], 2000). Se fundamenta en principios teóricos y metodológicos orientados al diseño de entornos, herramientas y productos adaptados a las capacidades y limitaciones del cuerpo humano.
            br
            br
            | En el contexto del vestuario, la ergonomía se relaciona directamente con el confort, la funcionalidad y la adaptabilidad de las prendas; su objetivo es facilitar el desempeño de las actividades cotidianas, evitando molestias o alteraciones posturales derivadas del uso de prendas inadecuadas.

      p.mb-4.mt-4 #[b Por ejemplo:] un pantalón que limita la flexión de la rodilla puede causar incomodidad e incluso afectar negativamente la movilidad y salud de la articulación.

      .row.justify-content-center.align-items-center.mb-5.bgrosado.borde-redondo
        p.text-center.p-3.mt-2 #[b Por ello, uno de los desafíos en el diseño de moda es desarrollar prendas ergonómicas, considerando tanto la estructura corporal como los materiales utilizados en su confección. La selección textil y la construcción del patrón deben responder a criterios que aseguren movilidad, comodidad y ajuste eficiente.]

      .row.mb-4
        h3.pr-3.py-0 Relación entre conceptos y estructura corporal:
        .col-auto
          img.mover_sub(src='@/assets/curso/t1/linea1.png', alt='')

      .row.justify-content-center
        .col-lg-4.col-md-6.col-sm-12
          img.mt-2(src='@/assets/curso/t1/img7.png', alt='')
        .col-lg-4.col-md-6.col-sm-12.p-3.mt-0
          .row.justify-content-center.align-items-center.mb-3.bgverdemate.px-4.py-2.borde-redondo
            .col-auto
              img(src='@/assets/curso/t1/img8.png', alt='')
            .col.mt-3
              h3.text-white.bgrojo.text-center Antropometría
              p Se relaciona con las medidas corporales.
          .row.justify-content-center.align-items-center.mb-3.bgverdemate.px-4.py-2.borde-redondo
            .col-auto
              img(src='@/assets/curso/t1/img9.png', alt='')
            .col.mt-3
              h3.text-white.bgrojo.text-center Biomecánica
              p Corresponde al movimiento corporal.
          .row.justify-content-center.align-items-center.mb-3.bgverdemate.px-4.py-2.borde-redondo
            .col-auto
              img(src='@/assets/curso/t1/img10.png', alt='')
            .col.mt-3
              h3.text-white.bgrojo.text-center Ergonomía
              p Abarca la postura.
        .col-lg-4.col-md-6.col-sm-12.p-3.mt-0
          .row.justify-content-center.align-items-center.mb-3.bgverdemate.px-4.py-2.borde-redondo
            .col-auto
              img(src='@/assets/curso/t1/img11.png', alt='')
            .col.mt-3
              h3.text-white.bgrojo.text-center Anatomía
              p Se refiere a la estructura del cuerpo.
          .row.justify-content-center.align-items-center.mb-3.bgverdemate.px-4.py-2.borde-redondo
            .col-auto
              img(src='@/assets/curso/t1/img12.png', alt='')
            .col.mt-3
              h3.text-white.bgrojo.text-center Morfología
              p Hace referencia a la geometría del cuerpo (huesos y uniones).

      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.6 División del cuerpo




  </template>

<script>
export default {
  name: 'Tema1',
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
