<script>
import store from '../../store'
  // VUE
export default {
    name: 'AppContent',
    data() {
        return {
          store,
        }
    }
}
</script>

<template>
    <div class="app-content">
      <div class="container">
        <div class="row">
          <div v-for="(film,i) in store.films" :key="i" class="col-4">
            <div class="card">
              <ul>
                <!-- <li><img :src="film.poster_path" alt="film-image"></li> -->
                <li>{{ film.title }}</li>
                <li>{{ film.original_title }}</li>
                <li>{{ film.original_language }}</li>
                <li>{{ parseInt(film.vote_average) }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/master.scss';
    @use '../styles/secondaryStyles/AppContent.scss'
</style>

