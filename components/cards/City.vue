<template>
  <div class="card card--city">
    <div class="card__header">
      <div>
        <h2 class="card__temperature">{{ data.temperature }}°</h2>
        <p class="card__date">{{ data.date }}</p>
      </div>
      <BigSun />
    </div>
    <div class="card__info">
      <p>Время: {{ data.time }}</p>
      <p>Город: {{ data.city }}</p>
    </div>
  </div>
</template>

<script>
import BigSun from '../icons/BigSun.vue'

export default {
  name: 'CardCity',
  components: { BigSun },
  props: {
    data: {
      type: Object,
      // required: true,
      default: () => ({
        temperature: 20,
        date: 'Сегодня',
        time: '21:54',
        city: 'Санкт-Петербург',
      }),
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss';
.card {
  &--city {
    padding: 20px;
    background-color: var(--white);
    border-radius: 10px;
    max-width: 400px;
    width: 100%;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  &__temperature {
    max-width: 160px;
    font-size: 96px;
    font-weight: 500;
    line-height: 117.02px;
    margin: 0;
    color: var(--blue);
  }
  &__date {
    max-width: 174px;
    font-size: 40px;
    font-weight: 400;
    line-height: 48.76px;
    margin: 0;
    color: var(--black);
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: 25px;
    font-weight: 400;
    line-height: 30.48px;
    margin: 0;
    color: var(--gray);
    p {
      margin: 0;
    }
  }
}
</style>
