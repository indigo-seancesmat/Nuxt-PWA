<template>
  <div v-if="movie" class="movie">
    <div class="movie__inner">
      <img :src="movie.Poster" />
      <div class="movie__details">
        <h1>{{ movie.Title }} ({{ movie.Year }})</h1>

        <p><span>RELEASED:</span> {{ movie.Released }}</p>
        <p><span>RUNTIME:</span> {{ movie.Runtime }}</p>
        <p><span>RATED:</span> {{ movie.Rated }}</p>
        <p><span>AWARDS:</span> {{ movie.Awards }}</p>
        <p><span>GENRE:</span> {{ movie.Genre }}</p>
        <br />
        <p><span>DIRECTOR:</span> {{ movie.Director }}</p>
        <p><span>ACTORS:</span> {{ movie.Actors }}</p>
        <br />
        <p v-for="rating in movie.Ratings" :key="rating.id">
          <span>{{ rating.Source }}:</span> {{ rating.Value }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Movie',
  computed: {
    movie() {
      return this.$store.state.movie
    }
  },
  mounted() {
    // console.log(this.$route.params)
    this.$store.dispatch('loadMovie', this.$route.params.movie)
  }
}
</script>
<style lang="scss">
.movie {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__inner {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    img {
      max-width: 360px;
      flex: 1;
      padding-right: 20px;
    }
    @media screen and (min-width: 1024px) {
      flex-direction: row;
    }
  }
  &__details {
    flex: 1;
    max-width: 360px;
    @media screen and (min-width: 1024px) {
      flex: 3;
      max-width: initial;
    }
  }
  p {
    span {
      font-weight: bold;
      color: tomato;
    }
  }
}
</style>
