<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// import '../dist/libs/jquery/jquery.min.js'
// import '../public/libs/owl-carousel/owl.carousel.min.js'
// import '../public/libs/modalEffects.min.js'
// import '../public/libs/bootstrap.min.js'
// import '../public/libs/loadCSS.min.js'
// import '../public/libs/onloadCSS.min.js'
// import '../public/libs/cssrelpreload.min.js'
// // import '../public/libs/bootstrap-datepicker.min.js'
// import '../public/libs/swiper.min.js'

export default {
  name: 'app',
  components: {
  },
    mounted: function () {
      let service = this.$route.params.section;

      if (service !== undefined) {
          jQuery(document).ready(function ($) {
              setTimeout(function () {
                  $('a[href="/' + service + '"]').trigger('click');
              },800)
          })
      }
    }
}
</script>
