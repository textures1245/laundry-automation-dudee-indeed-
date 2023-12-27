<script lang="ts" setup>
import { useDisplay } from 'vuetify/lib/framework.mjs'

import { computed } from 'vue'

const asSmSize = computed(() => {
  if (useDisplay && useDisplay().smAndDown) {
    return false
  }
  return true
})
</script>

<template>
  <v-layout>
    <v-skeleton-loader
      class="mx-auto border"
      max-width="300"
      type="card, button, button, divider, list-item-three-line,list-item-three-line	,list-item-three-line, list-item-three-line		"
    >
    </v-skeleton-loader>
    <v-container>
      <v-skeleton-loader class="w-full mx-auto h-full border" type="ossein"></v-skeleton-loader>
    </v-container>
  </v-layout>
</template>
