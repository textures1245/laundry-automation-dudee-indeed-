<script lang="ts" setup>
import WashingMachineDoorAsset from '@/assets/washing-machine-door.png'
import { defineProps } from 'vue'
import router from '@/router/index'

const props = defineProps({
  asset: {
    type: String,
    required: true
  }
})

function animateOnMouseLeave(event: MouseEvent) {
  ;(event.target as HTMLElement).classList.add('animate-[spin_1s_ease-in-out_reverse]')
  setTimeout(() => {
    ;(event.target as HTMLElement).classList.remove('animate-[spin_1s_ease-in-out_reverse]')
  }, 1000) // Remove the animation after 1 second
}

function toDashboard() {
  router.push('/dashboard')
}
</script>

<template>
  <div id="washing-machine" class="">
    <div class="grid place-items-center">
      <div class="relative flex justify-center w-full">
        <div class="absolute -top-12 z-10">
          <div class="grid gap-8 grid-flow-row place-items-center">
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
              class=""
            >
              <div
                class="badge shadow-2xl shadow-secondary bg-gradient-to-bl from-secondary to-accent badge-secondary skew-y-3 tracking-widest text-3xl sm:text-5xl md:text-6xl p-8 font-semibold uppercase badge-lg"
              >
                Laundry
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
              class=""
            >
              <div
                class="tracking-widest drop-shadow-2xl bg-gradient-to-tr from-secondary to-primary shadow-primary -skew-y-3 shadow-2xl text-3xl sm:text-5xl md:text-6xl font-bold uppercase badge badge-primary badge-lg p-10"
              >
                Automation
              </div>
            </div>
          </div>
        </div>
      </div>
      <figure class="relative translate-y-8">
        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          class="!bg-secondary bottom-0 -left-28 pointer-events-none transform absolute aspect-square w-96 rounded-full blur-3xl"
        />
        <!-- <div
              class="!bg-primary/80 -top-40 left-1/2 -translate-x-1/2 pointer-events-none transform absolute aspect-square w-[32rem] rounded-full blur-3xl"
            /> -->
        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          class="!bg-accent bottom-0 -right-28 pointer-events-none transform absolute aspect-square w-96 rounded-full blur-3xl"
        />
        <div class="">
          <div class="absolute -translate-x-1/2 top-[35%] left-1/2 !z-10">
            <div
              class="w-[70%] h-[70%] absolute left-[15%] top-[15%] animate-ping rounded-full bg-primary"
            ></div>
            <div
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div @mouseleave="animateOnMouseLeave" class="group cursor-pointer">
                <div
                  class="absolute z-20 group-hover:scale-125 transition-transform drop-shadow-2xl -translate-x-1/2 top-[32%] left-1/2"
                >
                  <div class="avatar cursor-pointer m-0 placeholder">
                    <div
                      role="button"
                      @click="toDashboard"
                      class="bg-gradient-to-r from-secondary via-primary to-accent background-animate text-white rounded-full w-24"
                    >
                      <span class="text-3xl">ซัก</span>
                    </div>
                  </div>
                </div>
                <img
                  :src="WashingMachineDoorAsset"
                  class="group-hover:animate-[spin_1s_ease-in-out_infinite] transition-all animate_[] drop-shadow-2xl"
                  alt=" washing-machine"
                />
              </div>
            </div>
          </div>
          <figure class="!w-[512px] !h-[512px]">
            <img
              data-aos="fade-down"
              data-aos-duration="700"
              :src="props.asset"
              class="drop-shadow-2xl"
              alt=" washing-machine"
            />
          </figure>
        </div>
      </figure>
    </div>
  </div>
</template>
