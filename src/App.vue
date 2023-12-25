<script lang="ts">
export default {
  components: {}
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
