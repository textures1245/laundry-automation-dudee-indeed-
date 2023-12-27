<script lang="ts">
import LoadingView from '@/views/assets/LoadingView.vue'
export default {
  components: { LoadingView }
}
</script>

<template>
  <div data-theme="winter">
    <router-view v-slot="{ Component }">
      <Suspense>
        <keep-alive include="DashboardView">
          <component :is="Component" />
        </keep-alive>
        <template #fallback>
          <div>
            <LoadingView />
          </div>
        </template>
      </Suspense>
    </router-view>
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
