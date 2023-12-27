<script setup lang="ts">
import MapAsset from '@/assets/map.png'
import LaundryAsset from '@/assets/laundry-shop.png'
</script>

<template>
  <div class="grid gap-y-12 place-items-center grid-flow-row md:grid-flow-col">
    <figure class="grid place-items-center" id="image">
      <div class="w-3/4">
        <v-tooltip offset="24" class="my-tooltip" location="end">
          <template v-slot:activator="{ props }">
            <div class="relative">
              <div
                data-aos="fade-down"
                data-aos-anchor-placement="top-center"
                class="absolute -right-1 top-8"
              >
                <div
                  v-bind="props"
                  class="avatar hover:scale-125 z-10 skew-x-6 skew-y-4 rotate-6 transition-transform cursor-pointer skeleton rounded-full"
                >
                  <div
                    class="w-20 rounded-full p-3 animate-pulse z-10 transition-all duration-150 ease-in-out bg-primary/60"
                  >
                    <img :src="LaundryAsset" />
                  </div>
                  <div
                    class="w-14 absolute left-[17%] top-[16%] z-0 rounded-full p-3 animate-ping bg-primary/60"
                  ></div>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:default>
            <div class="grid grid-flow-row p-3">
              <div class="divider">ร้านซักดีมีชัย</div>
              <v-btn class="text-center" color="primary" size="small">ใช้บริการ</v-btn>
            </div>
          </template>
        </v-tooltip>

        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <img class="skew-y-6 skew-x-2 drop-shadow-xl" :src="MapAsset" alt="map-pic" />
        </div>
      </div>
    </figure>
    <div class="" id="context">
      <article class="prose prose-h1:text-6xl md:prose-lg prose-headings:tracking-wide text-center">
        <div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            class="avatar placeholder hover:scale-125 transition-transform cursor-pointer skeleton rounded-full"
          >
            <div
              class="w-16 rounded-full p-3 animate-pulse z-10 transition-all duration-150 ease-in-out bg-primary/80"
            >
              <span class="text-3xl text-white">1</span>
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
            หาร้านเครื่องซักผ้าใกล้คุณ
          </h2>
        </div>
        <h3 data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" class="font-light">
          ค้นหาร้านซักผ้าใกล้คุณ และเลือกใช้บริการได้ทันที ไม่ต้องกลัวว่าจะหาไม่เจอ
          เพราะเราจะหาร้านที่ใกล้ที่สุดให้คุณเอง
        </h3>
      </article>
    </div>
  </div>
</template>

<style scoped></style>
