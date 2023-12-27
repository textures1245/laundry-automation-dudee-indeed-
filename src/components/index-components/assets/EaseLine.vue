<script lang="ts">
import type { PropType } from 'vue'
import EaseAsset from '@/assets/ease.png'
import EaseOnSmallScreen from '@/assets/ease-on-sm.png'

export default {
  name: 'EaseLine',
  data() {
    return {
      EaseAsset: EaseAsset as string,
      EaseOnSmallScreen: EaseOnSmallScreen as string
    }
  },
  props: {
    side: {
      type: String as PropType<'right' | 'left'>,
      required: true
    }
  },
  computed: {
    marginAdjust() {
      return this.side === 'left' ? 'mr-28' : 'ml-28'
    },
    transformAdjust() {
      return this.side === 'right' ? '-scale-x-100' : ''
    }
  }
}
</script>

<template>
  <div data-aos="flip-left" data-aos-duration="1000">
    <div :class="marginAdjust" class="hidden lg:grid -translate-y-16 -mb-32 place-items-center">
      <figure>
        <img :class="transformAdjust" class="w-2/4 lg:w-3/4" :src="EaseAsset" alt="" />
      </figure>
    </div>
    <div class="grid lg:hidden place-items-center">
      <img class="w-2/6 rotate-90" :src="EaseOnSmallScreen" alt="" />
    </div>
  </div>
</template>
