<script lang="ts" setup>
import WAshineMachineLogo from '@/assets/washing-machine-logo.png'
import WashingMachineAssetVue from '@/components/index-components/assets/WashingMachineAsset.vue'
</script>

<template>
  <section id="outro-section" class="overflow-hidden sm:overflow-auto">
    <div class="flex h-full flex-col items-center">
      <article
        class="prose md:prose-2xl prose-headings:sm:tracking-widest text-center space-y-40 font-bold"
      >
        <h3 data-aos-duration="1000" data-aos="fade-down">ตอนนี้ ก็รู้เคล็ดลับแล้ว</h3>
        <h3 data-aos-duration="1000" data-aos="fade-down">
          ถึงเวลาจบการซักผ้าที่น่าเบื่อนี้ซะที เพราะ...
        </h3>
        <h1
          class="gradient-heading bg-gradient-to-r from-primary to-secondary py-4"
          data-aos-duration="1000"
          data-aos="fade-down"
        >
          ถึงเวลาซักผ้าต้อง
        </h1>
      </article>
      <div class="h-[34rem] z-50 mt-48">
        <WashingMachineAssetVue :asset="WAshineMachineLogo" />

        <div id="triangle-shape">
          <div class="drop-shadow-xl -translate-y-60 -z-10 custom-shape-divider-bottom-1703845455">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.custom-shape-divider-bottom-1703845455 {
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1703845455 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 275px;
}

.custom-shape-divider-bottom-1703845455 .shape-fill {
  fill: oklch(var(--s));
}
</style>
