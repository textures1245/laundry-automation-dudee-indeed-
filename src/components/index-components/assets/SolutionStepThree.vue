<script setup lang="ts"></script>

<template>
  <div class="grid gap-y-12 place-items-center grid-flow-row-dense md:grid-cols-2">
    <figure class="grid place-items-center" id="image">
      <div class="place-items-center">
        <div class="relative">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
            class="absolute z-10 left-[10rem] !translate-x-10 -top-12"
          >
            <div id="notification_ball" class="skew-y-6 drop-shadow-2xl skew-x-3">
              <iframe
                class="w-full"
                src="https://lottie.host/embed/0c23cd35-85fa-42e1-8473-268a9513da3f/gxyOu4WuyP.json"
              ></iframe>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
            class="absolute w-full z-10 -left-16 top-8"
          >
            <div class="chat chat-end">
              <div
                class="chat-bubble chat-bubble-primary bg-gradient-to-l from-primary to-secondary skew-y-6 drop-shadow-2xl shadow-primary shadow-2xl skew-x-3"
              >
                คุณได้รับการแจ้งเตือนใหม่ 🔔
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
              class="chat -mr-6 chat-end"
            >
              <div
                class="chat-bubble chat-bubble-accent text-white bg-gradient-to-tl from-accent to-secondary skew-y-6 drop-shadow-2xl shadow-accent shadow-2xl skew-x-3"
              >
                เครื่องซักผ้าจะเสร็จในอีก 1 นาที
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <div class="skew-y-6 skew-x-2 drop-shadow-xl">
            <v-card>
              <v-skeleton-loader
                class="mx-auto border"
                max-width="300"
                type="card, button, button, divider, list-item-two-line,list-item-three-line	,list-item-two-line		"
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
              <span class="text-3xl text-white">3</span>
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
            คุณไม่จำเป็นต้องรอ <br />
            เดียวเรารอแทนคุณเอง
          </h2>
        </div>
        <h4 data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" class="font-light">
          เมื่อคุณเริ่มใช้งานเครื่องซักผ้าเสร็จ
          คุณไม่จำเป็นต้องกังวลหรือรอเครื่องซักผ้าว่าจะเสร็จเมื่อไร
          เราจะรอแทนคุณและแจ้งเตือนให้คุณทราบความคืบหน้าอย่างต่อเนื่อง เพื่อเซฟเวลาอันมีค่าของคุณให้
        </h4>
      </article>
    </div>
  </div>
</template>

<style scoped></style>
