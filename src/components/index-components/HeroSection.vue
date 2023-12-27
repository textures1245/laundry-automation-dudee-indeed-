<script setup lang="ts">
import WashingMachineImage from '@/assets/washing-machine-index.png'
</script>

<template>
  <div class="h-[70rem]">
    <div class="custom-shape-divider-bottom-1703686202 bg-base-200 pb-60">
      <div class="h-[30rem] bg-gradient-to-t from-primary/70 to-primary/50">
        <article class="flex flex-col items-center justify-center h-full">
          <article class="prose md:prose-xl lg:prose-2xl">
            <h1 class="font-semibold text-center text-white">ร้านซักผ้าออนไลน์</h1>
            <h4 class="font-light text-center text-white">
              ร้านซักผ้าออนไลน์ที่ให้บริการซักผ้าและอบผ้าด้วยเครื่องซักผ้าอัตโนมัติ
            </h4>
          </article>
        </article>
      </div>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        class="bg-gradient-to-t from-secondary from-40% to-primary/70"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          class="shape-fill"
        ></path>
      </svg>
      <div class="">

        <div class="absolute drop-shadow-2xl -translate-y-[85%] left-1/2 -translate-x-1/2">
          <img class="max-w-min" :src="WashingMachineImage" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.custom-shape-divider-bottom-1703686202 {
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1703686202 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 450px;
}

.custom-shape-divider-bottom-1703686202 .shape-fill {
  fill: oklch(var(--b2));
}
</style>
