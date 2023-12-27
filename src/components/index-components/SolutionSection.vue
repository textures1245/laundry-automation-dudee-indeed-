<script setup lang="ts">
import SolutionStepOne from '@/components/index-components/assets/SolutionStepOne.vue'
import SolutionStepTwo from '@/components/index-components/assets/SolutionStepTwo.vue'
import EaseLine from '@/components/index-components/assets/EaseLine.vue'
</script>

<template>
  <div class="grid grid-flow-row gap-y-40">
    <section id="stepOne">
      <SolutionStepOne />
      <EaseLine side="left" />
      <SolutionStepTwo />
      <EaseLine side="right" />
    </section>
  </div>
</template>
