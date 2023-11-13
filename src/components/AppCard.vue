<script>
    import store from '../../store'
      // VUE
    export default {
        name: 'AppCard',
        data() {
            return {
              store,
            }
        },
        props: {
		item: {
			type: Object,
			required: true
		}
	},
    }
</script>

<template>
    <div class="col-3">
        <div class="card">
            <div class="card-default">
                <figure v-if="item.poster_path"><img :src="'https://image.tmdb.org/t/p/original'+ item.poster_path"
                        alt="film-image"></figure>
                <figure v-else><img
                        src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*TVebZE0MHzu7mpFw_bCsrQ.jpeg"
                        alt=""></figure>
            </div>
            <div class="card-body-on-hover">
                <ul>
                    <li v-if="item.title">{{ item.title }}</li>
                    <li v-else>{{ item.name }}</li>
                    <li v-if="item.original_title">{{ item.original_title }}</li>
                    <li v-else="">{{ item.original_name }}</li>
                    <li>
                        <img class="flags" v-if="store.flags[item.original_language]" :src="store.flags[item.original_language]" alt="">
                    </li>
                    <li></li>
                    <li>{{ parseInt(item.vote_average) }}</li>
                </ul>    
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/secondaryStyles/AppContent.scss'
</style>
