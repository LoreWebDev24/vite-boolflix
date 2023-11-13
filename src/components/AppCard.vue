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
        computed: { 
            average(){
                return parseInt((this.item.vote_average)/2);
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
                    <li v-if="store.flags[item.original_language]">
                        <img class="flags" :src="store.flags[item.original_language]" alt="">
                    </li>
                    <li v-else>
                        <img class="flags" src="../../public/dk.png" alt="">
                    </li>
                    <li>
                        <div stars-vote><span class="stars-vote" v-for="i in average" :key="i"><i class="fa-solid fa-star"></i></span></div>
                    </li>
                </ul>                    
            </div>
        </div>
    </div>      
</template>

<style lang="scss" scoped>
    @use '../styles/secondaryStyles/AppContent.scss'
</style>
 


