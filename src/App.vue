<script lang="ts">
import LoadingView from '@/views/assets/LoadingView.vue'
export default {
  components: { LoadingView }
}
</script>

<template>
  <div data-theme="winter">
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
  </div>
</template>

<style>
html,
body {
  height: 100%;
}

::v-deep .my-toast {
  background: none !important;
  box-shadow: none !important;
}
</style>
