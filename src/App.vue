<script>
// AXIOS
import axios from 'axios'
import store from '../store'
// COMPONENTS IMPORT ROUTE
import AppHeader from "./components/AppHeader.vue"
import AppContent from "./components/AppContent.vue"
// VUE
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppContent,
  },
  methods : {
    fetchMovies(link){
      console.log(link)
      store.films = []
      store.tvShows = []
      if(this.store.userSearch === '') {
        return
      }

      if (link === 'Film' ) {
        axios.get('https://api.themoviedb.org/3/search/movie',{
        params: {
          api_key: this.store.api_key,
          query: this.store.userSearch,
          language:'it-IT'
        }

      })
      .then(res => {
        const products = res.data.results;
        this.store.films = products;
      })
      .catch(err => {
        // console.log(err,err.response)
        store.films = []
      })
      }else if (link === 'Serie TV') {
        axios.get('https://api.themoviedb.org/3/search/tv',{
        params: {
          api_key: this.store.api_key,
          query: this.store.userSearch,
          language:'it-IT'
        }

      })
      .then(res => {
        const productsTv = res.data.results;
        this.store.tvShows = productsTv;
      })
      .catch(err => {
        // console.log(err,err.response)
        store.tvShows = []
      })
      }else {
        axios.get('https://api.themoviedb.org/3/search/movie',{
        params: {
          api_key: this.store.api_key,
          query: this.store.userSearch,
          language:'it-IT'
        }

      })
      .then(res => {
        const products = res.data.results;
        this.store.films = products;
      })
      .catch(err => {
        // console.log(err,err.response)
        store.films = []
      })

      axios.get('https://api.themoviedb.org/3/search/tv',{
        params: {
          api_key: this.store.api_key,
          query: this.store.userSearch,
          language:'it-IT'
        }

      })
      .then(res => {
        const productsTv = res.data.results;
        this.store.tvShows = productsTv;
      })
      .catch(err => {
        // console.log(err,err.response)
        store.tvShows = []
      })
      }

      // axios.get('https://api.themoviedb.org/3/search/movie',{
      //   params: {
      //     api_key: this.store.api_key,
      //     query: this.store.userSearch,
      //     language:'it-IT'
      //   }

      // })
      // .then(res => {
      //   const products = res.data.results;
      //   this.store.films = products;
      // })
      // .catch(err => {
      //   // console.log(err,err.response)
      //   store.films = []
      // })

      // axios.get('https://api.themoviedb.org/3/search/tv',{
      //   params: {
      //     api_key: this.store.api_key,
      //     query: this.store.userSearch,
      //     language:'it-IT'
      //   }

      // })
      // .then(res => {
      //   const productsTv = res.data.results;
      //   this.store.tvShows = productsTv;
      // })
      // .catch(err => {
      //   // console.log(err,err.response)
      //   store.tvShows = []
      // })
    }
  }
}
</script>

<template>
<AppHeader @fetchMovies="fetchMovies"/>
<AppContent/>
</template>

<style lang="scss">
  @use './styles/master.scss';
</style>
