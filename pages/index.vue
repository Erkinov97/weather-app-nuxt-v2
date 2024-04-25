<template>
  <main>
    <section class="content">
      <CardCity />
      <CardInfo />
    </section>
    <section class="week card">
      <ul class="week__list">
        <li v-for="weekday in 7" :key="weekday">
          <CardWeek />
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
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
  data: () => ({
    apiData: [],
    error: null,
    token: '309b6d9d6d8936c4fbe4bbd6572ef296',
    icon: '',
  }),
  async mounted() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const res = await this.$axios.get('/forecast', {
          params: {
            q: 'Tashkent',
            cnt: 7,
            units: 'metric',
            appid: this.token,
          },
        })
        this.apiData = res.data
      } catch (error) {
        this.error = error
      }
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
