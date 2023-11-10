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

    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/master.scss';
    @use '../styles/secondaryStyles/AppContent.scss'
</style>