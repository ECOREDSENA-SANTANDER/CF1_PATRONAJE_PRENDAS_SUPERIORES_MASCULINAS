<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
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
