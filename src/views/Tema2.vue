<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis y clasificación de las medidas

    .row.justify-content-center.align-items-center
      .col-lg-3.col-md-5.col-sm-12
        img(src='@/assets/curso/t2/img1.png', alt='')
      .col-lg-9.col-md-12.col-sm-12
        p Este es un paso fundamental en el proceso de patronaje, ya que permite traducir las dimensiones del cuerpo humano en información útil para la elaboración de moldes; para ello, es indispensable establecer un sistema de medidas claro y coherente, que facilite su clasificación y uso según sus características específicas. Esta organización garantiza precisión en el diseño de patrones, optimizando el ajuste y la funcionalidad de las prendas. 

    Separador  
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Sistemas de medidas y clasificación



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
