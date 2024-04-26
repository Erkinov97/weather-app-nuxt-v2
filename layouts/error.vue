<template>
  <div class="container">
    <div class="error-layout">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style lang="scss">
@import '@/assets/scss';
.error-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    margin-top: 20px;
    text-decoration: none;
    color: var(--blue);
    font-size: larger;
  }
}
</style>
