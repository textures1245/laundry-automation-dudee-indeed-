<script setup lang="ts">
import Logo from '@/assets/washing-machine-logo.png'
</script>

<template>
  <div class="fixed z-50 w-full text-gray-900 bg-opacity-0 backdrop-filter backdrop-blur-lg">
    <div
      class="flex items-center justify-between max-w-6xl px-4 mx-0 lg:mx-auto sm:px-6 md:space-x-10"
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
              class="w-16 "
              :src="Logo"
              style="color: transparent"
          /></a>
        </a>
        <h1 class=" text-2xl  font-light tracking-wide">
          <div class="badge badge-secondary text-xl badge-lg">
            Laundry
          </div>  <br />
          Automation
        </h1>
      </div>
      <div class="flex gap-2 md:hidden">
        <div class="-my-2 -mr-2 dropdown order-1 dropdown-end">
          <div
            tabindex="0"
            class="bg-gray-200 text-gray-600 rounded-full p-3.5 inline-flex items-center justify-center hover:text-gray-700 hover:bg-gray-300 cursor-pointer focus:outline-none general-ring-state"
          >
            <span class="sr-only">Open menu</span
            ><svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4.75 5.75H19.25"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4.75 18.25H19.25"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4.75 12H19.25"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="dropdown-content z-[1] backdrop-filter backdrop-blur-lg menu mt-4 shadow bg-base-content/80 text-base rounded-box w-52"
          >
            <li class="bg-accent rounded-md">
              <a class="text-accent-content" href="{data.link}">{data.label}</a>
            </li>
          </ul>
        </div>
      </div>
      <nav class="hidden space-x-4 lg:space-x-8 text-sm lg:text-lg md:flex"></nav>
      <div class="items-end justify-end hidden md:flex lg:flex-1 lg:w-0">
        <!-- <button class="btn">action</button> -->
      </div>
    </div>
  </div>
</template>
