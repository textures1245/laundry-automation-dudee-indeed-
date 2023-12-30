<script lang="ts" setup>
import WashingMachineLogo from '@/assets/washing-machine-logo.png'
import { confetti } from '@tsparticles/confetti'
import { ref } from 'vue'

const defaults = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['heart'],
  colors: ['FFC0CB', 'FF69B4', 'FF1493', 'C71585']
}
let isEventHadClick = ref(false)
let beforeClick = ref<HTMLElement>()
let afterClick = ref<HTMLElement>()

async function onEventHadClick() {
  if (isEventHadClick.value) return
  isEventHadClick.value = true
  const promises = [
    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2
    }),
    confetti({
      ...defaults,
      particleCount: 25,
      scalar: 3
    }),
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 4
    })
  ]

  await Promise.all(promises)
  if (!beforeClick.value || !afterClick.value) return
  beforeClick.value.classList.add('animate__fadeOutDown')
  setTimeout(() => {
    beforeClick.value!.classList.add('hidden')
    afterClick.value!.classList.remove('hidden')
    afterClick.value!.classList.add('animate__fadeInDown')
  }, 500)
}
</script>

<template>
  <footer
    class="footer md:place-items-center p-10 py-16 bg-gradient-to-t to-accent-content/80 from-secondary from-90% !bg-secondary !text-secondary-content"
  >
    <aside>
      <div class="flex justify-start my-2">
        <span class="sr-only">Logo</span
        ><a href="/"
          ><a href="/"
            ><img
              alt="comcamp-22nd-navbar-logo"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              class="w-14"
              :src="WashingMachineLogo"
              style="color: transparent"
          /></a>
        </a>
        <div class="text-2xl uppercase flex flex-col justify-center gap-1 font-light tracking-wide">
          <div
            class="badge drop-shadow-lg bg-gradient-to-bl from-secondary to-accent badge-secondary badge-lg"
          >
            Laundry
          </div>
          <div
            class="bg-gradient-to-tr from-secondary to-primary shadow-primary drop-shadow-lg uppercase badge badge-primary"
          >
            Automation
          </div>
        </div>
      </div>

      <div class="relative rounded-lg p-[2px] text-white bg-animation">
        <div class="rounded-lg flex flex-col gap-1 z-50 relative p-4">
          <div
            @click="onEventHadClick"
            id="heart-event"
            class="hover:scale-110  sm:inline-flex  badge-neutral rounded-lg text-center sm:text-start bg-opacity-70 p-3 cursor-help transition-transform"
          >
            <span ref="beforeClick" class="animate__animated"> Crafted for </span>
            <span ref="afterClick" class="hidden animate__animated">
              Crafted with
              <img
                class="w-4 inline-block"
                src="https://i.pinimg.com/originals/66/39/79/663979c8c0a71d04a807cca809aea15d.gif"
                alt=""
              />
              for
            </span>
            <span>&nbsp;Dudee-Indeed Corporation</span>
          </div>
          <a
            class="link divider divider-start divider-warning mb-0 link-hover underline-offset-4"
            href="https://github.com/textures1245"
            >© textures1245</a
          >
        </div>
      </div>
    </aside>
    <nav>
      <header class="footer-title">Services</header>
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>
    </nav>
    <nav>
      <header class="footer-title">Company</header>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </nav>
    <nav>
      <header class="footer-title">Legal</header>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </nav>
  </footer>
</template>

<style lang="postcss" scope>
.bg-animation:after {
  content: '';
  --angle: 0deg;
  border-radius: 0.6rem;
  @apply absolute inset-0 z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500;
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes rotate-animation {
  to {
    --angle: 360deg;
  }
}

@supports (background: paint(houdini)) {
  .bg-animation:after {
    animation: rotate-animation 10s linear infinite;
    background: linear-gradient(var(--angle), #ec4899, #407cff, #ec4899, #6366f1);
  }
}
</style>
