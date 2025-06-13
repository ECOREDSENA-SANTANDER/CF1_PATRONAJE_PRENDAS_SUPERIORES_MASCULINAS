<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.borde-recto-abajo
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Estructura del cuerpo

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
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

      p A continuación, podrá encontrar los conceptos relacionados a la estructura corporal.

      Separador  
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.1 Antropometría
          
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
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
              figcaption Fuente: https://www.timetoast.com/timelines/pasos-para-realizar-una-adecuada-evaluacion-nutricional-antropometrica


      .row.justify-content-center.align-items-center.bgazulclaro
        p.p-3 En el ámbito del vestuario, la antropometría se aplica mediante el análisis ergonómico, con el objetivo de diseñar prendas que se ajusten adecuadamente al cuerpo y faciliten el movimiento.

      Separador  
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.2 Anatomía

      .bloque-texto-g.bloque-texto-g--inverso.bgfondo11.p-3.p-sm-4.p-md-5(data-aos="fade-right")
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

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
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

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
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

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
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

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
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
        p.px-5.py-3.mt-2 #[b Por ello, uno de los desafíos en el diseño de moda es desarrollar prendas ergonómicas, considerando tanto la estructura corporal como los materiales utilizados en su confección. La selección textil y la construcción del patrón deben responder a criterios que aseguren movilidad, comodidad y ajuste eficiente.]

      .row.mb-4
        h3.pr-3.py-0 Relación entre conceptos y estructura corporal:
        .col-auto
          img.mover_sub(src='@/assets/curso/t1/linea1.png', alt='')

      .row.justify-content-center(data-aos="fade-right")
        .col-lg-4.col-md-12.col-sm-12
          img.mt-2(src='@/assets/curso/t1/img7.png', alt='')
        .col-lg-4.col-md-12.col-sm-12.p-3.mt-0
          .row.justify-content-center.align-items-center.mb-3.bgverdemate.px-4.py-2.borde-redondo
            .col-auto
              img(src='@/assets/curso/t1/img8.png', alt='')
            .col.mt-3
              h3.text-white.bgrojo.text-center Antropometría
              p Se relaciona con las medidas y proporciones corporales.
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
              p Abarca la postura y confort funcional.
        .col-lg-4.col-md-12.col-sm-12.p-3.mt-0
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
              p Forma y disposición de las partes del cuerpo.

      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.6 División del cuerpo

      .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
        .col-lg-3.col-md-5.col-sm-12
          img(src='@/assets/curso/t1/img13.png', alt='')
        .col-lg-9.col-md-12.col-sm-12
          p Con base en los conceptos previamente abordados, es fundamental comprender la división del cuerpo humano según sus segmentos anatómicos, ya que esta clasificación permite distinguir adecuadamente las prendas superiores e inferiores. Esta segmentación resulta esencial para el diseño, el patronaje y la correcta adaptación de las prendas al cuerpo, considerando criterios ergonómicos, funcionales y estéticos.

      .row.align-items-center.justify-content-center.mb-4(data-aos="fade")
        .col-lg-6.col-md-8.col-sm-12
          .row.justify-content-center.align-items-center.bgazulclaro2.py-4
            .col-lg-10.col-md-12.col-sm-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 4. 
                |  División del cuerpo
              figure
                img(src='@/assets/curso/t1/fig4.png', alt='La figura presenta la división anatómica del cuerpo humano en regiones principales. Incluye la cabeza, subdividida en cráneo y cara; el cuello; el tronco, compuesto por tórax, abdomen y pelvis; los miembros superiores, que abarcan brazo, antebrazo y mano; y los miembros inferiores, integrados por muslo, pierna y pie.')
        .col-lg-6.col-md-12.col-sm-12.px-5.py-0
          p.mb-5.mt-5 Teniendo en cuenta la segmentación corporal, las prendas de vestir se clasifican según los miembros superiores e inferiores, lo que permite definir su diseño, funcionalidad y ajuste de manera más precisa.
          .row.bgamarilloclaro.p-4.borde-redondo.mb-5
            h3.mb-5.mt-3 #[b Prendas superiores]
            ul.lista-ul--color.fa-al
              li 
                i.fas.fa-chevron-circle-right
                span.mb-0 #[b Hombros y cuello:] incluyen camisas, camisetas, blusas y chaquetas.
              li 
                i.fas.fa-chevron-circle-right
                span.mb-0 #[b Busto y torso:] comprende prendas como ropa interior o camisetas ajustadas, cuya adaptación depende de esta zona anatómica.
              li 
                i.fas.fa-chevron-circle-right
                span.mb-0 #[b Cintura:] punto de referencia clave para ajustar prendas superiores, influye en el entalle y caída de la prenda.
          .row.bgrosado.p-4.borde-redondo.mb-5
            h3.mb-5.mt-3 #[b Prendas inferiores]
            ul.lista-ul--color.fa-al
              li 
                i.fas.fa-chevron-circle-right
                span.mb-0 #[b Caderas y glúteos:] abarcan prendas como pantalones, bermudas, #[em leggins] y #[em shorts].
              li 
                i.fas.fa-chevron-circle-right
                span.mb-0 #[b Muslos y piernas:] zonas determinantes para el ajuste y la comodidad de las prendas inferiores.
              li 
                i.fas.fa-chevron-circle-right
                span.mb-0 #[b Tobillos y pies:] asociadas a prendas complementarias como medias o prendas de cobertura inferior.

      .row.mb-4
        h3.pr-3.py-0 Análisis morfológico aplicado al diseño de vestuario
        .col-auto
          img.mover_sub(src='@/assets/curso/t1/linea2.png', alt='')
      
      p.mb-4 Para desarrollar un diseño de vestuario funcional, estético y personalizado, es fundamental comprender los siguientes conceptos asociados al análisis morfológico del cuerpo humano:

      .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
        .col-lg-2.col-md-6.col-sm-12
          ul.lista-ul--color.fa-al
            li 
              i.fas.fa-chevron-circle-right
              span.mb-0 Estructura corporal
            li 
              i.fas.fa-chevron-circle-right
              span.mb-0 Anatomía
            li 
              i.fas.fa-chevron-circle-right
              span.mb-0 Cortes y ejes del cuerpo
        .col-lg-2.col-md-6.col-sm-12
          ul.lista-ul--color.fa-al
            li 
              i.fas.fa-chevron-circle-right
              span.mb-0 Antropometría
            li 
              i.fas.fa-chevron-circle-right
              span.mb-0 Ergonomía
            li 
              i.fas.fa-chevron-circle-right
              span.mb-0 Biomecánica
            li 
              i.fas.fa-chevron-circle-right
              span.mb-0 Somatotipos
        .col-lg-2.col-md-6.col-sm-12
          ul.lista-ul--color.fa-al
            li 
              i.fas.fa-chevron-circle-right
              span.mb-0 #[em Doshas]
            li 
              i.fas.fa-chevron-circle-right
              span.mb-0 Siluetas
            li 
              i.fas.fa-chevron-circle-right
              span.mb-0 Evaluación de plomos y posturas
        .col-lg-6.col-md-6.col-sm-12
          .row.bgverdemate.borde-redondo
            p.px-5.py-4.mt-2  Estos elementos permiten analizar cómo se comporta el cuerpo en movimiento y en reposo, facilitando una mejor adaptación de las prendas.
        
      .tarjeta.color-primario.p-3(data-aos="fade")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/t1/play.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Estructura del cuerpo
                p.mb-0 Para ampliar esta información, lo invitamos a consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=9UZwjgAYxMY" target="_blank")
                  span Ir al sitio
                  i.fas.fa-play-circle

      Separador
      #t_1_7.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.7 Tipos de siluetas

      p.mb-3 La tipología de silueta hace referencia a la apariencia general de la forma del cuerpo, determinada por la proporción y el volumen que proyecta la figura humana en dos y tres dimensiones. En el sector de la moda, resulta indispensable analizar la figura masculina para identificar qué prendas pueden favorecer a un cliente, según su tipo de silueta.
      p.mb-4 A continuación, se presentan las siluetas y somatotipos que deben considerarse en el patronaje de prendas de vestir:

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-12.col-md-12.col-sm-12
          .row.bgazulclaro2.align-items-center.justify-content-center
            .titulo-sexto.color-acento-contenido.mt-3
              h5 Figura 5. 
              |  Tipos de silueta masculina
            .col-lg-10.col-md-12.col-sm-12
              img.mb-4(src='@/assets/curso/t1/fig5.png', alt='Cinco figuras humanas masculinas en ropa interior representan diferentes tipos de silueta corporal: triángulo invertido, rectángulo, óvalo, triángulo y trapecio. Cada una está acompañada por un símbolo geométrico en la parte superior que ilustra su forma corporal característica.')

      .row.mb-4
        h3.pr-3.py-0 Tipos de siluetas reconocidas
        .col-auto
          img.mover_sub(src='@/assets/curso/t1/linea3.png', alt='')

      TabsA.color-acento-botones(data-aos="fade")
        .tarjeta.color-terciario.p-4(titulo="Tipo de silueta 1")
          .row.justify-content-center
            .col-lg-6.col-md-6.col-sm-12
              h3.mt-5.mb-4 Silueta V (triángulo invertido)
              p Corresponde a un cuerpo con hombros anchos, espalda amplia y cintura estrecha, lo que genera una forma similar a un triángulo invertido. Es una silueta común en figuras atléticas o con desarrollo muscular en la parte superior del torso.
            .col-lg-5.col-md-5.col-sm-12
              .row.bgblanco.borde-redondo.justify-content-center.align-items-center.p-3
                .titulo-sexto.color-acento-contenido
                  h5 Figura 6.
                  | Silueta triángulo invertido
                .col-lg-8.col-md-10.col-sm-12
                  img.mb-1(src='@/assets/curso/t1/fig6.png', alt='La figura representa una silueta corporal masculina con forma de triángulo invertido. Esta morfología se caracteriza por hombros anchos y torso amplio en comparación con una cintura y caderas más estrechas.')
        .tarjeta.color-terciario.p-4(titulo="Tipo de silueta 2")
          .row.justify-content-center
            .col-lg-6.col-md-6.col-sm-12
              h3.mt-5.mb-4 Silueta I (rectángulo)
              p Estructura corporal lineal, en la que los hombros, la cintura y la cadera presentan proporciones similares. Esta configuración genera una forma alargada y recta, sin marcadas curvas ni diferencias volumétricas entre los segmentos del torso.
            .col-lg-5.col-md-5.col-sm-12
              .row.bgblanco.borde-redondo.justify-content-center.align-items-center.p-3
                .titulo-sexto.color-acento-contenido
                  h5 Figura 7.
                  | Silueta rectangular
                .col-lg-8.col-md-10.col-sm-12
                  img.mb-1(src='@/assets/curso/t1/fig7.png', alt='Imagen presenta una figura humana masculina de pie. La complexión corporal expone proporciones similares entre los hombros, la cintura y las caderas, formando una silueta rectangular. Debajo de la figura se encuentra un símbolo rectangular que refuerza visualmente la forma corporal representada.')
        .tarjeta.color-terciario.p-4(titulo="Tipo de silueta 3")
          .row.justify-content-center
            .col-lg-6.col-md-6.col-sm-12
              h3.mt-5.mb-4 Silueta O (óvalo)
              p Corresponde a un cuerpo con predominancia de volumen en la zona media, especialmente en el abdomen. Esta silueta se caracteriza por una figura redondeada, con hombros y caderas menos marcados y un mayor desarrollo en el área central del torso.
            .col-lg-5.col-md-5.col-sm-12
              .row.bgblanco.borde-redondo.justify-content-center.align-items-center.p-3
                .titulo-sexto.color-acento-contenido
                  h5 Figura 8.
                  | Silueta redonda
                .col-lg-8.col-md-10.col-sm-12
                  img.mb-1(src='@/assets/curso/t1/fig8.png', alt='Se presenta una figura humana masculina de pie. La complexión corporal es ancha, con volumen pronunciado en el abdomen, el pecho y las caderas, formando una silueta ovalada. Debajo de la figura se encuentra un círculo sólido que representa gráficamente la forma corporal.')
        .tarjeta.color-terciario.p-4(titulo="Tipo de silueta 4")
          .row.justify-content-center
            .col-lg-6.col-md-6.col-sm-12
              h3.mt-5.mb-4 Silueta A (triángulo)
              p Estructura corporal en la que las caderas son más anchas que los hombros, generando una forma similar a un triángulo con la base hacia abajo. Es una silueta menos común en hombres, pero relevante al momento de diseñar prendas que equilibren visualmente las proporciones del cuerpo.
            .col-lg-5.col-md-5.col-sm-12
              .row.bgblanco.borde-redondo.justify-content-center.align-items-center.p-3
                .titulo-sexto.color-acento-contenido
                  h5 Figura 9. 
                  | Silueta en triángulo
                .col-lg-8.col-md-10.col-sm-12
                  img.mb-1(src='@/assets/curso/t1/fig9.png', alt='La imagen presenta una figura humana masculina de pie. La complexión corporal detalla mayor amplitud en la parte inferior, específicamente en caderas y muslos, mientras que el torso es más estrecho. Esta figura representa un somatotipo triangular. Debajo de la figura hay un triángulo apuntando hacia arriba, que simboliza la forma corporal.')
        .tarjeta.color-terciario.p-4(titulo="Tipo de silueta 5")
          .row.justify-content-center
            .col-lg-6.col-md-6.col-sm-12
              h3.mt-5.mb-4 Silueta trapecio
              p Estructura corporal con mayor amplitud en la parte superior, especialmente en los hombros, pero con una transición más suave hacia la cintura y las caderas. A diferencia de la silueta en V, esta presenta una forma menos angulosa y más equilibrada, con proporciones armónicas sin extremos marcados; es una de las siluetas masculinas más comunes y versátiles en el diseño de vestuario.
            .col-lg-5.col-md-5.col-sm-12
              .row.bgblanco.borde-redondo.justify-content-center.align-items-center.p-3
                .titulo-sexto.color-acento-contenido
                  h5 Figura 10.
                  | Silueta trapecio
                .col-lg-8.col-md-10.col-sm-12
                  img.mb-1(src='@/assets/curso/t1/fig10.png', alt='La imagen presenta una figura humana masculina de pie. La complexión corporal se destaca por una mayor amplitud en los hombros en comparación con la cintura y las caderas. Debajo de la figura se encuentra un triángulo apuntando hacia abajo, representando gráficamente la forma corporal.')


      p.mt-4 Aunque en el diseño y patronaje de prendas femeninas se trabaja ampliamente con la clasificación de siluetas, en el mercado masculino este abordaje es más generalizado. En su lugar, se prioriza la clasificación de la figura masculina a partir de los somatotipos, los cuales serán la base fundamental para el desarrollo del patronaje de prendas superiores de moda masculina.

      Separador
      #t_1_8.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.8 Somatotipos masculinos

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/t1/img14.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          br
          p.mb-0 El estudio de los somatotipos masculinos permite comprender las diferentes estructuras corporales presentes en los hombres, clasificándolas según características específicas como la distribución de la masa muscular, la proporción de grasa corporal y la forma general del cuerpo. Esta clasificación es fundamental en el proceso de patronaje, ya que permite desarrollar moldes más precisos y adaptados a la anatomía real de cada usuario.
            br
            br
            | Al considerar los somatotipos en el diseño de prendas superiores, se optimizan el ajuste, la funcionalidad y la comodidad, garantizando que cada modelo responda no solo a criterios estéticos, sino también a las necesidades ergonómicas y morfológicas propias de la figura masculina. 
          br
          br

      .row.justify-content-center.align-items-center.mb-5.bgamarilloclaro2.mt-4(data-aos="fade")
        .col-lg-10.col-md-12.col-sm-12
                  
          ImagenInfografica.color-secundario.mt-4
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t1/info1.png', alt='Texto que describa la imagen')

            .tarjeta.color-adiconal-1.p-3(x="16%" y="17%" numero="+")
              .h5.mb-2 Ectomorfo
              p El somatotipo ectomorfo se caracteriza por un cuerpo delgado, estructura ósea fina, hombros estrechos y bajo porcentaje de masa muscular. En el patronaje de prendas superiores masculinas, es clave incorporar recursos que generen volumen visual en el torso y los hombros. Se recomienda el uso de cortes que amplíen la estructura, como pinzas sutiles, mangas ligeramente más amplias o solapas estructuradas, buscando un ajuste equilibrado sin acentuar la delgadez natural.

            .tarjeta.color-adiconal-1.p-3(x="50%" y="17%" numero="+")
              .h5.mb-2 Mesomorfo
              p El mesomorfo presenta una complexión atlética, hombros anchos, cintura definida y musculatura visible. Este tipo corporal es ideal para patronajes estructurados que sigan la forma natural del cuerpo, permitiendo destacar las proporciones sin restringir el movimiento. En prendas superiores, se trabaja con moldes que respetan la línea del hombro y la espalda, cuidando que las pinzas y costados proporcionen entalle sin perder comodidad.

            .tarjeta.color-adiconal-1.p-3(x="84%" y="17%" numero="+")
              .h5.mb-2 Endomorfo
              p El endomorfo se distingue por una constitución más ancha, con tendencia a acumular masa en la zona abdominal y en el pecho. En el patronaje de prendas superiores, se priorizan patrones que ofrezcan mayor holgura en el contorno de pecho y cintura, incorporando ajustes que disimulen el volumen y optimicen la caída de la prenda. Las líneas verticales, costuras laterales estratégicas y cortes menos entallados son esenciales para favorecer la proporción del cuerpo.

      .subt2.mb-5(data-aos="fade-right")
        .row.align-items-center
          .col-md-auto.col-3
            img(src='@/assets/curso/t1/ico.png', alt='')
          .col-md-auto.col-9.ps-0
            h3.mb-0.text-black Relación entre somatotipo, percepción corporal y estrategia de diseño

      p.mb-5 El análisis morfológico masculino a través de los somatotipos no solo permite optimizar el ajuste de las prendas, sino que también responde a necesidades estéticas y simbólicas propias de cada usuario. El patronaje, en este contexto, se convierte en una herramienta para equilibrar proporciones, favorecer la movilidad y proyectar una imagen corporal deseada.

      .tarjeta--container.row.mb-4
        .col-md-12.col-lg-6.tarjeta.color1.p-4.p-md-4.p-lg-5(data-aos="fade-right")
          .row.justify-content-center.mb-4
            h3.mb-5.mt-2 Cada somatotipo plantea retos y oportunidades de diseño específicos:
            ul.lista-ul--color.fa-al
              li 
                i.fas.fa-chevron-circle-right
                span.mb-0 En el ectomorfo, el objetivo es compensar visualmente la linealidad del cuerpo.
              li 
                i.fas.fa-chevron-circle-right
                span.mb-0 En el mesomorfo, se busca acompañar y resaltar la estructura sin caer en rigidez.
              li 
                i.fas.fa-chevron-circle-right
                span.mb-0 En el endomorfo, el reto está en generar fluidez y verticalidad, disimulando acumulaciones sin limitar el confort.
        .col-md-12.col-lg-6.tarjeta.p-0(data-aos="fade-left")
          img(src='@/assets/curso/t1/img15.png', alt='')

      .tarjeta--container.row.mb-5
        .col-md-12.col-lg-6.tarjeta.p-0(data-aos="fade-right")
          img(src='@/assets/curso/t1/img16.png', alt='')
        .col-md-12.col-lg-6.tarjeta.color2.p-4(data-aos="fade-left")
          .row.justify-content-center
            h3.mt-5.mb-5 Consideraciones de diseño de prendas superiores masculinas:
            ul.lista-ul--color.fa-al
              li 
                i.fas.fa-chevron-circle-right
                span.mb-0 Funcionalidad y estética deben ir de la mano. No basta con que una prenda se vea bien; debe permitir el movimiento natural del cuerpo y responder a las particularidades de cada somatotipo.
              li 
                i.fas.fa-chevron-circle-right
                span.mb-0 El tipo de tejido y el corte son tan importantes como las medidas. Un buen diseño considera la caída del textil, su peso y comportamiento ante el uso.
              li 
                i.fas.fa-chevron-circle-right
                span.mb-0 La personalización del patronaje contribuye a la inclusión corporal. Entender la diversidad de cuerpos permite diseñar prendas más democráticas y emocionalmente significativas para quien las usa.

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
        .col-lg-12.col-md-12.col-sm-12
          .titulo-sexto.color-acento-contenido.mt-3
            h5 Tabla 1. 
            |  Comparativo entre somatotipos masculinos

          .tabla-a.color-secundario
            table(alt="Tabla comparativa que organiza la información sobre los tres somatotipos masculinos: ectomorfo, mesomorfo y endomorfo. Cada fila describe las características corporales, las estrategias de patronaje y las recomendaciones de diseño correspondientes a cada tipo de cuerpo. El contenido está distribuido en cuatro columnas que facilitan la lectura técnica y permiten identificar las diferencias morfológicas y sus implicaciones en el diseño de prendas superiores.")
              thead
                tr
                  th(style="width:130px") Somatotipo
                  th Características corporales
                  th Estrategia de patronaje
                  th Recomendaciones de diseño
              tbody
                tr
                  td(style="width:120px") Ectomorfo
                  td Figura delgada, hombros estrechos, extremidades largas y escaso desarrollo muscular.
                  td Favorecer la amplitud visual en hombros y torso. Evitar cortes demasiado ajustados que accentúen la delgadez.
                  td
                    | #[b Cuello:] mandarín o clásico estructurado.
                    br
                    | #[b Corte:] recto o semidesestructurado.
                    br
                    | #[b Textil:] algodones medianos o tejidos con cuerpo.
                tr
                  td(style="width:120px") Mesomorfo
                  td Complexión atlética, hombros anchos, cintura definida y torso proporcionado.
                  td Respetar y destacar la forma natural del cuerpo. Permitir movilidad sin perder ajuste moderado.
                  td
                    | #[b Cuello:] camisero italiano o de proporción media.
                    br
                    | #[b Corte:] #[em slim fit] moderado.
                    br
                    | #[b Textil:] algodones con elástico o tejidos flexibles.
                tr
                  td(style="width:120px") Endomorfo
                  td Estructura ancha, acumulación de volumen en abdomen y pecho, extremidades cortas en proporción.
                  td Buscar verticalizar la figura. Incorporar holgura controlada para estilizar el torso sin generar exceso de tela.
                  td
                    | #[b Cuello:] semiabierto o en “V” discreto.
                    br
                    | #[b Corte:] #[em regular fit] con leve ajuste en cintura baja.
                    br
                    | #[b Textil:] linos o algodones livianos y de caída fluida.

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-7.col-md-12.col-sm-12
          .tarjeta.color-primario
            .row.align-items-center.justify-content-center
              .col-auto
                img.px-3.py-4.mt-4.mb-5(src='@/assets/curso/t1/img18.png', alt='')
              .col
                p.mb-4.mt-5.mx-4 Lo invitamos a escuchar el siguiente pódcast:
                TarjetaAudio.color-secundario.mb-5.mx-2(
                  texto="Patronaje masculino y somatotipos"
                  :audio="require('@/assets/curso/t1/audio1.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

        .col-lg-5.col-md-7.col-sm-12
          img(src='@/assets/curso/t1/img17.png', alt='')



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
