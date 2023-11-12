<script>
import store from '../../store'
import AppCard from './AppCard.vue'
  // VUE
export default {
    name: 'AppContent',
    data() {
        return {
          store,
        }
    },
    components: {
    AppCard
  },
}
</script>

<template>
    <div class="app-content">
      <div class="container">
        <div class="row">
          <AppCard/>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/master.scss';
    @use '../styles/secondaryStyles/AppContent.scss'
</style>

