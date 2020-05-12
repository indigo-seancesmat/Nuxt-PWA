import axios from 'axios'

export const state = () => ({
  list: [],
  movie: null
})
export const mutations = {
  SET_LIST(state, list) {
    state.list = list
  },
  SET_MOVIE(state, movie) {
    state.movie = movie
  }
}
export const actions = {
  loadList(context, searchTerm) {
    axios
      .get(
        `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${searchTerm}`
      )
      .then((data) => {
        context.commit('SET_LIST', data.data.Search)
      })
      .catch((error) => console.log(error))
  },
  loadMovie(context, id) {
    axios
      .get(
        `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`
      )
      .then((data) => {
        context.commit('SET_MOVIE', data.data)
      })
      .catch((error) => console.log(error))
  }
}
export const getters = {}
