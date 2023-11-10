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
          <div class="col-4">
            <!-- QUI MI CICLO IL TITOLO LA DESCRIZIONE IMG E LINGUA DEL FILM  -->
            <!-- <ul>
              <li>
                <li>
                  <li>

                  </li>
                </li>
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/master.scss';
    @use '../styles/secondaryStyles/AppContent.scss'
</style>