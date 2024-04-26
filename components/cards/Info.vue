<template>
  <div class="card card--info">
    <ul class="card__list">
      <li class="card__list--item">
        <TempIcon class="item-icon" />
        <p class="item-title">Температура</p>
        <p class="item-info">
          {{ Math.round(data.temp) }}° - ощущается как
          {{ Math.round(data.feels_like) }}°
        </p>
      </li>
      <li class="card__list--item">
        <PressureIcon class="item-icon" />
        <p class="item-title">Давление</p>
        <p class="item-info">{{ data.pressure }} мм ртутного столба</p>
      </li>
      <li class="card__list--item">
        <PrecipitationIcon class="item-icon" />
        <p class="item-title">Осадки</p>
        <p class="item-info">{{ data.humidity }}%</p>
      </li>
      <li class="card__list--item">
        <WindIcon class="item-icon" />
        <p class="item-title">Ветер</p>
        <p class="item-info">{{ data.speed }} м/с</p>
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
      type: Object,
      required: true,
      default: () => ({
        temp: 0,
        feels_like: 0,
        pressure: 0,
        speed: 0,
        humidity: 0,
      }),
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

@media screen and (max-width: 1199px) {
  .card {
    &--info {
      max-width: 100%;
    }
  }
}
</style>
