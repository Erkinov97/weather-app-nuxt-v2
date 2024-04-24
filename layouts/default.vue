<script>
import AppHeader from '@/components/icons/AppHeader.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
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
  padding: 20px 0;
  margin: 0 auto;
}
</style>
