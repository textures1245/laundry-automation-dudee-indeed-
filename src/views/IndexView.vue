<script setup lang="ts">
import HeroSection from '@/components/index-components/HeroSection.vue'
import Navbar from '@/components/index-components/NavbarComponent.vue'
import ProblemSection from '@/components/index-components/ProblemSection.vue'
import SolutionSection from '@/components/index-components/SolutionSection.vue'
</script>
<template>
  <v-main>
    <div class="bg-base-200">
      <Navbar />
      <div class="container mx-auto">
        <div class="pb-40">
          <HeroSection />
        </div>
        <div class="space-y-48">
          <ProblemSection />
          <SolutionSection />
        </div>
      </div>
    </div>
  </v-main>
</template>
