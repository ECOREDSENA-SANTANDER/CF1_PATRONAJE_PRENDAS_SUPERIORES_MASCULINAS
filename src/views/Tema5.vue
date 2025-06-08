<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Textiles


    .row.mb-5  
      .titulo-sexto.color-acento-contenido
        h5 Tabla 11. 
        |  Clasificación de las fibras
      .tabla-a.color-secundario.estilo6
        table(alt="La tabla contiene una tabla organizada que clasifica las fibras textiles en dos grandes grupos: fibras naturales y fibras químicas, según su origen y composición.")
          tr
            td(rowspan="7").fw-bold.bgrosadoclaro.izquierdo(style="width:14%") Fibras naturales
            td(rowspan="2").fw-bold.bgrosadoclaro(style="width:12%") Animales
            td.bgrosadoclaro Procedentes de glándulas sedosas.
            td.bgrosadoclaro Seda, seda salvaje.
          tr
            td.bgrosadoclaro Procedentes de folículos pilosos.
            td.bgrosadoclaro Pelo de alpaca, angora, buey, caballo, conejo, castor, camello, cachemira, cabra guanaco, llama, nutria, yak y vicuña.
          // Fibras naturales - Vegetales
          tr
            td(rowspan="4").fw-bold.bgrosadoclaro(style="width:12%") Vegetales
            td.bgrosadoclaro Procedentes de las semillas.
            td.bgrosadoclaro Algodón.
          tr
            td.bgrosadoclaro Procedentes del tallo.
            td.bgrosadoclaro Lino, cáñamo, yute, ramio.
          tr
            td.bgrosadoclaro Procedentes de la hoja.
            td.bgrosadoclaro Esparto, sisal.
          tr
            td.bgrosadoclaro Procedentes del fruto.
            td.bgrosadoclaro Coco.
          // Fibras naturales - Minerales
          tr
            td.fw-bold.bgrosadoclaro(style="width:12%") Minerales
            td.bgrosadoclaro(colspan="1") Asbestos, fibra de vidrio, fibra de carbono.
            td.bgrosadoclaro
          tr
            td(rowspan="7").fw-bold.bgazulclaro.izquierdo(style="width:14%") Fibras químicas
            td(rowspan="3").fw-bold.bgazulclaro(style="width:12%")  Artificiales
            td.bgazulclaro Base proteínica.
            td.bgazulclaro De la caseína de la leche (fibroína), de algas (alginato).
          tr
            td.bgazulclaro Base celulósica.
            td.bgazulclaro Rayones (viscosa, cupro, acetato).
          tr
            td.bgazulclaro Base metálica.
            td.bgazulclaro Oro, plata, cobre.
          // Fibras químicas - Sintéticas
          tr
            td(rowspan="3").fw-bold.bgazulclaro(style="width:12%") Sintéticas
            td.bgazulclaro Por polimerización.
            td.bgazulclaro Polivinilo, poliacrílicos.
          tr
            td.bgazulclaro Por condensación.
            td.bgazulclaro Poliéster (tergal), poliamida (#[em nylon]).
          tr
            td.bgazulclaro Por poliadición.
            td.bgazulclaro Poliuretano y poliespán.


    .row.mb-5  
      .titulo-sexto.color-acento-contenido
        h5 Tabla 12. 
        | Clasificación de tejidos
      .tabla-a.color-secundario.estilo6
        table(alt="Tabla con la clasificación de los tejidos en dos grandes grupos: telas tejidas y telas no tejidas. Dentro de las telas tejidas se encuentran los tejidos planos, que incluyen ligamentos fundamentales como tafetán, sarga y raso; ligamentos derivados como esterilla, espina y sarga interrumpida; y otros como dobby, jacquard y afelpados. También se clasifican los tejidos de punto, divididos en tejidos por trama (jersey, lacoste, rib, interlock, piqué) y por urdimbre (tricot y raschell). Por último, las telas no tejidas comprenden materiales como interlones, guatas y entretelas.")
          tr
            td(rowspan="13").fw-bold.bg-color-20.wcus-9 Telas tejidas
          tr
            td(rowspan="7").bg-color-20.fw-bold.w-25.text-left.wcus-9 Plano
            td(rowspan="3").bg-color-20.text-left Ligamentos fundamentales
            td.bg-color-20.text-left Tafetán
          tr
            td.bg-color-20.text-left Sarga (diagonal)
          tr
            td.bg-color-20.text-left Raso
          tr
            td.bg-color-20.text-left(rowspan="3") Ligamentos derivados
          
            td.bg-color-20.text-left Esterilla/canastra
          tr
            td.bg-color-20.text-left  Esterilla / Espiga
          tr
            td.bg-color-20.text-left Sarga interrumpida #[em (broken Twill)]
          tr.bg-color-20
            td.bg-color-20.text-left.wcus-9 Otros
            td.bg-color-20.text-left Dobby, jacquard, riso, afelpados etc
          tr
            td(rowspan="5").bg-color-20.fw-bold.w-25.text-left.wcus-9 Punto
            td(rowspan="2").bg-color-20.text-left Por trama
            td.bg-color-20.text-left Sencillo (jersey, lacoste)
          tr
            td.bg-color-20.text-left Doble (rib o resortado, #[em interlock], piqué)
          tr
            td.bg-color-20.text-left(rowspan="3") Por urdimbre
          tr 
            td.bg-color-20.text-left #[em Tricot]
          tr 
            td.bg-color-20.text-left #[em Raschell]
          tr
            td.bg-color-13.fw-bold.wcus-10 Telas no tejidas
            td.bg-color-13.text-left.wcus-9(colspan="3")
              | Guatas
              br
              | Entretelas


</template>

<script>
export default {
  name: 'Tema5',
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
