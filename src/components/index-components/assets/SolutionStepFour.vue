<script setup lang="ts">
import WashingMachineMini from '@/assets/washing-machine-mini.png'
</script>

<template>
  <div class="grid gap-y-12 place-items-center grid-flow-row-dense md:grid-cols-2">
    <figure class="grid order-1 place-items-center" id="image">
      <div class="place-items-center">
        <!-- <div class="relative">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
            class="absolute z-10 left-[7.5rem] -top-12"
          >
            <div id="notification_ball" class="skew-y-6 drop-shadow-2xl skew-x-3">
              <iframe
                src="https://lottie.host/embed/0c23cd35-85fa-42e1-8473-268a9513da3f/gxyOu4WuyP.json"
              ></iframe>
            </div>
          </div>
        </div> -->
        <div data-aos="fade-up">
          <div class="-skew-y-3 -skew-x-3 drop-shadow-xl">
            <div class="relative">
              <div
                data-aos="fade-down"
                data-aos-anchor-placement="top-center"
                class="absolute z-10 left-1 -top-2"
              >
                <div
                  class="!bg-accent z-0 left-4 top-6 pointer-events-none transform absolute aspect-square w-14 rounded-full blur-xl"
                />
                <div class="absolute left-32 top-4">
                  <div class="flex gap-4">
                    <div class="shadow-green-600 shadow-lg">
                      <v-btn class="hover:scale-110 transition-all" color="success">
                        <v-icon>mdi-washing-machine-alert</v-icon>
                      </v-btn>
                    </div>
                    <div class="shadow-green-600 shadow-lg">
                      <v-btn class="hover:scale-110 transition-all" color="success">
                        <v-icon>mdi-check</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </div>
                <div class="bg-opacity-0">
                  <img
                    class="w-16 drop-shadow-xl drop-shadow-red shadow-secondary -skew-y-3 -skew-x-6 -rotate-6 -scale-x-100"
                    :src="WashingMachineMini"
                    alt=""
                  />
                </div>
              </div>
              <div
                data-aos="fade-down"
                data-aos-anchor-placement="top-center"
                class="absolute z-10 left-1 top-32"
              >
                <div
                  class="!bg-accent z-0 left-4 top-6 pointer-events-none transform absolute aspect-square w-14 rounded-full blur-xl"
                />
                <div class="absolute left-32 top-4">
                  <div class="flex gap-4">
                    <div class="shadow-primary/70 shadow-lg">
                      <v-btn class="hover:scale-110 transition-all" color="info">
                        <v-icon>mdi-washing-machine</v-icon>
                      </v-btn>
                    </div>
                    <div class="shadow-primary/70 shadow-lg">
                      <v-btn class="hover:scale-110 transition-all" color="info">
                        <v-icon>mdi-clock</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </div>
                <div class="bg-opacity-0">
                  <img
                    class="w-16 drop-shadow-xl drop-shadow-red shadow-secondary -skew-y-3 -skew-x-6 -rotate-6 -scale-x-100"
                    :src="WashingMachineMini"
                    alt=""
                  />
                </div>
              </div>
              <div
                data-aos="fade-down"
                data-aos-anchor-placement="top-center"
                class="absolute z-10 left-1 top-64"
              >
                <div
                  class="!bg-accent z-0 left-4 top-6 pointer-events-none transform absolute aspect-square w-14 rounded-full blur-xl"
                />
                <div class="absolute left-32 top-4">
                  <div class="flex gap-4">
                    <div class="shadow-yellow-600 shadow-lg">
                      <v-btn class="hover:scale-110 transition-all" color="warning">
                        <v-icon>mdi-bell-badge </v-icon>
                      </v-btn>
                    </div>
                    <div class="shadow-yellow-600 shadow-lg">
                      <v-btn class="hover:scale-110 transition-all" color="warning">
                        <v-icon>mdi-bell-ring</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </div>
                <div class="bg-opacity-0">
                  <img
                    class="w-16 drop-shadow-xl drop-shadow-red shadow-secondary -skew-y-3 -skew-x-6 -rotate-6 -scale-x-100"
                    :src="WashingMachineMini"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <v-card>
              <v-skeleton-loader
                class="mx-auto border"
                max-width="300"
                type="avatar, actions, list-item-two-line, divider, avatar, actions, list-item-two-line, divider, avatar, actions, list-item-two-line"
              >
              </v-skeleton-loader>
            </v-card>
          </div>
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
              <span class="text-3xl text-white">4</span>
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
            พบกับระบบติดตามคิวเครื่องซักผ้าอัจฉริยะ
          </h2>
        </div>
        <h4 data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" class="font-light">
          ไม่ต้องมาค่อยปวดหัวว่าคุณได้ใช้เครื่องซักผ้ากี่เครื่อง ใช้ที่ไหน
          หรือได้ทำการแจ้งเตือนที่เครื่องไหนบ้าง เพราะทางเราจะทำการบันทึกให้คุณเอง <br />
          คุณแค่มาใช้เครื่องซักผ้า ส่วนที่เหลือเราจัดการให้
        </h4>
      </article>
    </div>
  </div>
</template>

<style scoped></style>
