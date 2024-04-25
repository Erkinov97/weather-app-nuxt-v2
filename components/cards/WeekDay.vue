<template>
  <div class="week--card">
    <div class="week--card__header">
      <h3>{{ data.day }}</h3>
      <p>{{ data.date }}</p>
    </div>
    <div class="week--card__body">
      <component :is="data.icon" class="week--card__icon" />
      <h4>{{ data.temp }}°</h4>
      <p>{{ data.tempNight }}°</p>
    </div>
    <div class="week--card__footer">
      <p>{{ data.weather }}</p>
    </div>
  </div>
</template>
<script>
import IconRain from '@/components/icons/Rain.vue'
export default {
  name: 'CardWeekDay',
  components: {
    IconRain,
  },
  props: {
    data: {
      type: Object,
      // required: true,
      default: () => ({
        icon: 'IconRain',
        day: 'Сегодня',
        date: '28 авг',
        temp: '+18',
        tempNight: '+15',
        weather: 'Облачно',
      }),
    },
  },
}
</script>
<style lang="scss">
@import '@/assets/scss';

.week--card {
  min-width: 149px;
  border: none;
  border-radius: 10px;
  background-color: var(--blue-light);
  padding: 11px;
  &__header {
    margin-bottom: 12px;
    h3 {
      color: var(--black);
      font-size: 18px;
      font-weight: 500;
      line-height: 21.94px;
      margin-bottom: 7px;
    }
    p {
      font-size: 14px;
      line-height: 17.07px;
    }
  }
  &__body {
    margin-bottom: 15px;
    h4{
      font-weight: 500;
      font-size: 18px;
      line-height: 21.94px;
    }
  }
  &__footer {
    p {
      margin-bottom: 6px;
    }
  }
  p {
    color: var(--gray);
    font-size: 13px;
    line-height: 15.85px;
  }
  &__icon {
    width: 48px;
    height: 48px;
    margin-bottom: 13px;
  }
}
</style>
