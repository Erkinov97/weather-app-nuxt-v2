<template>
  <div class="custom-loading" v-if="loading" >
    <div>
      <IconLogo />
    </div>
  </div>
</template>
<script>
import IconLogo from '@/components/icons/Logo.vue'
export default {
  name: 'AppLoading',
  components: {
    IconLogo,
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
<style scoped>
.custom-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--blue-light);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
