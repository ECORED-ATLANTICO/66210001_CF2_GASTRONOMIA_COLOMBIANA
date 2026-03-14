<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.justify-content-center.mb-5
      .col-md-12.col-lg-12
        .row.justify-content-center.align-items-center.bg-color-11.p-4(data-aos="fade-left")
          .col-lg-9.mb-3.mb-lg-0
            p.mb-0 El componente formativo Mise en place y técnicas de preparación en la cocina colombiana proporciona al aprendiz un sistema de conocimiento integral que articula la interpretación de recetas, el dominio de técnicas de corte y cocción, la filosofía del mise en place y los principios del protocolo en eventos. Esta estructura progresiva, que va de lo analítico a lo operativo y de lo individual a lo social, capacita al futuro profesional no solo para ejecutar con precisión los sabores de la tradición colombiana, sino para organizar su trabajo con eficiencia y desempeñarse con la distinción que el servicio gastronómico profesional exige, garantizando así la calidad y la excelencia en cada experiencia culinaria.
          .col-auto.col-lg-3
            figure
              img.d-none.d-lg-flex(src="@/assets/curso/img02.svg", data-aos="zoom-in")


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
