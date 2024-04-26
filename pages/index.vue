<template>
  <main>
    <section class="content">
      <CardCity
        :data="{
          temp: data.list[0].main.temp,
          time: data.list[0].dt,
          city: data['city'].name,
          icon: customIcon(data.list[0].weather[0].main),
        }"
      />

      <CardInfo
        :data="{
          temp: data.list[0].main.temp,
          feels_like: data.list[0].main.feels_like,
          pressure: data.list[0].main.pressure,
          speed: data.list[0].wind.speed,
          humidity: data.list[0].main.humidity,
        }"
      />
    </section>
    <section class="week card">
      <ul class="week__list">
        <template v-for="weekday in data.list">
          <li v-if="weekday.dt_txt.includes('12:00:00')" :key="weekday.dt_txt">
            <CardWeek
              :data="{
                temp_max: weekday.main.temp_max,
                temp_min: weekday.main.temp_min,
                dt: weekday.dt,
                icon: customIcon(weekday.weather[0].main),
                description: weekday.weather[0].description,
              }"
            />
          </li>
        </template>
      </ul>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import CardCity from '@/components/cards/City.vue'
import CardInfo from '@/components/cards/Info.vue'
import CardWeek from '@/components/cards/WeekDay.vue'
export default {
  name: 'IndexPage',
  components: {
    CardCity,
    CardInfo,
    CardWeek,
  },
  async fetch({ store }) {
    await store.dispatch('weather/fetchData', {
      q: 'Tashkent',
    })
  },
  computed: {
    ...mapState({
      data: (state) => state.weather.data,
    }),
  },
  watchQuery(newQuery) {
    this.$store.dispatch('weather/fetchData', {
      q: newQuery.q,
    })
  },
  methods: {
    customIcon: function (icon) {
      if (icon === 'Rain' || icon === 'Drizzle') {
        return 'IconRain'
      } else if (icon === 'Clouds') {
        return 'IconMainlyCloudly'
      } else if (icon === 'Clear') {
        return 'IconSun'
      }
      return 'img'
    },
  },
}
</script>
<style lang="scss">
@import '@/assets/scss';

.content {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 50px;
}

.week {
  padding: 20px;
  border: none;
  border-radius: 0 0 20px 20px;
  background-color: var(--white);
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 20px;
  }
}

@media screen and (max-width: 1199px) {
  .content,
  .week__list {
    flex-wrap: wrap;
  }
}
</style>
