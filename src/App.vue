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
    fetchMovies(){
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
      });
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
