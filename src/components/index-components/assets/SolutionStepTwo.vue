<script setup lang="ts">
import MapAsset from '@/assets/map.png'
import LaundryAsset from '@/assets/laundry-shop.png'
import WashingAnimation from '@/components/WashingAnimation.vue'
import { ref } from 'vue'

const items = [
  { text: 'ใช้เครื่องซักผ้าเลย!', icon: 'mdi-washing-machine' },
  { text: 'อ้าว! ไม่มีเครื่องซักผ้าว่างทำไงดี', icon: 'mdi-alert' }
]
let valueSelected = ref(items[0])
let isShowMessage = ref(false)
</script>

<template>
  <div
    class="grid overflow-x-hidden sm:overflow-auto pb-28  -mb-10 gap-y-12 mt-12  sm:mb-12 place-items-center grid-flow-row md:grid-flow-col"
  >
    <figure
      data-aos="fade-down"
      data-aos-anchor-placement="center-bottom"
      class="grid place-items-center order-1"
      id="image"
    >
      <div class="relative">
        <div class="hidden sm:absolute z-10 -translate-x-1/2 translate-y-[45%]">
          <WashingAnimation />
        </div>
      </div>
      <div class="w-full h-full relative" v-if="valueSelected.icon === 'mdi-alert'">
        <div class="absolute -skew-x-6 z-10 left-8 translate-y-64">
          <button
            data-aos="zoom-in-left"
            @click="() => (isShowMessage = !isShowMessage)"
            class="btn drop-shadow-lg shadow-lg text-base md:text-xl w-40 btn-primary btn-md md:btn-lg"
          >
            แจ้งเตือนฉัน
          </button>
          <div v-if="isShowMessage" class="chat chat-start ml-12">
            <div
              data-aos="fade-down"
              data-aos-anchor-placement="top-center"
              class="md:absolute mt-2 mr-2 md:mt-0 md:mr-2 right-2 top-8"
            >
              <div
                class="avatar chat-image hover:scale-125 z-10 skew-x-6 skew-y-4 rotate-[3deg] transition-transform cursor-pointer skeleton rounded-full"
              >
                <div
                  class="w-20  rounded-full p-3 animate-pulse z-10 transition-all duration-150 ease-in-out !bg-primary/80"
                >
                  <img :src="LaundryAsset" />
                </div>
                <div
                  class="w-14 absolute left-[17%] top-[16%] z-0 rounded-full p-3 animate-ping !bg-primary/50"
                ></div>
              </div>
            </div>
            <div
              class="chat-bubble bg-gradient-to-br from-primary to-secondary chat-bubble-primary animate__animated animate__fadeInUp shadow-xl drop-shadow-lg"
            >
              🧺 จากร้าน: ซักดีมีชัย <br />ทำการมาร์คการแจ้งเตือนเป็นที่เรียบร้อยแล้ว
              เราจะแจ้งเตือนให้ทราบเมื่อเครื่องใช้งานเสร็จ 😃
            </div>
          </div>
        </div>
      </div>

      <img
        src="@/assets/washing-machine-2.png"
        class="pt-4 w-3/4 drop-shadow-2xl shadow-blue-500 transition-all duration-500 ease-in-out"
        alt="washing-machine-image"
      />
    </figure>
    <div class="" id="context">
      <article
        class="prose prose-h1:text-6xl md:prose-lg mb-8 prose-headings:tracking-wide text-center"
      >
        <div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            class="avatar placeholder hover:scale-125 transition-transform cursor-pointer skeleton rounded-full"
          >
            <div
              class="w-16 rounded-full p-3 animate-pulse z-10 transition-all duration-150 ease-in-out bg-primary/80"
            >
              <span class="text-3xl text-white">2</span>
            </div>
            <div
              class="w-10 absolute left-[17%] top-[16%] z-0 rounded-full p-3 animate-ping bg-primary/80"
            ></div>
          </div>
          <h2
            
            data-aos="fade-down"
            data-aos-anchor-placement="bottom-bottom"
            class="font-semibold gradient-heading bg-gradient-to-r from-primary to-secondary"
          >
            เลือกเครื่องปั่นที่ถูกใจคุณจากนั่น...
          </h2>
          <h4
            v-if="valueSelected.icon === 'mdi-alert'"
            class="animate__fadeIn animate__animated font-light"
          >
            ไม่ต้องห่วงเรื่องเครื่องซักผ้าไม่ว่าง หรือกลัวคุณไม่ทันคนอื่น
            คุณสามารถมาร์คการแจ้งเตือนได้ทันที เมื่อเครื่องซักผ้าว่าง
            เราจะแจ้งเตือนให้คุณทราบก่อนใครทันที
          </h4>
        </div>
      </article>
      <v-card
        data-aos="fade-down"
        data-aos-anchor-placement="bottom-bottom"
        class="mx-auto"
        max-width="450"
        rounded="xl"
      >
        <v-list density="compact">
          <v-list-item
            @click="valueSelected = item"
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<style scoped></style>
