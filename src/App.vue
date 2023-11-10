<script>
// AXIOS
// import axios from 'axios'
// import store from '../store'
// COMPONENTS IMPORT ROUTE
import AppHeader from "./components/AppHeader.vue"
import AppContent from "./components/AppContent.vue"
// VUE
export default {
  data() {
    return {
      // store,
    };
  },
  components: {
    AppHeader,
    AppContent,
  }
}
</script>

<template>
<AppHeader/>
<AppContent/>
</template>

<style lang="scss">
  @use './styles/master.scss';
</style>
