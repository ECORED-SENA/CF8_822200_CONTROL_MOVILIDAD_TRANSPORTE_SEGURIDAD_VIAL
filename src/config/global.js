export default {
  global: {
    componenteFormativo: 'Primeros Auxilios',
    descripcionCurso:
      'Conocer las implicaciones y la responsabilidad en la respuesta ante un evento que requiera primeros auxilios es fundamental en la preservación de la vida, esto requiere conocimiento y capacitación para que esta atención sea pertinente y oportuna.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos legales en primeros auxilios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Procedimiento penal y civil',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Responsabilidad civil y penal',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas atención primeros auxilios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Técnicas de valoración',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de reanimación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Técnicas de inmovilización',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Características de las heridas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Conceptos de anatomía, fisiopatología y semiología',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Signos vitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Primer respondiente y técnicas de inmovilización',
        desarrolloContenidos: true,
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
      tema: '1. Fundamentos legales en primeros auxilios',
      referencia:
        'Ley 769 de 2002. Código Nacional de Tránsito Terrestre.  Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones.',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5557',
    },
    {
      tema: '1. Fundamentos legales en primeros auxilios',
      referencia:
        'Decreto 2106 de 2019.  Por el cual se dictan normas para simplificar, suprimir y reformar trámites, procesos y procedimientos innecesarios existentes en la administración pública.',
      tipo: 'WEB',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=103352',
    },
    {
      tema: '1. Fundamentos legales en primeros auxilios',
      referencia:
        'Decreto 663 de 1993. Por medio del cual se actualiza el Estatuto Orgánico del Sistema Financiero y se modifica su titulación y numeración.',
      tipo: 'WEB',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1348',
    },
    {
      tema: '1. Fundamentos legales en primeros auxilios',
      referencia:
        'Decreto 3990 de 2007.  Por el cual se reglamenta la Subcuenta del Seguro de Riesgos Catastróficos y Accidentes del Tránsito del Fondo de Solidaridad y Garantía, Fosyga, se establecen las condiciones de operación del aseguramiento de los riesgos derivados de daños corporales causados a las personas en accidentes de tránsito, eventos catastróficos y terroristas, las condiciones generales del seguro de daños corporales causados a las personas en accidentes de tránsito, Soat, y se dictan otras disposiciones.',
      tipo: 'WEB',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27568',
    },
    {
      tema: '1. Fundamentos legales en primeros auxilios ',
      referencia:
        'Ley 1438 de 2011. Por medio de la cual se reforma el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones.',
      tipo: 'WEB',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Normatividad/ley1438de2011.pdf',
    },
    {
      tema: '1. Fundamentos legales en primeros auxilios',
      referencia:
        'Ley 1702 de 2013.  Por la cual se crea la agencia nacional de seguridad vial y se dictan otras disposiciones.',
      tipo: 'WEB',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56286',
    },
    {
      tema: '1. Fundamentos legales en primeros auxilios',
      referencia:
        'Decreto 056 de 2015. Por el cual se establecen las reglas para el funcionamiento de la Subcuenta del Seguro de Riesgos Catastróficos y Accidentes de Tránsito (ECAT), y las condiciones de cobertura, reconocimiento y pago de los servicios de salud, indemnizaciones y gastos derivados de accidentes de tránsito, eventos catastróficos de origen natural, eventos terroristas o los demás eventos aprobados por el Ministerio de Salud y Protección Social en su calidad de Consejo de Administración del Fosyga, por parte de la Subcuenta ECAT del Fosyga y de las entidades aseguradoras autorizadas para operar el SOAT.',
      tipo: 'WEB',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=60483',
    },
    {
      tema: '1. Fundamentos legales en primeros auxilios',
      referencia:
        'Resolución 3823 de 2016.  Por la cual se establece el mecanismo para el reporte de información de la atención en salud a víctimas de accidentes de tránsito, así como las condiciones para la realización de las auditorías por las atenciones en salud brindadas a víctimas de estos eventos.',
      tipo: 'WEB',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%203823%20de%202016.pdf',
    },
    {
      tema: '1. Fundamentos legales en primeros auxilios',
      referencia:
        'Resolución 926 de 2017.  Por la cual se reglamenta el desarrollo y operación del Sistema de Emergencias Médicas.',
      tipo: 'WEB',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resolucion%20No.926%20de%202017.pdf',
    },
    {
      tema: '1.2 Responsabilidad civil y penal',
      referencia:
        'Ley 906 de 2004.  Por la cual se expide el Código de Procedimiento Penal.',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=14787',
    },
    {
      tema: '1.2 Responsabilidad civil y penal',
      referencia:
        'Ley 600 de 2000.  Por la cual se expide el Código de Procedimiento Penal.',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6389',
    },
    {
      tema: '1.2 Responsabilidad civil y penal',
      referencia: 'Constitución Política de Colombia 1991.',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      tema: '5. Signos vitales',
      referencia:
        'Cruz Roja Guatemalteca. Qué hacer en caso de un accidente de tránsito. [ video] YouTube.',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=T8mBPOxcQrc',
    },
  ],
  glosario: [
    {
      termino: 'Accidente de tránsito',
      significado:
        'Es el que ocurre sobre la vía y se presenta súbita e inesperadamente, determinado por condiciones y actos irresponsables potencialmente previsibles, atribuidos a factores humanos, vehículos preponderantemente automotores, condiciones climatológicas, señalización y caminos, los cuales ocasionan pérdidas prematuras de vidas humanas y/o lesiones, así como secuelas físicas o psicológicas, perjuicios materiales y daños a terceros.',
    },
    {
      termino: 'Primeros auxilios',
      significado:
        'Asistencia de urgencia que se presta a una persona en caso de accidente o enfermedad repentina.',
    },
    {
      termino: 'Víctimas',
      significado:
        'Se refiere a las personas heridas o muertas en accidentes de tránsito. Se considera herida a la persona lesionada, grave o leve, en accidente de tránsito; y muerta a la que fallece como consecuencia del accidente.',
    },
  ],
  referencias: [
    {
      referencia: 'Agencia Nacional de Seguridad Vial. (2022). Indicadores.',
      link: 'https://ansv.gov.co/observatorio/estad%C3%ADsticas',
    },
    {
      referencia: 'DiccioMed. (2008). Definición de anatomía.',
      link: 'https://dicciomed.usal.es/palabra/anatomia',
    },
    {
      referencia: 'Ministerio de Transporte. (2022). Glosario.',
      link: 'https://www.mintransporte.gov.co/glosario/',
    },
    {
      referencia:
        'Olivero,  R. & Barraez, C.(2011). Importancia de la semiología médica en la adquisición de competencias de un médico.',
      link:
        'http://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1316-71382011000300009',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2022). Traumatismos causados por el tránsito.',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/road-traffic-injuries',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2018). Nuevo informe de la OMS destaca que los progresos han sido insuficientes en abordar la falta de seguridad en las vías de tránsito de todo el mundo.',
      link:
        'https://www3.paho.org/hq/index.php?option=com_content&view=article&id=14857:new-who-report-highlights-insufficient-progress-to-tackle-lack-of-safety-on-the-world-s-roads&Itemid=0&lang=es#gsc.tab=0',
    },
    {
      referencia:
        'Universidad de Valencia. (2015). Fisiopatología: todo lo que debes saber.',
      link:
        'https://www.uv.es/uvweb/master-fisiologia/es/blog/fisiopatologia-todo-lo-debes-saber-1285952573044/GasetaRecerca.html?id=1285953135299',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Líder equipo diseño curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Juan Carlos García Vargas',
        cargo: 'Experto temático',
        centro:
          'Regional Distrito Bogotá - Centro de Tecnologías del Transporte',
      },
      {
        nombre: 'Ana Vela Rodríguez Velasquez ',
        cargo: 'Diseñadora instruccional ',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial.',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
