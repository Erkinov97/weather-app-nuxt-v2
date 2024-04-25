<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1500)
    })
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
@media screen and (max-width: 1199px) {
  .container {
    padding: 20px;
  }
}
</style>
