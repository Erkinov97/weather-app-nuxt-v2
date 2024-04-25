<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
  },
  mounted() {
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode')
    }
  },
}
</script>
<template>
  <div class="container">
    <AppHeader />
    <Nuxt />
  </div>
</template>

<style lang="scss">
.container {
  max-width: 1200px;
  height: 100vh;
  padding: 20px 0;
  margin: 0 auto;
}
</style>
