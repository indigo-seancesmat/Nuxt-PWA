<template>
  <div class="container">
    <div class="search">
      <input v-model="searchTerm" type="text" @keyup.enter="search" />
      <button @click="search">
        SEARCH
      </button>
    </div>
    <List />
  </div>
</template>

<script>
import List from '~/components/List.vue'

export default {
  components: {
    List
  },
  data() {
    return {
      searchTerm: 'Trolls'
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    search() {
      this.$store.dispatch('loadList', this.searchTerm)
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.search {
  position: absolute;
  top: 72px;
  margin: 0 auto;
  input {
    background: rgb(13, 128, 182);
    border: none;
    color: #fff;
    padding: 4px;
    font-size: 20px;
  }
  button {
    background: tomato;
    border: none;
    color: #fff;
    padding: 4px;
    font-size: 20px;
    margin-left: 8px;
    cursor: pointer;
  }
}
</style>
