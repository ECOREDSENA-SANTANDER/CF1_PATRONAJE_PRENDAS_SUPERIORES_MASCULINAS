<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta un esquema que sintetiza elementos clave, integrando conceptos como antropometría, anatomía, biomecánica, morfología y ergonomía, con el propósito de comprender la división del cuerpo masculino y la clasificación por somatotipos, fundamentales para la construcción de cuadros de tallas a partir de la toma de medidas. Asimismo, se incorpora una visión general sobre las bases textiles, su influencia en el diseño y la adaptación de prendas, haciendo énfasis en la tipología de prendas superiores masculinas dentro del vestuario casual.
    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.png", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
