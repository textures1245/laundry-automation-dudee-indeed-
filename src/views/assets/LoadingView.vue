<script lang="ts" setup></script>

<template>
  <v-layout>
    <v-skeleton-loader
      class="mx-auto border"
      :max-width="300"
      type="card, button, button, divider, list-item-three-line,list-item-three-line	,list-item-three-line, list-item-three-line		"
    >
    </v-skeleton-loader>
    <div class="h-screen w-full">
      <v-skeleton-loader class="w-full mx-auto h-full border" type="ossein"></v-skeleton-loader>
    </div>
  </v-layout>
</template>
