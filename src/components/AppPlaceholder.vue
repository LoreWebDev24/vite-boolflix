<script>
import store from '../../store';
// VUE
export default {
  name: 'AppPlaceholder',
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
<div class="placeholder" v-if="!store.films.length && !store.tvShows.length">
    <h2>Benvenuto su Boolflix cerca una serie TV o un Film</h2>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';
</style>