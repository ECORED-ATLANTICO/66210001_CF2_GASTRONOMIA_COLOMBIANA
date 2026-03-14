<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Métodos y técnicas de cocción aplicados a la gastronomía nacional

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bg-color-97.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El fuego y el calor son los grandes transformadores de la cocina, los alquimistas que convierten materias primas en experiencias sensoriales completas. Este capítulo explora el vasto universo de los métodos de cocción, entendidos no como una mera aplicación de temperatura, sino como procesos fisicoquímicos que modifican texturas, desarrollan sabores, concentran o expanden jugos y, sobre todo, garantizan la inocuidad. 
        
    .row.justify-content-center.mb-3
      .col-md-12.col-lg-10
        .row.mb-0.justify-content-center.align-items-center
          .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0.order-2.order-md-1.order-lg-1
            figure
              img(src="@/assets/curso/tema3/img02.png", data-aos="zoom-in")
          .col-lg-9.order-1.order-md-2.order-lg-2.mb-4.mb-lg-0
            p.mb-0(data-aos="fade-right") En la gastronomía colombiana, donde convergen técnicas ancestrales con influencias globales, el dominio de estos métodos es lo que permite respetar la esencia de un ingrediente regional mientras se logra el punto de cocción perfecto. Desde el rápido salteado que preserva la crujiente textura de un vegetal andino, hasta la lenta cocción en olla de barro que ablanda y amalgama los sabores de un sancocho costeño, cada técnica es una herramienta con un propósito definido. Comprender su clasificación, medios y efectos es lo que separa al cocinero intuitivo del chef técnico.

    separador

    .row.justify-content-center.mb-4
      .col-md-12.col-lg-10
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Clasificación de los métodos de cocción

        p.mb-0(data-aos="fade-right") Para poder seleccionar y aplicar el método de cocción más adecuado, es imprescindible clasificarlos según su efecto principal sobre los jugos y la textura del alimento. Esta taxonomía organiza las técnicas en tres grandes familias. 

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10
        TabsA.color-primario
          .tarjeta.color-acento-botones--borde.p-4(titulo="Medio acuoso:")
            .row.justify-content-center.align-items-center
              .col-12.col-md-6.col-lg-2.mb-3.mb-lg-0.order-lg-1
                figure
                  img(src="@/assets/curso/tema3/img03.svg", data-aos="zoom-in", style="max-width: 100px;").mx-auto
              .col-lg-10.order-lg-2
                p.mb-3 El medio acuoso o también como métodos por expansión, es aquel que busca transferir los sabores del alimento al medio de cocción, resultando en caldos, jugos y texturas tiernas. 
                p.mb-3 Aquí el calor se aplica de manera húmeda y a temperaturas más moderadas. Pertenece a este grupo hervir, escalfar, cocer al vapor y confitar. 
                p.mb-0 Se emplean para alimentos que se desean extremadamente tiernos, para extraer sabores (como en un caldo para sopa) o para cocinar ingredientes delicados, como un "Pescado escalfado en leche de coco".
          
          .tarjeta.color-acento-botones--borde.p-4(titulo="Medio graso:")
            .row.justify-content-center.align-items-center
              .col-12.col-md-6.col-lg-2.mb-3.mb-lg-0.order-lg-1
                figure
                  img(src="@/assets/curso/tema3/img04.svg", data-aos="zoom-in", style="max-width: 100px;").mx-auto
              .col-lg-10.order-lg-2
                p.mb-3 El medio graso o también conocido como métodos mixtos, combinan ambas lógicas: inician con un paso de concentración (dorar) y continúan con uno de expansión (cocinar en líquido). El guisado, el estofado y el braseado son sus máximos exponentes. 
                p.mb-0 Estas técnicas son el alma de la cocina de cacerola colombiana, perfectas para cortes de carne menos tiernos pero llenos de sabor, que mediante una cocción prolongada y a baja temperatura en un medio sabroso, se vuelven melosos y profundos, como en un "Estofado de pollo" o un "Brasato de cerdo".
          
          .tarjeta.color-acento-botones--borde.p-4(titulo="Medio aéreo:")
            .row.justify-content-center.align-items-center
              .col-12.col-md-6.col-lg-2.mb-3.mb-lg-0.order-lg-1
                figure
                  img(src="@/assets/curso/tema3/img05.svg", data-aos="zoom-in", style="max-width: 100px;").mx-auto
              .col-lg-10.order-lg-2
                p.mb-3 El medio aéreo o también conocido como métodos por concentración, tiene como objetivo sellar y retener los jugos internos del alimento, aplicando calor intenso y seco que forma una costra externa. 
                p.mb-0 En esta categoría se incluyen técnicas como asar a la parrilla, hornear, saltear y freír. Son ideales para piezas tiernas de carne, pescados grasos o vegetales que se desean con textura externa crujiente e interior jugoso, como un corte de "Lomo de res a la parrilla" o unas "Patacones".

    separador

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.2 Cocción en medio graso

        p.mb-0(data-aos="fade-right") La cocción en un medio graso (aceite, mantequilla clarificada, manteca) es una de las más versátiles y extendidas, capaz de transferir calor a altas temperaturas y generar reacciones de sabor únicas.


    .bg-full-width.bg-fondo-5.tarjeta.mb-5
      .p-4.px-lg-2
        SlyderA(tipo="b").bg-color-white.p-3.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-2
            .col-lg-5.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0(data-aos="fade-right") <b>Rehogar o sofreír</b> es la técnica base de innumerables preparaciones colombianas. Consiste en cocinar a fuego medio-bajo ingredientes picados finamente (cebolla, ajo, tomate, pimentón) en una cantidad moderada de grasa, con el objetivo de que suelten sus jugos, se ablanden y sus azúcares se caramelicen lentamente sin dorarse en exceso, creando la base de sabor conocida como "hogao" o "refrito". Es el primer paso para guisos, arroces y salsas. 

            .col-md-8.col-lg-7
              figure
                img(src="@/assets/curso/tema3/img06.png", alt="Rehogar o sofreír").mx-auto
          
          .row.justify-content-center.align-items-center.p-2
            .col-lg-5.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0(data-aos="fade-right") <b>Saltear</b> es una técnica de cocción rápida a fuego alto, con muy poco medio graso y constante movimiento del alimento (del francés sauter, saltar). Su objetivo es sellar, dorar ligeramente y cocinar al dente, preservando color, textura y nutrientes. Es ideal para vegetales como las vainitas, los champiñones o trozos pequeños de pollo o carne, resultando en platos como un "Salteado de carne con verduras".

            .col-md-8.col-lg-7
              figure
                img(src="@/assets/curso/tema3/img07.png", alt="Saltear").mx-auto
          
          .row.justify-content-center.align-items-center.p-2
            .col-lg-5.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0(data-aos="fade-right") La <b>fritura</b> sumerge el alimento completamente en un medio graso abundante y a alta temperatura (entre 160°C y 180°C). El calor intenso y uniforme crea una costra crujiente y dorada instantáneamente, mientras sella el interior, cocinándolo con su propio vapor.

            .col-md-8.col-lg-7
              figure
                img(src="@/assets/curso/tema3/img08.png", alt="Fritura").mx-auto

    .container
      .row.justify-content-center.mb-0
        .col-md-12.col-lg-10
          .row.justify-content-center.align-items-center.bg-color-11
            .col-lg-9.mb-3.mb-lg-0
              p.mb-0.p-4(data-aos="fade-right")  En Colombia, la fritura es una técnica emblemática, presente en los "Aborrajados", las "Arepas de Huevo", las "Empanadas" y los "Patacones". La clave para una fritura perfecta es controlar la temperatura del aceite; si está muy baja, el alimento lo absorbe y queda grasoso; si está muy alta, se quema por fuera y queda crudo por dentro.
            .col-md-6.col-lg-3
              figure
                img(src="@/assets/curso/tema3/img09.svg", data-aos="zoom-in")
                
    separador

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.3 Cocción en medio acuoso y al vapor

        p.mb-0(data-aos="fade-right") El agua, en sus diferentes estados y temperaturas, actúa como un medio de cocción suave y controlado, permitiendo transferir calor de forma uniforme sin dañar la estructura de los alimentos. Este método preserva texturas, colores y nutrientes, especialmente en ingredientes delicados como verduras y pescados. Además, favorece técnicas como hervido, escalfado y cocción al vapor, fundamentales en preparaciones tradicionales que requieren suavizar, extraer o conservar sabores.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10
        .row.justify-content-center.align-items-center
          .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/img10.png", data-aos="zoom-in")
          .col-lg-9
            AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-18")
              div(titulo="Hervir").p-4
                .row.justify-content-center.align-items-center
                  .col-lg-7.mb-4.mb-lg-0
                    p.mb-0 Hervir implica sumergir el alimento en agua o un caldo a 100°C, con burbujas constantes. Es un método de expansión agresivo, ideal para cocinar pastas, granos (arroz, lentejas) y para ablandar rápidamente tubérculos duros (yuca, papa para sancocho). Sin embargo, puede lixiviar (extraer) nutrientes y sabores solubles en el agua, por lo que ese líquido de cocción a menudo se aprovecha, como en el caldo de un "Sancocho". 
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema3/img11.png", data-aos="zoom-in")
              
              div(titulo="Escalfar").p-4
                .row.justify-content-center.align-items-center
                  .col-lg-7.mb-4.mb-lg-0
                    p.mb-0 Escalfar es una cocción suave en un líquido (agua, caldo, leche) que se mantiene justo por debajo del punto de ebullición, entre 80°C y 95°C, con temblores apenas perceptibles en la superficie. Es perfecto para alimentos delicados cuya textura se dañaría con el hervor violento, como los huevos (huevos escalfados), los pescados de carne blanda ("Pescado escalfado en vino blanco") o algunas frutas.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema3/img12.png", data-aos="zoom-in")
              
              div(titulo="Cocción al vapor").p-4
                .row.justify-content-center.align-items-center
                  .col-lg-7.mb-4.mb-lg-0
                    p.mb-0 La cocción al vapor se realiza suspendiendo el alimento sobre un líquido hirviendo, sin contacto directo, de modo que se cocina por la acción del vapor caliente. Este método preserva al máximo los nutrientes, el color, la forma y el sabor original de los alimentos, ya que no hay lixiviación. Es excelente para vegetales como el brócoli, la coliflor o el pescado envuelto en hoja de plátano, una técnica ancestral que aún se practica en regiones como el Pacífico colombiano. 
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema3/img13.png", data-aos="zoom-in")
              
              div(titulo="Escaldar o blanqueado").p-4
                .row.justify-content-center.align-items-center
                  .col-lg-7.mb-4.mb-lg-0
                    p.mb-0 El escaldar o blanqueado, mencionado en el capítulo anterior, es una variación breve del hervido (30 segundos a 2 minutos) seguida de un enfriamiento brusco, cuyo objetivo no es cocinar completamente, sino fijar colores, eliminar sabores amargos o ablandar pieles.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema3/img14.png", data-aos="zoom-in")
                    
    separador

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.4 Cocción en medio aéreo y por radiación

        p.mb-0 Estos métodos utilizan el aire caliente o la radiación directa como medio de transferencia de calor, logrando resultados característicos de textura y sabor.
    
    .row.justify-content-center.mb-4.mb-lg-5
      .col-md-12.col-lg-10
        .row.justify-content-center
          .col-md-12.col-lg-6.mb-4.mb-lg-0
            .tarjeta-c.h-100.d-flex.flex-column
              figure
                img(src="@/assets/curso/tema3/img15.png", alt="Carne a la parrilla")
              .bg-color-5.p-4.flex-grow-1
                p.mb-0 Hornear es la cocción por convección de aire caliente que rodea al alimento dentro de un espacio cerrado (horno). El calor seco y constante permite una cocción pareja y el desarrollo de reacciones de dorado y caramelización en la superficie. Es fundamental para panes, pasteles, y en la cocina salada para platos como la "Sobrebarriga al horno", las "Papas al horno" o un "Pastel de pollo". 

          .col-md-12.col-lg-6.mb-4.mb-lg-0
            .tarjeta-c.h-100.d-flex.flex-column
              figure
                img(src="@/assets/curso/tema3/img16.png", alt="Procesos térmicos")
              .bg-color-5.p-4.flex-grow-1
                p.mb-0 Gratinar es una técnica específica que aplica un calor intenso y directo (generalmente de la parrilla superior del horno o de un soplete) sobre la superficie de un alimento, con el objetivo de dorar y formar una costra crujiente, generalmente sobre una capa de queso, pan rallado o bechamel. El "Cerdo en salsa de champiñones gratinado" es un ejemplo de su aplicación. 
    
    .row.justify-content-center.mb-3
      .col-md-12.col-lg-10
        .row.mb-0.justify-content-center.align-items-center
          .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0.order-2.order-md-1.order-lg-1
            figure
              img(src="@/assets/curso/tema3/img17.png", data-aos="zoom-in")
          .col-lg-9.order-1.order-md-2.order-lg-2.mb-4.mb-lg-0
            p.mb-0(data-aos="fade-right") Asar es un término amplio que puede referirse a la cocción por radiación directa de una fuente de calor (asador, parrilla, brasas) o por convección de aire caliente en horno para piezas grandes. En su versión más emblemática, como el "Asado a la llanera", el alimento (generalmente una pieza grande de carne) se cuece lentamente a una distancia prudente de las brasas, girándose para lograr una costra sellada y un interior jugoso y cocido uniformemente. Este método imparte un sabor ahumado único y es central en la identidad gastronómica de la Orinoquía.

    separador

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.5 Cocción mixta

        p.mb-0 Los métodos mixtos representan la cumbre de la técnica de cocción lenta, donde la paciencia y el cuidado transforman cortes humildes en manjares complejos. 
    
    
    .bg-full-width.bg-fondo-5.tarjeta.mb-5
      .p-4.px-lg-2
        SlyderA(tipo="b").bg-color-white.p-3.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-2
            .col-lg-5.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0(data-aos="fade-right") El <b>guisado</b> es un proceso donde los ingredientes, previamente dorados o no, se cocinan en una cantidad moderada de líquido (caldo, salsa, agua) a fuego lento o medio, tapados. El líquido hierve suavemente y reduce gradualmente, espesándose. Es el método clásico para preparaciones como el "Guiso de pollo con papas" o el "Fríjol antioqueño".

            .col-md-8.col-lg-7
              figure
                img(src="@/assets/curso/tema3/img18.png", alt="Guisado").mx-auto
          
          .row.justify-content-center.align-items-center.p-2
            .col-lg-5.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0(data-aos="fade-right") El <b>estofado</b> es una variante del guisado, pero con una diferencia clave: se realiza a fuego muy bajo, con el líquido apenas burbujeando, y preferiblemente en un recipiente de fondo grueso y con tapa hermética (como una olla de cocción lenta o dutch oven). Esto crea un ambiente de cocción húmeda y uniforme que deshace los tejidos conectivos de la carne sin endurecer sus fibras, resultando en una textura exquisitamente tierna. El "Estofado de res con verduras" es un ejemplo claro. 

            .col-md-8.col-lg-7
              figure
                img(src="@/assets/curso/tema3/img19.png", alt="Estofado").mx-auto
          
          .row.justify-content-center.align-items-center.p-2
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0(data-aos="fade-right") El <b>braseado</b> es la técnica más elaborada de esta familia. Consiste en dorar profundamente una pieza grande de carne en grasa, luego agregar un líquido aromático (vino, caldo) que llegue hasta la mitad o un tercio de la pieza, tapar y cocinar a fuego muy bajo en el horno o en la estufa durante varias horas. La pieza se cuece parcialmente sumergida y parcialmente al vapor, logrando una carne increíblemente jugosa y deshilachado, y una salsa concentrada y gelatinosa. Platos como la "Lagarta braseada" o ciertas preparaciones de cerdo para lechona aplican esta técnica. 

            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema3/img20.png", alt="Braseado").mx-auto
          
    .row.justify-content-center.mb-5
      .col-md-12.col-lg-8
        .cajon.bg-color-9.p-4(data-aos="fade-up")
          p.mb-0 Estos métodos son el corazón de la cocina de hogar y restaurante, donde el tiempo es el ingrediente secreto que desarrolla profundidad y amor en el plato.
              
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 
            b Tabla 3. 
            span Clasificación basada en el modelo de McGee (2004) y Gisslen (2015). Los datos de temperatura son referenciales para el servicio de alimentos. Las aplicaciones colombianas se derivan del análisis de recetas regionales de los documentos de apoyo del SENA y técnicas tradicionales documentadas.

        .tabla-a.color-acento-contenido(data-aos="zoom-in")
          table
            thead
              tr
                th Método
                th Clasificación
                th Medio de transferencia
                th Temperatura aprox.
                th Ejemplo de aplicación colombiana
                th Resultado/propósito
            tbody
              tr
                td Saltear.
                td Concentración.
                td Grasa (poca), fuego directo.
                td 180-220°C.
                td Salteado de hongos y cebolla para acompañar el lomo.
                td Sellado rápido, textura al dente, colores vivos.
              tr
                td Freír.
                td Concentración.
                td Grasa (inmersión).
                td 160-180°C.
                td Patacones, arepas de huevo, aborrajados.
                td Costra crujiente y dorada, cocción interna por vapor.
              tr
                td Hervir.
                td Expansión.
                td Agua/Caldo (inmersión).
                td 100°C.
                td Cocción de papa y yuca para sancocho; pasta.
                td Ablandamiento completo, extracción de sabores al caldo.
              tr
                td Escalfar.
                td Expansión.
                td Líquido (inmersión suave).
                td 80-95°C.
                td Pescado escalfado en leche de coco (Pacífico).
                td Cocción delicada, textura suave y húmeda, sabor sutil.
              tr
                td Cocer al vapor.
                td Expansión.
                td Vapor de agua.
                td 100°C.
                td Pescado envuelto en hoja de plátano, tamales.
                td Máxima preservación de nutrientes, forma, color y sabor.
              tr
                td Hornear.
                td Concentración.
                td Aire caliente (convección).
                td 150-250°C.
                td Sobrebarriga al horno.
                td Cocción pareja, reacciones de dorado y caramelización.
              tr
                td Asar (Parrilla).
                td Concentración.
                td Radiación (brasas, llamas).
                td 200-300°C.
                td Carne a la llanera (mamona), chorizos.
                td Sabor ahumado, costra sellada, jugos retenidos.
              tr
                td Estofar.
                td Mixto.
                td Combinación (grasa + líquido).
                td 90-100°C (líq.).
                td Estofado de pollo con papas, carnes duras en salsa.
                td Ablandamiento de fibras, integración de sabores, salsa espesa.
              tr
                td Brasear.
                td Mixto.
                td Combinación (grasa + poco líquido).
                td 120-160°C (horno).
                td Lagarta o pierna de cerdo braseada.
                td Carne extremadamente jugosa y deshilachable, salsa gelatinosa.
     
     
    .container
      .row.justify-content-center.mb-0
        .col-md-12.col-lg-10
          .row.justify-content-center.align-items-center.bg-color-11
            .col-lg-9.mb-3.mb-lg-0
              p.mb-0.p-4(data-aos="fade-right")  La elección del método de cocción es un acto de responsabilidad. Implica entender la naturaleza del ingrediente y honrarlo con la técnica adecuada. Un chef íntegro no fuerza un corte duro con un fuego rápido, sino que le brinda el tiempo y el medio que necesita para revelar su mejor versión, respetando así el recurso y la expectativa del comensal.
            .col-md-6.col-lg-3
              figure
                img(src="@/assets/curso/tema3/img21.svg", data-aos="zoom-in")
                
    
</template>

<script>
export default {
  name: 'Tema3',
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
