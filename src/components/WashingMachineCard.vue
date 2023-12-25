<script lang="ts">
import type { WashingMachine } from '@/services/classes/WashingMachine'
import type { PropType } from 'vue'
import type { User } from '@/services/classes/User'
import type { LaundryStore } from '@/services/classes/LaundryStore'
import type QueueOperation from '@/services/classes/QueueOperation'
import { useNotificationStore } from '@/services/store/notificationStore'

export default {
  props: {
    machine: {
      type: Object as PropType<WashingMachine>,
      required: true
    },
    user: {
      type: Object as PropType<User>,
      required: true
    },
    storeQueue: {
      type: Object as PropType<QueueOperation>,
      required: true
    },
    laundryStore: {
      type: Object as PropType<LaundryStore>,
      required: true
    }
  },
  data() {
    return {
      form: {
        time: '0'
      },
      notificationStore: useNotificationStore()
    }
  },
  computed: {
    onProgression() {
      return Math.floor((this.machine.timeLeft / this.machine.fromTime) * 100)
    }
  },
  methods: {
    onUseMachine() {
      const { time } = this.form
      const cost = +time * 2
      if (
        this.user.useWashingMachine(this.machine, cost, +time, this.storeQueue, this.laundryStore)
      ) {
        this.notificationStore.sendNotification(this.user, 'ใช้งานเครื่องซักผ้าสำเร็จ', 'success')
      } else {
        this.notificationStore.sendNotification(
          this.user,
          'เหรียญไม่พอกรุณาเติมเหรียญแล้วลองอีกครั้ง',
          'error'
        )
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div
      :class="machine.isAvailable ? '' : 'skeleton animate__headShake'"
      class="card w-64 z-0 bg-base-100 shadow-lg border-sm"
    >
      <figure>
        <div v-if="!machine.isAvailable" class="relative">
          <div
            style="opacity: 100% !important"
            class="absolute -top-[2.70rem] -left-[0.5rem] translate-x-1/2 z-50"
          >
            <v-progress-circular
              :rotate="360"
              :size="135"
              :width="18"
              class="!opacity-90 text-lg font-semibold"
              :model-value="onProgression"
              color="warning"
            >
              {{ onProgression }} %
            </v-progress-circular>
          </div>
        </div>
        <img
          :class="machine.isAvailable ? 'opacity-100' : 'opacity-50 blur-[1px] skeleton'"
          src="@/assets/washing-machine.png"
          class="pt-4"
          alt="washing-machine-image"
        />
      </figure>
    </div>
    <div class="relative">
      <div
        :class="machine.isAvailable ? 'bg-base-200' : 'bg-base-300 skeleton'"
        class="card w-full -translate-y-10 z-10 shadow-2xl"
      >
        <div class="card-body w-80">
          <h2 class="card-title">
            {{ machine.name }}
          </h2>
          <div class="divider divider-start">
            <div
              :class="machine.isAvailable ? 'badge-success' : 'badge-warning'"
              class="badge badge-secondary p-3"
            >
              {{ machine.isAvailable ? 'พร้อมใช้งาน' : 'ไม่ว่าง' }}
            </div>
          </div>
          <!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
          <div v-if="machine.isAvailable" class="">
            <FormKit type="form" :actions="false">
              <FormKit
                type="number"
                help="ห้ามต่ำกว่า 70 วินาที สูงสุด 360 วินาที"
                label="นาทีที่ใช้งาน"
                name="time"
                :validation-messages="{
                  min: 'นาทีต้องไม่ต่ำกว่า 70 วินาที',
                  max: 'วินาทีต้องไม่เกิน 360 วินาที',
                  required: 'จำนวนเหรียญต้องไม่เป็นค่าว่าง',
                  number: 'กรุณากรอกเป็นตัวเลขจำนวนเต็มเท่านั้น'
                }"
                v-model="form.time"
                validation="required|min:70|max:360|number"
                step="10"
              />
            </FormKit>
            <div class="space-y-2">
              <p v-if="+form.time !== 0" class="text-caption text-center text-primary/90">
                จำนวนเหรียญที่ต้องจ่าย {{ +form.time * 2 }}
              </p>
              <div class="flex items-center justify-between">
                <p class="text-caption">1 วินาทีเท่ากับ 2 เหรียญ</p>
                <v-btn
                  :disabled="+form.time === 0 || +form.time > 360 || +form.time < 70"
                  @click="() => onUseMachine()"
                  prepend-icon="mdi-washing-machine"
                  title="ใช้งาน"
                  variant="tonal"
                  color="primary"
                  >ใช้งาน</v-btn
                >
              </div>
            </div>
          </div>
          <div v-else>
            <v-card-text>
              <div class="text-sm text-slate-500 divider">
                <h1>เครื่องกำลังใช้งานอยู่ในขณะนี้</h1>
              </div>
            </v-card-text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
