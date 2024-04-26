<template>
  <div class="week--card">
    <div class="week--card__header">
      <h3>
        {{
          new Date(data.dt * 1000).toLocaleDateString('ru-Ru', {
            weekday: 'short',
          })
        }}
      </h3>
      <p>
        {{
          new Date(data.dt * 1000).toLocaleString('ru-RU', {
            day: 'numeric',
            month: 'short',
          })
        }}
      </p>
    </div>
    <div class="week--card__body">
      <component :is="data.icon" class="week--card__icon" />
      <h4>{{ Math.round(data.temp_max) }}°</h4>
      <p>{{ Math.round(data.temp_min) }}°</p>
    </div>
    <div class="week--card__footer">
      <p>{{ data.description }}</p>
    </div>
  </div>
</template>
<script>
import IconRain from '@/components/icons/Rain.vue'
import IconMainlyCloudly from '@/components/icons/MainlyCloudly.vue'
import IconSun from '@/components/icons/Sun.vue'
import IconSmallRain from '@/components/icons/SmallRain.vue'
import IconSmallRainSun from '@/components/icons/SmallRainSun.vue'
export default {
  name: 'CardWeekDay',
  components: {
    IconRain,
    IconMainlyCloudly,
    IconSun,
    IconSmallRain,
    IconSmallRainSun,
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({
        icon: 'IconRain',
        dt: 0,
        temp_max: '+18',
        temp_min: '+15',
        description: 'Облачно',
      }),
    },
  },
}
</script>
<style lang="scss">
@import '@/assets/scss';

.week--card {
  min-width: 149px;
  height: 100%;
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
    h4 {
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
