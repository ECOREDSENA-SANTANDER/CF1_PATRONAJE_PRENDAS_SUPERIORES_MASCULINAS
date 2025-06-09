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

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-5.col-sm-12
        img(src='@/assets/curso/t4/img3.png', alt='')
      .col-lg-9.col-md-12.col-sm-12
        p.mb-2 Los universos del vestuario se refieren a la clasificación del conjunto de prendas según el contexto y la ocasión de uso; las agrupaciones permiten organizar el vestuario en categorías coherentes en términos de tipologías, materiales textiles y criterios de aplicación.
        p Cada universo responde a un uso específico (formal, casual, deportivo, funcional, entre otros) y facilita la estructuración del producto de moda en función de su propósito, estética y usuario final; esta categorización, además de orientar el diseño y la producción, contribuye a identificar con mayor precisión el mercado objetivo al que se dirige una colección o línea de productos.

    .row.mb-5  
      .titulo-sexto.color-acento-contenido
        h5 Tabla 9. 
        |  Clasificación de universos del vestuario por ocasión de uso
      .tabla-a.color-secundario.estilo5
        table
          thead
            tr
              th(style="width:14%") Universo
              th Uso
              th Ejemplos
          tbody
            tr
              td Formal
              td Eventos elegantes, reuniones importantes, fiestas de etiqueta
              td Trajes de gala, vestidos de noche, vestidos de gala
            tr
              td Informal casual
              td Vida cotidiana, actividades diarias
              td Pantalones en denim, camisetas, camisas, zapatillas, vestidos ligeros
            tr
              td Deportivo o funcional
              td Actividad física, trabajo especializado
              td Ropa deportiva, uniformes médicos, overoles
            tr
              td Oficina o ejecutivo
              td Entornos laborales, negocios
              td Trajes ejecutivos, blusas, pantalones de vestir
            tr
              td Ceremonia y festivo
              td Bodas, graduaciones, eventos religiosos
              td Vestidos largos, trajes formales, indumentaria cultural
            tr
              td Fantasía
              td Teatro, cine, cosplay, carnaval
              td Disfraces, vestuario teatral, trajes de época
            tr
              td Swinwear
              td Playa, piscina, eventos recreativos
              td Vestidos de baño, salidas de baño, vestidos para la playa y la piscina
            tr
              td Lingeriewear
              td Prendas interiores
              td Ropa interior
            tr
              td Sleepwear
              td Para dormir o descansar
              td Ropa de descanso, pijamas

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade")
      .col-lg-4.col-md-6.col-sm-12 
        img.p-0(src='@/assets/curso/t3/img2.png', alt='')
      .col-lg-8.col-md-12.col-sm-12.p-0.mt-1
        .row.bgamarilloclaro2.p-0
          .col-auto.px-5.mt-5
            h3.bgamarillo.p-1.mb-2 #[b Ocasión de uso]
          p.px-5.mt-3 Se refiere a los diversos escenarios o contextos en los que una persona, o un grupo, utiliza una prenda específica. Esta elección no es aleatoria, sino que está determinada por acuerdos culturales que definen qué tipo de vestuario es apropiado según la situación. Como tal, la ocasión de uso está estrechamente vinculada con la #[b identidad cultural], tanto individual como colectiva, ya que refleja normas sociales, costumbres y significados simbólicos compartidos dentro de una comunidad.

    .row.justify-content-center.align-items-center
      .col-lg-6.col-md-10.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10. 
          |  Ocasión de uso por universo de vestuario
        .tabla-a.color-secundario.estilo5
          table
            thead
              tr
                th Ocasión de uso
                th Universo de vestuario
            tbody
              tr
                td Protocollario
                td Gala, Formal
              tr
                td Multiocasión
                td Casual
              tr
                td Informal
                td #[em Kakiwear]
                  br
                  | #[em Jeanswear]
                  br
                  | #[em Sportswear]
                  br
                  | #[em Activewear]
                  br
                  | #[em Leisurewear]
              tr
                td Complementos
                td #[em Swinwear]
                  br
                  | #[em Beachwear]
                  br
                  | #[em Sleepwear]
                  br
                  | #[em Underwear]
      .col-lg-6.col-md-8.col-sm-12
        img(src='@/assets/curso/t4/img4.png', alt='')

    Separador  
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2  Gamas de mercados en el sistema moda

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-7.col-sm-12
        img(src='@/assets/curso/t4/img5.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        p.mb-2.mt-4 Las gamas de mercado en la industria de la moda se refieren a la segmentación de productos según el nivel de exclusividad, calidad, precio y tipo de consumidor al que están dirigidos. Las gamas permiten clasificar las líneas de mercado dentro del sector, facilitando la estrategia de diseño, producción y comercialización.
        p En la siguiente figura se presenta una clasificación visual de estas gamas, desde el #[b mercado de lujo] hasta el #[b mercado masivo], pasando por gamas como #[b alta gama], #[b media] y #[b popular], cada una con características específicas en términos de diseño, materiales, producción y posicionamiento.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-md-8.col-sm-12
        .titulo-sexto.color-acento-contenido.mt-3
          h5 Figura 17.
          | Sistema moda y gamas de mercado
        figure
          img.mb-3(src='@/assets/curso/t4/fig17.png', alt='La imagen representa la Pirámide de la Moda, una clasificación de la industria según la calidad y exclusividad de las prendas. Se divide en cinco niveles; Alta Costura, Moda de alta calidad, Gama media, Mercado de masas, Gama baja.')
      .col-lg-6.col-md-8.col-sm-12
        img(src='@/assets/curso/t4/img6.png', alt='')

    .tarjeta.color-primario.p-3(data-aos="fade").mb-5
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

    p.text-center.mb-5 A partir de lo anterior y atendiendo a la clasificación de las gamas de mercado en el sistema moda, se relacionan los siguientes conceptos:

    TabsC.color-secundario
      .py-3.py-md-4(titulo="Concepto 1")
        .row.align-items-center.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Alta costura o #[em haute couture]
            p Se caracteriza por la elaboración de prendas exclusivas, confeccionadas a medida y solicitud de cliente, garantizando la exclusividad y no repetición de modelo en procesos de producción.  Este proceso es regulado por la Cámara Sindical de la Alta Costura, garantizando el proceso artesanal y de calidad llevado a cabo.       
          .col-md-5
            img(src='@/assets/curso/t4/img8.png', alt='Texto que describa la imagen')
      
      .py-3.py-md-4(titulo="Concepto 2")
        .row.align-items-center.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Listo para llevar o #[em prêt-à-porter]
            p La moda #[em prêt-à-porter] o listo para llevar, se caracteriza por producción de número reducido de prendas de un mismo modelo, siguiendo tendencias de alta costura y calidad de las prendas.   
          .col-md-5
            img(src='@/assets/curso/t4/img7.png', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Concepto 3")
        .row.align-items-center.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Pronta moda o #[em fast fashion]
            p.mb-4 En esta línea se maneja producción en masa de prendas cuyo fin es llegar al mayor número de personas posibles. Es un modelo de negocio que implementa estrategias de tendencias de corto plazo y calidad media baja en sus procesos de producción.
            p Esta línea ha sido cuestionada en los últimos años dado el alto impacto ambiental generado, por el uso de elementos tóxicos y desperdicio textil.
          .col-md-5
            img(src='@/assets/curso/t4/img9.png', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Concepto 4")
        .row.align-items-center.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Moda lenta o #[em slow fashion]
            p Línea surgida a partir del impacto ambiental generado en el #[em fast fashion], busca la circularidad de los productos en la reutilización de los materiales de las prendas usadas, así mismo, implementa estrategias para el cero impacto ambiental fomentando la sostenibilidad en la industria. 
          .col-md-5
            img(src='@/assets/curso/t4/img10.png', alt='Texto que describa la imagen')


    Separador  
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.3  Tipología de prendas masculinas

    p.mb-4 Las tipologías de las prendas se clasifican en función de la estructura corporal. Por esta razón, para completar la etapa de conceptualización, resulta necesario realizar una clasificación que permita identificar las partes de las prendas según la arquitectura del cuerpo. En este sentido, se presenta el siguiente video.

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
