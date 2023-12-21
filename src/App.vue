<script lang="ts">
export default {
  components: {},
  setup() {
    return {}
  }
}
</script>

<template>
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>

<style>
html,
body {
  height: 100%;
}
</style>
