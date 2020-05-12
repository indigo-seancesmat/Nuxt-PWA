<template>
  <div class="list">
    <div
      v-for="item in list"
      :key="item.id"
      @click="$router.push(`/movie/${item.imdbID}`)"
    >
      <h3 class="list__item-header">{{ item.Title }} ({{ item.Year }})</h3>
      <img :src="item.Poster" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  computed: {
    list() {
      return this.$store.state.list
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 12px;
  row-gap: 40px;
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  > div {
    cursor: pointer;
  }

  &__item-header {
    text-align: center;
    margin-bottom: 12px;
  }

  img {
    max-width: 100%;
  }
}
</style>
