export default {
  global: {
    Name: 'Mise en place y técnicas de preparación en la cocina colombiana',
    Description:
      'Este componente formativo desarrolla las competencias para interpretar recetas estándar, ejecutar técnicas de corte y cocción propias de la cocina colombiana, aplicar los principios del mise en place eficiente y seleccionar los protocolos de organización y etiqueta para eventos gastronómicos, integrando la tradición culinaria con los estándares profesionales de servicio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
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
        titulo: 'Interpretación de recetas y vocabulario gastronómico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estructura y componentes de una receta estándar profesional',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Vocabulario y terminología técnica específica',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Secuenciación lógica de operaciones: del mise en place a la presentación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Ajuste de porciones y cálculo de rendimiento e incidencia de costo',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de corte y pre-preparación en la cocina colombiana',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Principios de las operaciones unitarias en cocina',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de corte para vegetales: cortes clásicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Técnicas de corte para proteínas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Fundamentos de la manipulación y conservación previos a la cocción',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Métodos y técnicas de cocción aplicados a la gastronomía nacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Clasificación de los métodos de cocción',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Cocción en medio graso',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Cocción en medio acuoso y al vapor',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Cocción en medio aéreo y por radiación',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Cocción mixta',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Principios y aplicación del mise en place eficiente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Definición, filosofía y beneficios del mise en place',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Organización de la estación de trabajo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'La pre-preparación como eje de la eficiencia operativa',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Tipos de residuos sólidos y sus vías de segregación y disposición',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Gestión del tiempo y flujo de trabajo en cocina',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Protocolo, etiqueta y organización para eventos gastronómicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Conceptos de protocolo y etiqueta aplicados al servicio de alimentos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Organización de salones y disposición de mesas según el tipo de evento',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Elementos de mise en place para servicio formal y de banquete',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'El rol del anfitrión y la secuencia de servicio en un evento formal',
            hash: 't_5_4',
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
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Ablandamiento',
      significado:
        'Proceso mediante el cual se modifican las fibras de un alimento (generalmente proteínas) para lograr una textura más suave, ya sea por cocción lenta, marinado o métodos mecánicos.',
    },
    {
      termino: 'Blanqueado',
      significado:
        'Operación de pre‑preparación que consiste en sumergir el alimento 30 s a 2 min en agua hirviendo y luego enfriarlo rápidamente en agua con hielo para fijar color, reducir amargor o facilitar el pelado sin cocinar completamente.',
    },
    {
      termino: 'Braseado',
      significado:
        'Método de cocción mixta que combina dorado inicial en grasa y cocción lenta posterior con líquido en recipiente tapado.',
    },
    {
      termino: 'Brunoise',
      significado:
        'Corte en pequeños dados de 1 a 2 mm de lado, utilizado para bases de sabor que deben integrarse completamente.',
    },
    {
      termino: 'Cadencia de servicio',
      significado:
        'Ritmo organizado y sincronizado de producción y despacho de platos durante el servicio.',
    },
    {
      termino: 'Chiffonade',
      significado:
        'Técnica de corte para hojas verdes que consiste en enrollarlas y cortarlas transversalmente en tiras muy finas.',
    },
    {
      termino: 'Cocción mixta',
      significado:
        'Método que combina concentración (sellado) y expansión (cocción en líquido).',
    },
    {
      termino: 'Cocción por concentración',
      significado:
        'Método que sella el alimento para conservar sus jugos internos (Ej. freír, asar).',
    },
    {
      termino: 'Deshuesado',
      significado:
        'Técnica que consiste en retirar los huesos de carnes o aves sin dañar su estructura.',
    },
    {
      termino: 'Escalfar',
      significado:
        'Método de cocción suave en líquido a temperatura inferior a la ebullición (80-95°C), ideal para alimentos delicados.',
    },
    {
      termino: 'Estofado',
      significado:
        'Cocción mixta lenta, en recipiente cerrado, que integra sabores y ablanda carnes.',
    },
    {
      termino: 'Filetear',
      significado:
        'Técnica de extraer los lomos o filetes de un pescado o una pieza de carne, libres de espinas, piel y grasa excesiva.',
    },
    {
      termino: 'Flujo de trabajo',
      significado:
        'Organización secuencial de tareas para optimizar tiempo y recursos en cocina.',
    },
    {
      termino: 'Fondo (caldo base)',
      significado:
        'Líquido aromático obtenido de huesos, espinas y vegetales cocidos a fuego controlado, que sirve como base estandarizada para sopas, salsas y guisos, aportando sabor, cuerpo y consistencia.',
    },
    {
      termino: 'Guéridon (carro de servicio)',
      significado:
        'Mesa o carro auxiliar de sala equipado con utensilios (pinzas, salseras, quemadores) para montar, trinchado, salseado o flambear junto a la mesa del comensal, optimizando la fluidez y la etiqueta en eventos formales.',
    },
    {
      termino: 'Lixiviación',
      significado:
        'Pérdida de nutrientes o sabor soluble al cocinar en abundante agua.',
    },
    {
      termino: 'Macedonia',
      significado:
        'Corte en dados medianos (1–1,5 cm), ampliamente usado para frutas en postres o ensaladas; favorece la mezcla de sabores y una presentación atractiva con bocados uniformes.',
    },
    {
      termino: 'Macerado/Marinado',
      significado:
        'Proceso de inmersión en líquidos aromáticos para ablandar e impregnar sabor.',
    },
    {
      termino: 'Mechado',
      significado:
        'Técnica aplicada a piezas magras y grandes de carne en la que se insertan tiras de ingredientes (tocino, zanahoria, ajo) para aportar grasa, jugosidad y sabor durante cocciones prolongadas (horno o braseado).',
    },
    {
      termino: 'Mise en place',
      significado:
        'Filosofía y práctica de preparación metódica que organiza ingredientes, utensilios y tareas antes del servicio para garantizar eficiencia.',
    },
    {
      termino: 'Protocolo',
      significado:
        'Conjunto de normas establecidas para la organización y desarrollo formal de un evento o acto social.',
    },
    {
      termino: 'Receta estándar',
      significado:
        'Documento profesional que especifica ingredientes, cantidades, procedimiento, rendimiento y costos para garantizar consistencia.',
    },
    {
      termino: 'Saltear',
      significado:
        'Método de cocción rápida a fuego alto con poco medio graso y constante movimiento, para sellar y cocinar al dente.',
    },
    {
      termino: 'Secuencia de servicio',
      significado:
        'Orden establecido para servir alimentos y bebidas en un evento formal, siguiendo normas de etiqueta y precedencia.',
    },
    {
      termino: 'Torneado (Tourné)',
      significado:
        'Técnica de corte para dar forma ovalada y regular, de 5–7 caras a vegetales (p. ej., papa criolla o ñame), buscando uniformidad de cocción y presentación gourmet como guarnición.',
    },
    {
      termino: 'Zona de peligro',
      significado:
        'Rango de temperatura entre 4°C y 60°C donde las bacterias patógenas en los alimentos se multiplican más rápidamente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación Colombiana de Gastronomía (ACODEG). (2021). <em>Manual de estándares operativos para restaurantes</em>. ACODG.',
    },
    {
      referencia:
        'Federación Colombiana de Ganaderos (FEDEGÁN). (2023). <em>Cortes de carne bovina y su aplicación</em>. https://www.fedegan.org.co/estadisticas/cortes-carne',
    },
    {
      referencia:
        'García, M. (2019). <em>Gestión de la productividad en cocinas profesionales</em>. Revista Latinoamericana de Gastronomía, 12(3), 45-59.',
    },
    {
      referencia:
        'Gisslen, W. (2015). <em>Professional Cooking</em> (8th ed.). John Wiley & Sons. (Consultado extractos en Google Books).',
    },
    {
      referencia:
        'International Butler Academy. (2019). <em>The International Service Guide</em>. IBA.',
    },
    {
      referencia:
        'McGee, H. (2004). <em>La cocina y los alimentos. Enciclopedia de la ciencia y la cultura de la comida</em>.',
    },
    {
      referencia:
        'Ministerio de Salud. (10 de diciembre de 1997). <em>Decreto 3075 de 1997</em>. Diario Oficial No. 43246. https://www.minsalud.gov.co/Normatividad_Nuevo/DECRETO%203075%20DE%201997.pdf',
    },
    {
      referencia: 'Roca, J. (2018). <em>El lenguaje de la cocina</em>. Planeta Gastro.',
    },
    {
      referencia:
        'SENA. (2020). <em>Manual de técnicas culinarias básicas</em>. Dirección de Formación Profesional.',
    },
    {
      referencia:
        'SENA. (2022). <em>Protocolo y servicio en eventos [Curso en línea]</em>. Territorio LA.',
    },
    {
      referencia:
        'SENA. (s.f.). <em>Material de Apoyo MA: Platos típicos (Historia Afrocolombiana)</em>. (Documento base para contexto cultural).',
    },
    {
      referencia:
        'SENA. (s.f.). <em>Material de Formación MF_2_A: Platos característicos regiones Andina y Orinoquía</em>. Centro Agroindustrial Regional Quindío.',
    },
    {
      referencia:
        'SENA. (s.f.). <em>Material de Formación MF_2_B: Platos característicos regiones Amazonía, Caribe y Pacífica</em>. Centro Agroindustrial Regional Quindío.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yina Paola Castro Zarate',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
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
