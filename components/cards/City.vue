<template>
  <div class="card card--city">
    <div class="card__header">
      <div>
        <h2 class="card__temperature">{{ Math.floor(data.temp) }}°</h2>
        <p class="card__date">Сегодня</p>
      </div>
      <component :is="data.icon" class="card__icon" />
    </div>
    <div class="card__info">
      <p>
        Время:
        {{
          new Date(Date(data.time)).toLocaleString('ru-RU', {
            hour: 'numeric',
            minute: 'numeric',
          })
        }}
      </p>
      <p>Город: {{ data.city }}</p>
    </div>
  </div>
</template>

<script>
import IconRain from '../icons/Rain.vue'
import IconMainlyCloudly from '../icons/MainlyCloudly.vue'
import IconSun from '../icons/Sun.vue'
import IconSmallRain from '../icons/SmallRain.vue'
import IconSmallRainSun from '../icons/SmallRainSun.vue'

export default {
  name: 'CardCity',
  components: {
    IconMainlyCloudly,
    IconRain,
    IconSmallRain,
    IconSun,
    IconSmallRainSun,
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({
        icon: 'BigSun',
        temp: 20,
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
  &__icon {
    width: 119px;
    height: 119px;
  }
}

@media screen and (max-width: 1199px) {
  .card {
    max-width: 100%;
  }
}
</style>
