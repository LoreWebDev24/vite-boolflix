<script>
import store from '../../store'
// VUE
export default {
  emits: ['fetchMovies'],
  name: 'AppHeader',
  data() {
    return {
      store,
      navLinks: ['Home','Serie TV','Film','La Mia Lista','Sfoglia per Lingua']
    }
  }
}
</script>

<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <h2><a href="#">Boolflix</a></h2>
        </div>
        <div class="col-4 flex-column">
          <div class="nav">
            <a v-for="link in navLinks" href="#">{{ link }}</a>
          </div>
          <span><a href="#">Soon Online</a></span>
        </div>
        <div class="col-4">
          <input @keyup.stop="$emit('fetchMovies')" v-model.trim="store.userSearch" type="text"
            placeholder="Cerca un Film">
          <button @click="$emit('fetchMovies')"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';
@use '../styles/secondaryStyles/AppHeader.scss'
</style>
