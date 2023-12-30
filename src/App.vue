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

.background-animate {
  background-size: 400%;

  -webkit-animation: AnimationName 3s ease infinite;
  -moz-animation: AnimationName 3s ease infinite;
  animation: AnimationName 3s ease infinite;
}

@keyframes AnimationName {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
