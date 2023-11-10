import { reactive } from 'vue'

const store = reactive({
	films: [],
    tvShows: [],
    userSearch: ''
})

export default store;