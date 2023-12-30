<script setup lang="ts">
import Logo from '@/assets/washing-machine-logo.png'
import router from '@/router/index';

function toDashboard() {
  router.push('/dashboard')
}
</script>

<template>
  <div class="fixed z-50 w-full text-gray-900 bg-opacity-0 backdrop-filter backdrop-blur-lg">
    <div
      class="flex items-center justify-between px-4 mx-0 lg:mx-auto sm:px-6 md:space-x-10"
    >
      <div class="flex justify-start my-2 lg:w-0 lg:flex-1">
        <span class="sr-only">Logo</span
        ><a href="/"
          ><a href="/"
            ><img
              alt="comcamp-22nd-navbar-logo"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              class="w-16"
              :src="Logo"
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
   
      <div class="items-end justify-end ">
        <div class="avatar cursor-pointer m-0 placeholder">
          <div
            role="button"
            @click="toDashboard"
            class="bg-gradient-to-r from-secondary via-primary to-accent background-animate text-white rounded-full w-16"
          >
            <span class="text-xl">ซัก</span>
          </div>
        </div>
        <!-- <button class="btn">action</button> -->
      </div>
    </div>
  </div>
</template>
