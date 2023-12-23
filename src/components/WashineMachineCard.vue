<script lang="ts">
import type { WashingMachine } from '@/services/classes/WashingMachine'
import type { PropType } from 'vue'
import washingMachineImage from '@/assets/washing-machine.png'

export default {
  data() {
    return {
      washingMachineImage
    }
  },
  props: {
    machine: {
      type: Object as PropType<WashingMachine>,
      required: true
    }
  }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="card w-64 z-0 bg-base-100 shadow-lg border-sm pt-4">
      <figure>
        <img src="@/assets/washing-machine.png" alt="washing-machine-image" />
      </figure>
    </div>
    <div class="relative">
      <div class="card w-full -translate-y-10 bg-base-200 z-10 shadow-2xl">
        <div class="card-body w-80">
          <h2 class="card-title">
            {{ machine.name }}
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
