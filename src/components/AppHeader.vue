<script>
  // VUE
export default {
    name: 'AppHeader',
    data() {
        return {
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
            <input type="text" placeholder="Cerca un Film">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
   @use '../styles/master.scss';
   @use '../styles/secondaryStyles/AppHeader.scss'
</style>
