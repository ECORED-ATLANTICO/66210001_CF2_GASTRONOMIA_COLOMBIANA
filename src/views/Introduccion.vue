<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10
        .row.justify-content-center.align-items-center
          .col-12.col-md-6.col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro.png", data-aos="zoom-in")
          .col-lg-7
            
            p.mb-3(data-aos="fade-right") El dominio de la técnica culinaria, la organización meticulosa y el conocimiento del protocolo constituyen el pilar fundamental que transforma a un cocinero en un profesional gastronómico integral. Este componente formativo está diseñado para guiar al aprendiz en la adquisición de esta tríada de competencias, esenciales para el éxito en la cocina colombiana
            
            p.mb-3(data-aos="fade-right") A través de un recorrido que inicia con la interpretación precisa de recetas estándar y el dominio de las técnicas de corte y cocción, se avanza hacia la filosofía del mise en place como sistema de eficiencia, para culminar con la aplicación del protocolo y la organización de eventos. 
 
            .container.mb-0.justify-content-center.align-items-center.bg-color-11.p-4
              .col-lg
                p.mb-0(data-aos="fade-right") El objetivo es formar un profesional capaz no solo de ejecutar con técnica los sabores de la tradición, sino de planificar su trabajo con método y de servir con la distinción que la alta gastronomía exige.



    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
