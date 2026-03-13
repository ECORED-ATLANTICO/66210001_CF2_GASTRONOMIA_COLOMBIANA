<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
      cuestionario: {
        tema: 'Buenas Prácticas de manufactura en la Cocina Colombiana',
        titulo: 'Del plano al plato: reto de organización y protocolo',
        introduccion:
          '<b>Objeto:</b> evaluar y reforzar la capacidad del aprendiz para integrar los conocimientos sobre interpretación de recetas, técnicas, mise en place y protocolo, aplicándolos a la planificación de un evento gastronómico con identidad colombiana.',
        barajarPreguntas: true,
        titulo_aprobado: '¡BUEN TRABAJO!.',
        titulo_reprobado: 'VUELVA A INTENTARLO.',
        preguntas: [
          {
            id: 1,
            texto:
              'En una receta estándar profesional, el "rendimiento" se refiere únicamente al número total de porciones, sin importar su tamaño.',
            imagen: require('@/assets/actividad/imagen1.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'Correcto. Muy bien. El "rendimiento" en una receta estándar incluye de manera inseparable tanto el número como el tamaño específico de cada porción (Ej: "4 porciones de 250g"), ya que esto es crucial para el cálculo de costos y la presentación del plato.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 2,
            texto:
              'La técnica de corte "brunoise" produce dados de aproximadamente 1 cm de lado.',
            imagen: require('@/assets/actividad/imagen2.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'Exacto. El corte "brunoise" es un corte muy fino, que produce pequeños dados uniformes de entre 1 y 2 milímetros de lado, ideal para sofritos o guarniciones que deben integrarse completamente a una preparación.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 3,
            texto:
              'El salteado es un método de cocción por concentración que utiliza poco medio graso y fuego alto.',
            imagen: require('@/assets/actividad/imagen3.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Así es. El salteado busca sellar rápidamente los alimentos en una sartén con poca grasa, conservando su jugosidad interior mediante una cocción rápida a alta temperatura.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 4,
            texto:
              'El blanqueado es una técnica cuyo objetivo principal es cocinar completamente los vegetales.',
            imagen: require('@/assets/actividad/imagen4.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'Correcto. El blanqueado es un proceso breve de escaldado (30 segundos a 2 minutos) seguido de un enfriamiento brusco. Su propósito principal es fijar colores, ablandar pieles, eliminar sabores amargos o preparar vegetales para congelación, no cocinarlos por completo.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 5,
            texto:
              'El principio "Primero en Entrar, Primero en Salir" (PEPS) se aplica solo al almacenamiento de productos secos, no de perecederos.',
            imagen: require('@/assets/actividad/imagen1.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'Muy bien. El principio PEPS (FIFO en inglés) es fundamental para la rotación de TODO tipo de inventario. Es especialmente crítico para los productos perecederos y refrigerados, ya que es la herramienta principal para garantizar su frescura, evitar su vencimiento y prevenir el desperdicio.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 6,
            texto:
              'En la filosofía del mise en place, "todo debe tener un lugar y todo debe estar en su lugar" antes del servicio.',
            imagen: require('@/assets/actividad/imagen2.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Excelente. Esta es la máxima fundamental que define la esencia del mise en place. Es un sistema basado en la previsión y el orden metódico, que busca tener absolutamente todo preparado y organizado para garantizar la fluidez y eficiencia durante el servicio.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 7,
            texto:
              'Para un evento de cóctel (standing reception), la disposición ideal de mesas son mesas redondas grandes para que todos se sienten.',
            imagen: require('@/assets/actividad/imagen3.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'Así es. Para un cóctel o "standing reception", el objetivo es fomentar la circulación y el networking. Se utilizan mesas altas, pequeñas y dispersas para que los invitados apoyen sus bebidas y pasabocas, no para sentarse a comer formalmente.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 8,
            texto:
              'Durante el servicio formal, los platos se retiran de la mesa únicamente cuando todos los comensales en esa mesa han terminado de comer.',
            imagen: require('@/assets/actividad/imagen4.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto. Esta es la regla de oro de la etiqueta en el servicio a la mesa. Retirar los platos antes de que todos terminen es una falta de respeto hacia quienes comen más despacio y puede incomodarlos. Se espera la señal del anfitrión o se procede cuando toda la mesa ha finalizado.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 9,
            texto:
              'El término "chiffonade" se refiere a un tipo de corte en dados aplicable a cualquier vegetal.',
            imagen: require('@/assets/actividad/imagen1.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'Muy bien. La "chiffonade" es una técnica específica para hojas verdes (como lechuga, espinacas o hierbas aromáticas). Consiste en apilar las hojas, enrollarlas y cortarlas transversalmente en finas tiras o "cintas".',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 10,
            texto:
              'En la clasificación de métodos de cocción, el estofado es considerado un método mixto.',
            imagen: require('@/assets/actividad/imagen2.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Exacto. El estofado es el ejemplo clásico de un método mixto: comienza con un paso de concentración (dorar la carne en grasa) y luego continúa con un paso de expansión (cocer a fuego muy bajo, tapado y con líquido).',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 11,
            texto:
              'Una lista de verificación (checklist) es una herramienta opcional para el mise en place en cocinas pequeñas.',
            imagen: require('@/assets/actividad/imagen3.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'Excelente. Las listas de verificación son herramientas esenciales para asegurar la completitud y la consistencia en los preparativos, independientemente del tamaño de la operación. Evitan que se pasen por alto tareas críticas y son la base de un trabajo profesional y sistemático.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 12,
            texto:
              'Al ajustar una receta para más porciones, el tiempo de cocción de un guiso se multiplica por el mismo factor que los ingredientes.',
            imagen: require('@/assets/actividad/imagen4.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'Correcto. Los tiempos de cocción no escalan de manera proporcional (lineal) con la cantidad. Aumentar el volumen de un guiso puede requerir un tiempo de cocción ligeramente mayor, pero no el doble si se duplica la receta. Factores como el grosor del recipiente y la superficie de contacto con el calor influyen más.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 13,
            texto:
              'El "recogemigas" se utiliza en el servicio formal justo antes de presentar los postres.',
            imagen: require('@/assets/actividad/imagen1.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Así es. Este utensilio (también llamado "rascamigas") se emplea de manera discreta para limpiar las migajas de pan y otros residuos de la mesa después del plato principal, dejando el mantel limpio y preparado para la siguiente etapa del servicio (quesos, postres, café).',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 14,
            texto:
              'El protocolo de servicio dicta que las bebidas siempre se sirven por la izquierda del comensal.',
            imagen: require('@/assets/actividad/imagen2.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'Muy bien. La regla general es que las bebidas (agua, vino, licores) se sirven por la derecha del comensal. Los alimentos sólidos también se sirven por la derecha, a excepción del servicio a la inglesa (en bandeja por la izquierda).',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 15,
            texto:
              'La pre-preparación (mise en place) implica cocinar parcialmente los alimentos para ahorrar tiempo durante el servicio.',
            imagen: require('@/assets/actividad/imagen3.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'Cuidado. Esto es un error común. La pre-preparación eficiente lleva cada ingrediente al último paso reversible antes de la cocción o el montaje final (ej: cortar, pesar, marinar, preparar salsas frías). Cocinar parcialmente ("par-cook") es una decisión táctica específica que, si no se maneja con extrema precaución en tiempo y temperatura, puede comprometer la calidad, la textura y la seguridad del alimento.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 16,
            texto:
              'En un evento, la precedencia se refiere al orden de importancia para la ubicación y el servicio de los invitados.',
            imagen: require('@/assets/actividad/imagen4.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Exactamente. La "precedencia" es una regla fundamental del protocolo que establece el orden jerárquico (por cargo, edad, distinción, etc.) para organizar la ubicación en la mesa, el orden de las intervenciones y la secuencia del servicio, mostrando respeto y consideración.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 17,
            texto:
              'Filetear es una técnica aplicable solo a pescados, no a carnes rojas.',
            imagen: require('@/assets/actividad/imagen1.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'Muy bien. Filetear es una técnica de corte que consiste en extraer los lomos o filetes libres de huesos y piel. Se aplica tanto a pescados (filete de mojarra) como a carnes rojas y aves (filetear un lomo de res o una pechuga de pollo para obtener medallones).',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 18,
            texto:
              'La temperatura interna segura para cocinar pollo y destruir patógenos comunes es de 65°C.',
            imagen: require('@/assets/actividad/imagen2.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'Correcto. La temperatura mínima interna de seguridad para cocinar aves (pollo, pavo, pato) y garantizar la destrucción de bacterias como la Salmonella es de 74°C (165°F), medida en la parte más gruesa de la pieza con un termómetro de cocina.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 19,
            texto:
              'En la disposición de una mesa formal, los cubiertos se colocan en el orden en que se usarán, comenzando por los más alejados del plato.',
            imagen: require('@/assets/actividad/imagen3.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Excelente. Esta es una regla básica de la etiqueta en la mesa. El cubierto que se usará primero (generalmente el de la entrada) se coloca más hacia el exterior. El siguiente (el del plato principal) va más cerca del plato, y así sucesivamente. El comensal simplemente avanza desde afuera hacia adentro.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
          {
            id: 20,
            texto:
              'El objetivo final de integrar técnica, organización y protocolo es garantizar una experiencia gastronómica excelente, segura y memorable para el comensal.',
            imagen: require('@/assets/actividad/imagen4.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Perfecto. Esta integración define la esencia del profesional gastronómico moderno. La técnica asegura la calidad del plato; la organización garantiza la eficiencia, puntualidad y consistencia; y el protocolo eleva el servicio a una experiencia de hospitalidad refinada. Juntos, generan satisfacción, fidelidad y prestigio.',
            mensaje_incorrecto:
              'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
          },
        ],
        mensaje_final_aprobado:
          '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
        mensaje_final_reprobado:
          'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      },
  }),
}
</script>
