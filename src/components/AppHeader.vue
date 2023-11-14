<script>
import store from '../../store'
// VUE
export default {
  emits: ['fetchMovies'],
  name: 'AppHeader',
  data() {
    return {
      store,
      navLinks:  [
        {
          link: 'Home',
          active: true
        },
        {
          link: 'Serie TV',
          active: false
        },
        {
          link: 'Film',
          active: false
        },
        {
          link: 'La Mia Lista',
          active: false
        },
        {
          link: 'Sfoglia per Lingua',
          active: false
        }
      ]
    }
  },
  methods: {
    activeModify(i){ 
      for (let i = 0 ; i < this.navLinks.length; i++) {
        this.navLinks[i].active = false
      }
      this.navLinks[i].active = !this.navLinks[i].active
      console.log(this.navLinks[i].active)
    }
}
}
</script>

<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <h1><a href="#">Boolflix</a></h1>
        </div>
        <div class="col-4 flex-column">
          <div class="nav">
            <a @click="activeModify(i)" :class= "navLinks[i].active === true ? 'active' : ''" v-for="currentObjLink,i in navLinks" :key="i" href="#">{{ currentObjLink.link }}</a>
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
