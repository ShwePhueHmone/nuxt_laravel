<template>
  <div>
    <NavBar />
    <Nuxt/>
    <!-- <Footer/> -->
  </div>
</template>
<script>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';

export default {
    components: { NavBar,Footer },
    watch: {
      $route() {
        location.reload();
      },
    },
};
</script>