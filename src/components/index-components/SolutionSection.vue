<script setup lang="ts">
import SolutionStepOne from '@/components/index-components/assets/SolutionStepOne.vue'
import SolutionStepTwo from '@/components/index-components/assets/SolutionStepTwo.vue'
import EaseLine from '@/components/index-components/assets/EaseLine.vue'
import SolutionStepThree from './assets/SolutionStepThree.vue'
import SolutionStepFour from './assets/SolutionStepFour.vue'
</script>

<template>
  <div class="grid grid-flow-row gap-y-8">
    <SolutionStepOne />
    <EaseLine side="left" />
    <SolutionStepTwo />
    <EaseLine side="right" />
    <div class="mt-6">
      <SolutionStepThree />
    </div>
    <section
      id="context"
      class="flex flex-col mt-48 mb-16  items-center"
    >
      <article
        class="prose md:prose-2xl prose-headings:tracking-widest text-center space-y-48 font-bold"
      >
        <h3 data-aos-duration="1000" class="tracking-widest" data-aos="fade-down">
          ใช้งานหลายเครื่อง, หลายร้าน
        </h3>
        <h3 data-aos-duration="1000" class="tracking-widest" data-aos="fade-down">
          ลืมไปแล้วว่าซักที่ร้านไหนบ้าง
        </h3>
        <h2
          class="tracking-widest gradient-heading bg-gradient-to-r from-error to-accent py-3"
          data-aos-duration="1000"
          data-aos="fade-down"
        >
          แล้วสรุปต้องเสียเท่าไหร่เนี้ย
        </h2>
        <h3 data-aos-duration="1000" class="tracking-widest" data-aos="fade-down">
          ปวดหัวใช่มั้ยหล่า แต่ไม่ต้องห่วง...
        </h3>
        <h1
          class="tracking-widest gradient-heading bg-gradient-to-r from-primary to-secondary py-4"
          data-aos-duration="1000"
          data-aos-anchor-placement="bottom-bottom"
          data-aos="fade-down"
        >
          เพราะเราจะติดตามและสรุปให้คุณเอง
        </h1>
      </article>
    </section>
    <EaseLine side="left" />
    <SolutionStepFour />
  </div>
</template>
