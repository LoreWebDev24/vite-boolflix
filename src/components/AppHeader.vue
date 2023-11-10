<script>
import store from '../../store'
  // VUE
export default {
    name: 'AppHeader',
    data() {
        return {
          store,
        }
    }
}
</script>

<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <h2><a href="#">Bool Flix</a></h2>
        </div>
        <div class="col-4">
          <span><a href="#">Soon Online</a></span>
        </div>
        <div class="col-4">
            <input @keyup.stop="$emit('fetchMovies',store.userSearch)" v-model="store.userSearch" type="text" placeholder="Cerca un Film">
            <button @click=""><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
   @use '../styles/master.scss';
   @use '../styles/secondaryStyles/AppHeader.scss'
</style>
