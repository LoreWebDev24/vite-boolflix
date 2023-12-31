import { reactive } from 'vue'

const store = reactive({
	films: [],
    tvShows: [],
    userSearch: '',
    api_key:'82fd4e469f97da4c7edaf1d5b508a124',
    flags: {
        it: '/it.png',
        en: '/en.png',
        fr: '/fr.png',
        de: '/de.png',
        es: '/es.webp'
    }
})

export default store;