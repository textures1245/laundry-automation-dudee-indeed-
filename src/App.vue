<script lang="ts">
import LoadingView from '@/views/assets/LoadingView.vue'
export default {
  components: { LoadingView }
}
</script>

<template>
  <div data-theme="winter">
    <v-app>
      <Suspense>
        <router-view v-slot="{ Component }">
          <keep-alive include="DashboardView">
            <component :is="Component" />
          </keep-alive>
        </router-view>
        <template #fallback>
          <div>
            <LoadingView />
          </div>
        </template>
      </Suspense>
    </v-app>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&family=Roboto&display=swap');

* {
  font-family: 'IBM Plex Sans Thai', sans-serif;
}

html,
body {
  height: 100%;
}

::v-deep .my-toast {
  background: none !important;
  box-shadow: none !important;
}

.v-tooltip__content {
  background: none !important;
  box-shadow: none !important;
  color: inherit !important;
}
</style>
