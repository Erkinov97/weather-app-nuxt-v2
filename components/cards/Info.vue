<template>
  <div class="card card--info">
    <ul class="card__list">
      <li v-for="item in data" :key="item.id" class="card__list--item">
        <component :is="item.icon" class="item-icon" />
        <p class="item-title">{{ item.title }}</p>
        <p class="item-info">{{ item.info }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import TempIcon from '@/components/icons/Thermometer.vue'
import PressureIcon from '@/components/icons/Pressure.vue'
import PrecipitationIcon from '@/components/icons/Precipitation.vue'
import WindIcon from '@/components/icons/Wind.vue'
export default {
  name: 'CardInfo',
  components: {
    TempIcon,
    PressureIcon,
    PrecipitationIcon,
    WindIcon,
  },
  props: {
    data: {
      type: Array,
      default: () => [
        {
          id: 1,
          icon: 'TempIcon',
          title: 'Температура',
          info: '20° - ощущается как 17°',
        },
        {
          id: 2,
          icon: 'PressureIcon',
          title: 'Давление ',
          info: '765 мм ртутного столба - нормальное',
        },
        {
          id: 3,
          icon: 'WindIcon',
          title: 'Осадки',
          info: 'Без осадков',
        },
        {
          id: 4,
          icon: 'PrecipitationIcon',
          title: 'Ветер',
          info: '3 м/с юго-запад - легкий ветер',
        },
      ],
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss';
.card {
  &--info {
    padding: 42px 32px;
    background-color: var(--white);
    border-radius: 10px;
    max-width: 750px;
    width: 100%;
    background-image: url('~/public/img/cloudy.png');
    background-size: 460px 202px;
    background-position: top right;
    background-repeat: no-repeat;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    &--item {
      display: flex;
      align-items: center;
      gap: 20px;
      p {
        margin: 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 17.07px;
      }
    }
  }
  .item {
    &-icon {
      width: 38px;
      height: 38px;
      padding: 6px;
      border: none;
      border-radius: 50%;
      box-shadow: var(--shadow);
    }
    &-title {
      min-width: 96px;
      color: var(--gray);
    }
    &-info {
      color: var(--black);
      font-weight: 600;
    }
  }
}
</style>
