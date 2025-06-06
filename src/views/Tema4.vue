<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Moda y sistema moda

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/t4/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p.mb-0 En el ámbito del diseño, la moda trasciende la idea de ser simplemente un conjunto de prendas o tendencias estéticas; se entiende como un fenómeno sociocultural complejo que refleja la identidad individual, los valores colectivos y los códigos culturales de una época. Como lo plantea Kawamura (2005), la moda no debe reducirse únicamente a elementos materiales, sino que debe abordarse como un #[b sistema socialmente construido], sustentado en normas y convenciones que definen lo que es aceptado o valorado dentro de determinados contextos.
          br
          br

    .row.justify-content-center.align-items-center
      .col-lg-10.col-md-12.col-sm-12
        p De esta manera, el concepto de “sistema moda” cobra relevancia en los estudios y la práctica del diseño de modas; el sistema integra no solo la indumentaria, sino también accesorios, calzado y demás componentes simbólicos y funcionales que conforman la expresión estética de una sociedad. Además, incluye áreas como la producción, comercialización, comunicación y consumo de moda, las cuales están en constante transformación en función de las tendencias, los estilos de vida y los contextos socioculturales.
      .col-lg-2.col-md-3.col-sm-12
        img(src='@/assets/curso/t4/img2.png', alt='')

    Separador  
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1  Universos del vestuario

    Separador  
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2  Gamas de mercados en el sistema moda

    .tarjeta.color-primario.p-3(data-aos="fade").mb-4
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t1/play.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Gamas de mercado- Universos de vestuarios- Ocasiones de uso
              p.mb-2 Si desea profundizar en el tema de los universos del vestuario, lo invitamos a explorar el siguiente recurso:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=VsTacEciP3k" target="_blank")
                span Ir al sitio
                  i.fas.fa-play-circle.p-2


    Separador  
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.3  Tipología de prendas masculinas


    .tarjeta.color-primario.p-3(data-aos="fade").mb-4
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t1/play.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Categoría de prendas - tipologías - bitácora de formas
              p.mb-2 Es importante descubrir las categorías y tipologías de prendas en este video educativo. Aprenda a identificar y clasificar diferentes tipos de vestimenta, esenciales en el diseño y confección de moda.
              p.mb-0 ¡Amplíe su conocimiento en moda!
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/leHGYnfUxGk" target="_blank")
                span Ir al sitio
                  i.fas.fa-play-circle.p-2




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
