<template>
  <header class="header">
    <div class="header__logo">
      <LogoIcon />
      <h1 class="header__title">vue weather</h1>
    </div>
    <div class="header__right">
      <button
        type="button"
        class="header__btn-change-color"
        @click="toggleTheme"
      >
        <InvertColorIcon />
      </button>
      <input type="text" class="header__search" placeholder="Выбрать город" />
    </div>
  </header>
</template>

<script>
import LogoIcon from '@/components/icons/Logo.vue'
import InvertColorIcon from '@/components/icons/InvertColor.vue'
export default {
  name: 'AppHeader',
  components: {
    LogoIcon,
    InvertColorIcon,
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle('dark-mode')
      localStorage.setItem(
        'darkMode',
        document.body.classList.contains('dark-mode')
      )
    },
  },
}
</script>
<style lang="scss">
@import '@/assets/scss';
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  &__logo {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__title {
    text-transform: uppercase;
    font-size: 24px;
    color: var(--blue);
    font-weight: 700;
    font-size: 25px;
    line-height: 30.48px;
  }
  &__right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__btn-change-color {
    width: 35px;
    height: 35px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  &__search {
    background-color: var(--blue-light);
    color: var(--black);
    padding: 9px 20px;
    border: 1px solid;
    border-radius: 5px;
    font-weight: 500;
    line-height: 19.5px;
    border: none;
    outline: none;
    border-radius: 10px;
  }
}
</style>
