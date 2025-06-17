<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Textiles

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-6.col-md-12.col-sm-12
        p.mb-4 Los textiles, tanto para uso en vestuario como en aplicaciones industriales, se elaboran a partir de fibras que dan origen a un filamento el cual se hila, formando hilos que, mediante distintos tipos de tejidos, se transforman en telas.
        p.mb-3 A continuación, se presentan los procesos generales que intervienen en cada etapa:
        .row.bgamarilloclaro.align-items-center.justify-content-center.borde-redondo
          p.px-5.py-3 #[b Fibras textiles:] son las unidades básicas de cualquier estructura textil, se definen como filamentos cuya longitud es considerablemente mayor que su diámetro; estas fibras se utilizan para fabricar hilos, que posteriormente se convierten en telas. Son el punto de partida en la cadena de producción textil y determinan, en gran medida, las propiedades del producto final.
      .col-lg-6.col-md-8.col-sm-12
        .titulo-sexto.color-acento-contenido
            h5 Figura 18. 
            | Fibras textiles
        figure
          img(src='@/assets/curso/t5/fig18.png', alt='La figura presenta el proceso manual de manejo de fibras textiles, en el que una persona separa y prepara material fibroso, posiblemente para su hilado o procesamiento posterior. Las manos interactúan directamente con las fibras, que están dispuestas sobre una superficie.')

    p.mb-4 Las fibras se clasifican según su origen en dos grupos principales:

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-left")
      .col-lg-6.col-md-8.col-sm-12.p-0.bgverdemate.borde-redondo-izq
        img(src='@/assets/curso/t5/img1.png', alt='')
      .col-lg-6.col-md-12.col-sm-12.bgverdemate.p-0.borde-redondo-der
        ul.lista-ul--color.fa-al.px-5.mt-5
          li 
            i.fas.fa-chevron-circle-right
            span.mb-3 #[b Naturales:] provienen de plantas (algodón, lino), animales (lana, seda) o minerales (asbesto).
          li 
            i.fas.fa-chevron-circle-right
            span.mb-4 #[b Químicas:] se obtienen por procesos industriales.
              br
              | - Artificiales: derivadas de polímeros naturales (rayón, viscosa).
              br
              | - Sintéticas: creadas con compuestos químicos (poliéster, #[em nylon]).
        p.px-5.mb-5 Estas categorías permiten identificar el tipo de fibra según su fuente y proceso de fabricación.

    .row.mb-5(data-aos="fade")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 11. 
        |  Clasificación de las fibras
      .tabla-a.color-secundario.estilo6
        table(alt="Tabla organizada que clasifica las fibras textiles en dos grandes grupos: fibras naturales y fibras químicas, según su origen y composición.")
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
            td.quitarborde.bgrosadoclaro(colspan="1") Asbestos, fibra de vidrio, fibra de carbono.
            td.bgrosadoclaro
          tr
            td(rowspan="7").fw-bold.bgazulclaro.izquierdo(style="width:14%") Fibras químicas
            td(rowspan="3").fw-bold.bgazulclaro(style="width:12%")  Artificiales
            td.bgazulclaro Base proteínica.
            td.bgazulclaro De la caseína de la leche (fibroína), de algas (alginato).
          tr
            td.bgazulclaro Base celulósica.
            td.bgazulclaro Rayones (viscosa, #[em crupón], acetato).
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

    .subt.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-black ¿Que son los hilos y tejidos?

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10.col-md-12.col-sm-12
        p.mb-4 #[b El hilo] es un conjunto de fibras textiles, continuas o discontinuas, que se tuercen entre sí para formar una hebra larga, resistente y flexible, utilizada directamente en la fabricación de tejidos.
        p.mb-0 #[b La hilatura] es el proceso mediante el cual se hilan los filamentos, transformándolos en hebras preparadas para la construcción de hilos y su posterior uso en la elaboración de telas.
      .col-lg-2.col-md-3.col-sm-12
        img(src='@/assets/curso/t5/img2.png', alt='')

    .row.mb-5(data-aos="fade")
      .titulo-sexto.color-acento-contenido
        h5 Figura 19. 
        | Hilaturas
      img(src='@/assets/curso/t5/fig19.png', alt='La figura presenta tres etapas del proceso textil artesanal. A la izquierda, se representa el hilado manual con huso y fibras vegetales. Al centro, un telar de madera en uso, con herramientas y tejidos en desarrollo. A la derecha, se exhiben madejas de hilo organizadas y manipuladas con las manos, listas para ser utilizadas.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-2.col-md-3.col-sm-12
        img(src='@/assets/curso/t5/img3.png', alt='')
      .col-lg-10.col-md-12.col-sm-12
        p.mb-0 #[b Los tejidos:] son estructuras manufacturadas a partir de fibras o hilos que presentan una proporción significativa entre su longitud, área y espesor, y que cuentan con suficiente resistencia mecánica para mantener su cohesión (#[em Textile Terms and Definitions, The Textile Institute,] citado por el SENA).

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-left")
      .col-lg-6.col-md-12.col-sm-12.bgverdemate.p-0.borde-redondo-izq
        p.px-5.mb-5.mt-5 #[b La clasificación de los tejidos se divide en tres grupos principales:]
        ul.lista-ul--color.fa-al.px-5.mt-5
          li 
            i.fas.fa-chevron-circle-right
            span.mb-2 #[b Tejidos planos:] formados por el entrelazado perpendicular de hilos de urdimbre y trama.
          li 
            i.fas.fa-chevron-circle-right
            span.mb-2 #[b Tejidos de punto:] construidos a partir de bucles entrelazados, lo que les otorga mayor elasticidad.
          li 
            i.fas.fa-chevron-circle-right
            span.mb-5 #[b No tejidos:] materiales obtenidos sin procesos de tejido o hilado tradicionales, mediante técnicas como el prensado, agujereado o termofusión.
      .col-lg-6.col-md-8.col-sm-12.p-0.bgverdemate.borde-redondo-der
        img(src='@/assets/curso/t5/img4.png', alt='')

    .row.mb-5(data-aos="fade")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 12. 
        | Clasificación de tejidos
      .tabla-a.color-secundario.estilo6
        table(alt="Tabla con la clasificación de los tejidos en dos grandes grupos: telas tejidas y telas no tejidas. Dentro de las telas tejidas se encuentran los tejidos planos, que incluyen ligamentos fundamentales como tafetán, sarga y raso; ligamentos derivados como esterilla, espina y sarga interrumpida; y otros como dobby, jacquard y afelpados. También se clasifican los tejidos de punto, divididos en tejidos por trama (jersey, lacoste, rib, interlock, piqué) y por urdimbre (tricot y raschell). Por último, las telas no tejidas comprenden materiales como interlones, guatas y entretelas.")
          tr
            td(rowspan="13").fw-bold.bgamarilloclaro3 Telas tejidas
          tr
            td(rowspan="7").bgamarilloclaro3.fw-bold.w-25.text-left Plano
            td(rowspan="3").bgamarilloclaro3.text-left Ligamentos fundamentales
            td.bgamarilloclaro3.text-left Tafetán
          tr
            td.bgamarilloclaro3.text-left Sarga (diagonal)
          tr
            td.bgamarilloclaro3.text-left Raso
          tr
            td.bgamarilloclaro3.text-left(rowspan="3") Ligamentos derivados
          
            td.bgamarilloclaro3.text-left Esterilla/panamá/canastra
          tr
            td.bgamarilloclaro3.text-left  Espina/espiga
          tr
            td.bgamarilloclaro3.text-left Sarga interrumpida #[em (broken twill)]
          tr.bgamarilloclaro3
            td.bgamarilloclaro3.text-left Otros
            td.bgamarilloclaro3.text-left Dobby, jacquard, riso, afelpados, etc.
          tr
            td(rowspan="5").bgamarilloclaro3.fw-bold.w-25.text-left Punto
            td(rowspan="2").bgamarilloclaro3.text-left Por trama
            td.bgamarilloclaro3.text-left Sencillo (#[em jersey], #[em lacoste])
          tr
            td.bgamarilloclaro3.text-left Doble (#[em rib] o resortado, #[em interlock], piqué)
          tr
            td.bgamarilloclaro3.text-left(rowspan="3") Por urdimbre
          tr 
            td.bgamarilloclaro3.text-left #[em Tricot]
          tr 
            td.bgamarilloclaro3.text-left #[em Raschell]
          tr
            td.bgrosadoclaro.fw-bold(style="width:14%") Telas no tejidas
            td.bgrosadoclaro.text-left(colspan="3")
              | Guatas
              br
              | Entretelas

    p.mb-4 La caracterización de los textiles se organiza en función de su comportamiento, el cual está estrechamente relacionado con el peso del material, así como con su estructura, fluidez, capacidad de expansión y compresión. Estos aspectos permiten identificar cómo se comporta un textil durante su manipulación, confección y uso.

    p.mb-4 A continuación, se presentan los aspectos más relevantes que permiten reconocer y clasificar los diferentes tipos de textiles según sus propiedades físicas y funcionales:

    .tarjeta.color-primario.p-3(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t1/play.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Sesión 6 - Caracterización de los textiles
              p.mb-2 Para profundizar en cómo se realiza esta caracterización, se invita al aprendiz a seguir el siguiente enlace:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=kL9UYOzJD3o" target="_blank")
                span Ir al sitio
                  i.fas.fa-play-circle.p-2

    Separador  
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1  Aprovechamiento

    p.mb-4 El aprovechamiento por metro de tela consiste en determinar cuánta tela se utiliza realmente para confeccionar una prenda en relación con la cantidad total comprada. Este cálculo es crucial para optimizar costos, minimizar desperdicios y mejorar la eficiencia en producción.

    .row.mb-4
      h3.pr-3.py-0 Pasos para determinar el aprovechamiento:
      .col-auto
        img.mover_sub(src='@/assets/curso/t5/linea1.png', alt='')

    .row.bgfondo51.align-items-center.p-4.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .tarjeta.tarjeta.tarjeta--blanca.p-4
            PasosB.color-acento-contenido
              .row.justify-content-center.align-items-center.mb-0(titulo="Paso 1")
                .col-sm-12.col-lg-6.col-md-12
                  h4.mb-4 Trazado de las piezas del patrón
                  p.mb-4 Coloque las piezas del patrón sobre la tela respetando lo siguiente:
                  ul.lista-ul--color.fa-al
                    li           
                      i.fas.fa-chevron-circle-right
                      p.mb-0 El sentido del hilo (dirección de la urdimbre).
                    li           
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Los márgenes de costura.
                    li           
                      i.fas.fa-chevron-circle-right
                      p.mb-0 El sentido del diseño o estampado, si aplica.
                .col-sm-12.col-lg-4.col-md-6
                  img(src='@/assets/curso/t5/img5.png', alt='')

              .row.justify-content-center.align-items-center.mb-0(titulo="Paso 2")
                .col-sm-12.col-lg-6.col-md-12
                  h4.mb-4  Distribución y encaje de piezas
                  p.mb-4 Organice las piezas para que ocupen el menor espacio posible dentro del ancho de la tela (normalmente 1.40 m o 1.50 m). Aquí se busca una disposición eficiente, como encajar piezas en ángulos o rotarlas si el diseño lo permite.
                .col-sm-12.col-lg-4.col-md-6
                  img(src='@/assets/curso/t5/img6.png', alt='')

              .row.justify-content-center.align-items-center.mb-0(titulo="Paso 3")
                .col-sm-12.col-lg-6.col-md-12
                  h4.mb-4  Medición de tela usada
                  p.mb-4 Mida el largo total de tela utilizado una vez acomodadas todas las piezas. Por ejemplo, si las piezas distribuidas ocupan 0.95 metros del total de 1 metro adquirido, ese será su valor de uso real.
                .col-sm-12.col-lg-4.col-md-6
                  img(src='@/assets/curso/t5/img7.png', alt='')

              .row.justify-content-center.align-items-center.mb-0(titulo="Paso 4")
                .col-sm-12.col-lg-12.col-md-12
                  .row.align-items-center.justify-content-center
                    .col-lg-5.col-md-6.col-sm-12
                      h4.mb-4 Cálculo del aprovechamiento
                      p.mb-5.mt-3 La fórmula para calcular el aprovechamiento es:
                      .titulo-sexto.color-acento-contenido
                        h5 Figura 20. 
                        | Fórmula de aprovechamiento
                      img(src='@/assets/curso/t5/fig20.png', alt='La imagen presenta una fórmula utilizada para calcular el porcentaje de aprovechamiento de tela. Se obtiene dividiendo el área útil utilizada por los patrones entre el área total del metro de tela, y multiplicando el resultado por 100.')
                      
                    .col-lg-5.col-md-6.col-sm-12
                      p.mt-5.mb-0 Tela: 1 metro de largo x 1,50 metros de ancho = 1,5 m².
                      p.mb-3 Área ocupada por los patrones: 1,15 m².
                      .titulo-sexto.color-acento-contenido
                        h5 Figura 21. 
                        | Ejemplo de aplicación
                      img(src='@/assets/curso/t5/fig21.png', alt='La imagen presenta un ejemplo aplicado de la fórmula de aprovechamiento de tela. Se divide un área útil de 1.15 metros cuadrados entre un área total de 1.5 metros cuadrados, y el resultado se multiplica por 100. El aprovechamiento obtenido es del 76.67 %, lo que indica que se utiliza eficientemente esa proporción del material disponible.')

    .subt2.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-black Variables que inciden en la eficiencia del consumo textil

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-12.col-sm-12.p-3
        .row.bgrosado.borde-redondo.p-5
          .col-auto
            img.img-t.img-a(src='@/assets/curso/t5/a.png', alt='')
          .col
            p #[b Factores que afectan el aprovechamiento]
          ul.lista-ul--color.fa-al.mt-3
            li           
              i.fas.fa-chevron-circle-right
              p.mb-0 #[b Forma y número de piezas:] prendas con muchas piezas pequeñas tienden a generar más sobrantes.
            li           
              i.fas.fa-chevron-circle-right
              p.mb-0 #[b Ancho de la tela:] a mayor ancho, más oportunidades de optimización.
            li           
              i.fas.fa-chevron-circle-right
              p.mb-0 #[b Diseño o estampado:] telas con dibujos direccionados limitan la rotación de piezas.
            li           
              i.fas.fa-chevron-circle-right
              p.mb-0 #[b Técnicas de corte:] el uso de #[em software] de corte o corte manual puede influir en el rendimiento.
      .col-lg-6.col-md-12.col-sm-12.p-3
        .row.bgazulclaro.borde-redondo.p-5
          .col-auto
            img.img-t.img-a(src='@/assets/curso/t5/b.png', alt='')
          .col
            p #[b Consideraciones adicionales]
          ul.lista-ul--color.fa-al.mt-3
            li           
              i.fas.fa-chevron-circle-right
              p.mb-0 Siempre se recomienda dejar un margen de seguridad del 5 – 10 % al comprar tela.
            li           
              i.fas.fa-chevron-circle-right
              p.mb-0 El uso de retales sobrantes en otras prendas o complementos puede mejorar el rendimiento general.
          p.mb-5
          p.mb-5
          p.mb-3



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
