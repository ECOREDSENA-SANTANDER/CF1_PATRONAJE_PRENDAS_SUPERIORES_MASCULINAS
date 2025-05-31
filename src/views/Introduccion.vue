<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/portada/img-intro1.png', alt='')
      .col-lg-8.col-md-12.col-sm-12
        .row.bgazulclaro.borde-redondo
          p.p-3 El diseño de moda integra diversos procesos que hacen posible la materialización de ideas a través de la creación de prendas de vestir, en donde se combinan elementos visuales y técnicos para dar forma a un diseño específico. Entre estos procesos se encuentra el patronaje, entendido como la transformación de la estructura corporal humana tridimensional en representaciones bidimensionales, conocidas como patrones básicos.
        p.mt-4 En este contexto, comprender la figura masculina resulta fundamental, ya que permite captar con precisión las características físicas necesarias para interpretar y desarrollar las necesidades del cliente, asegurando así una correcta materialización del diseño.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-8.col-md-12.col-sm-12
        .row.bgamarilloclaro.borde-redondo
          p.p-4 A partir de fundamentos como la antropometría, este componente aborda la estructura corporal masculina de manera integral, incorporando conceptos clave como la biomecánica, la morfología y la ergonomía. Estos elementos permitirán comprender la división técnica del cuerpo y aplicar un sistema de medición esencial para construir cuadros de tallas adaptados a la moda casual masculina.
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/portada/img-intro2.png', alt='')

    p.mb-4  De este modo, el componente permitirá al aprendiz desarrollar metodologías que faciliten la interpretación de diseños o modelos, tomando como base la clasificación de tipologías, los somatotipos masculinos y los universos del vestuario.      
    
    .row.justify-content-center.align-items-center(data-aos="fade")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
