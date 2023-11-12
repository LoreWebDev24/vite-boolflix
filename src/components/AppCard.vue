<script>
    import store from '../../store'
      // VUE
    export default {
        name: 'AppCard',
        data() {
            return {
              store,
            }
        }
    }
</script>

<template>
    <div v-for="(film,i) in store.films" :key="i" class="col-4">
        <div class="card">
            <ul>
                <li v-if="film.poster_path"><img :src="'https://image.tmdb.org/t/p/original'+ film.poster_path"
                        alt="film-image"></li>
                <li v-else><img
                        src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*TVebZE0MHzu7mpFw_bCsrQ.jpeg"
                        alt=""></li>
                <div class="card-body">
                    <li>{{ film.title }}</li>
                    <li>{{ film.original_title }}</li>
                    <li>{{ film.original_language }}</li>
                    <li>{{ parseInt(film.vote_average) }}</li>
                </div>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/secondaryStyles/AppContent.scss'
</style>
