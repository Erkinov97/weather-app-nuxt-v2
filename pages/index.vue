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
