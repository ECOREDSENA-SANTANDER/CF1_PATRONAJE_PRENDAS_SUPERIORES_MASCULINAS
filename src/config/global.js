export default {
  global: {
    Name: 'Estructura corporal masculina',
    Description:
      'Reconocer la estructura corporal masculina ofrece una comprensión integral del movimiento, los somatotipos y la medición antropométrica. Este componente aborda desde los fundamentos de la antropometría hasta las técnicas aplicadas al cuerpo masculino, permitiendo traducir datos tridimensionales en planos 2D para el patronaje industrial. Además, se destaca la relevancia de las bases textiles en la confección de prendas superiores, optimizando ajuste, caída y confort en la moda casual masculina.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estructura del cuerpo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Antropometría',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Anatomía',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Biomecánica',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Morfología',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Ergonomía',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'División del cuerpo',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Tipos de siluetas',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Somatotipos masculinos',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis y clasificación de las medidas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sistemas de medidas – clasificación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Las medidas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis de medidas y cuadro de tallas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Medidas deducidas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Proporciones en la deducción de medidas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Moda y sistema moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Universos del vestuario',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Gamas de mercados',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tipología de prendas masculinas',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Aprovechamiento',
            hash: 't_5_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Universos del vestuario',
      referencia:
        'Turnes, C. (2021).  Moda y vestuario: universos paralelos con infinitas posibilidades de encuentro.  Cuadernos del Centro de Estudios de Diseño y comunicación, (100), p. 138-148.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001435054&context=PC&vid=SENA&lang=es_ES&search_scope=sena_completo&adaptor=primo_central_multiple_fe&tab=sena_completo&query=any,contains,universos%20del%20vestuario&mode=Basic',
    },
  ],
  glosario: [
    {
      termino: '<em>Atelier</em>',
      significado: 'taller de creación de moda.',
    },
    {
      termino: 'Bidimensional',
      significado:
        'se representa según su altura y su anchura, y no su profundidad.',
    },
    {
      termino: 'Diseño',
      significado:
        'actividad creativa orientada a soluciones idóneas a ciertas problemáticas.',
    },
    {
      termino: 'Estilo',
      significado:
        'manifestación personal de cada individuo según las características propias y comunicación a través de su actividad y vestuario. En el estilo se manifiesta la identidad de la persona que está fundamentada en la unidad que se refleja a partir de la relación existente entre el ser y su aspecto exterior o la apariencia.',
    },
    {
      termino: '<em>Outfit</em>',
      significado:
        'conjunto de prendas combinadas de una manera determinada. Designa un entendiendo concreto, pero su uso se ha popularizado hasta el punto de emplearse como sinónimo del término genérico conjunto.',
    },
    {
      termino: 'Corte asimétrico',
      significado:
        'estructura de las prendas, más cortas por delante que por detrás, con la que se consigue el llamado «efecto cula» en faldas y vestidos.',
    },
    {
      termino: 'Tipología',
      significado:
        'estudio de los tipos o modelos que se usan para clasificar en diversas ciencias y disciplinas.',
    },
    {
      termino: '<em>T-shirt</em>',
      significado: 'camiseta.',
    },
    {
      termino: 'Estándar',
      significado:
        'que sirve de patrón, modelo y punto de referencia para medir y evaluar cosas de la misma especie.',
    },
    {
      termino: 'Talla',
      significado:
        'expresión normalizada que permite identificar a las personas para el uso de prendas de vestir.',
    },
    {
      termino: 'Trazo de un plano',
      significado:
        'en lo referente al oficio del patronista, el trazo de un plano hace referencia a la estructura de los patrones básicos que posteriormente se convertirán en moldes.',
    },
    {
      termino: 'Patronaje',
      significado:
        'oficio dedicado a la creación de patrones en la línea de vestuario que permitan la construcción de prendas de vestir.',
    },
    {
      termino: 'Molde',
      significado:
        'término usado en el patronaje para señalar que después del trazado de planos se llegan a abstraer los elementos que permiten proceder con el corte del textil.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barbero, S., & Cozzo, B. (2010). Habemus Vestem, la moda acude a la llamada de Dios. Revista Diagonal, 10, 6.',
      link: '',
    },
    {
      referencia:
        'Cabrera, R. (2016). Introducción a la anatomía normal y funcional. Universidad Nacional del Nordeste.',
      link:
        'https://med.unne.edu.ar/wp-content/uploads/2018/04/introduccion_a_la_anatomia-1_trayecto.pdf',
    },
    {
      referencia:
        'Dearing, J. W. (2009). Applying diffusion of innovation theory to intervention development. Research on Social Work Practice, 19(5), 503–518.',
      link: 'https://doi.org/10.1177/1049731509335569',
    },
    {
      referencia:
        'Equipo de Desarrollo Curricular, SENA. (2020). Programa Técnico en Patronaje Industrial de Prendas de Vestir. Centro de Manufactura en Textil y Cuero, Distrito Capital.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez Rengifo, L., Moncayo Velazco, A. X., Tanaka, K., Kimura, F., & Moreno Brand, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje (SENA) & Japan International Cooperation Agency (JICA).',
      link: '',
    },
    {
      referencia:
        'Hall, S. J. (2021). Basic biomechanics (9th ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, M. L. (2014). Patronaje y confección en textil y piel: prendas de vestir femeninas. IC Editorial.',
      link: '',
    },
    {
      referencia:
        'International Ergonomics Association. (2000). Definition of ergonomics. ',
      link: '',
    },
    {
      referencia:
        'Kawamura, Y. (2023). Fashion-ology: An Introduction to Fashion Studies. Bloomsbury Publishing.',
      link: '',
    },
    {
      referencia:
        'Kawamura, Y. (2005). Fashion-ology: An introduction to fashion studies. Berg.',
      link: '',
    },
    {
      referencia:
        'King, C. W. (1965). Fashion adoption: A rebuttal to the trickle-down theory.',
      link: '',
    },
    {
      referencia:
        'Mendizábal, R. (2020). Historia y evolución de la alta costura. Editorial de Moda y Diseño.',
      link: '',
    },
    {
      referencia:
        'Norton, K. (2019). Anthropometry and biomechanics: Foundations for human movement analysis. Routledge.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (1995). El estado físico: Uso e interpretación de la antropometría.',
      link: 'https://www.who.int/es/publications/i/item/9241208546',
    },
    {
      referencia:
        'Paredro. (2021). Fractales, geometría y otros juegos matemáticos en la moda de hoy.',
      link: '',
    },
    {
      referencia:
        'Posner, H. (2016). Marketing de moda (2ª ed.). Editorial Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Salinas, R. (1994). Color harmony 2. La armonía en el color, nuevas tendencias, Guía para la combinación creativa de colores. Editorial La Armonía del Color.',
      link: '',
    },
    {
      referencia:
        'Sierra Landines, L. M., & Mosquera Ochoa, D. (2013). El cuerpo como fundamento para el diseño de vestuario: Estudio morfológico y anatómico del cuerpo humano a través de la biomecánica y la ergonomía (Trabajo de grado). Universidad Pontificia Bolivariana, Medellín, Colombia.',
      link: '',
    },
    {
      referencia:
        'Universidad de Málaga. (2022). Módulo 1: Morfología, estructura y función del cuerpo humano. ',
      link:
        'https://www.uma.es/grado-en-medicina/navegador_de_ficheros/DOCUMENTACION_ANEXA_MEMORIA_MODIFICACION_SEPT_2022/descargar/CONTENIDOS%20MODULOS%20MATERIAS%20ASIGNATURAS.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander ',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
