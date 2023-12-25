<script lang="ts">
import { useUserStore } from '../services/store/userStore'
import { useNotificationStore } from '../services/store/notificationStore'
import type { User } from '@/services/classes/User'
import type { PropType } from 'vue'

export default {
  data: () => ({
    sendNotification: useNotificationStore().sendNotification,
    form: {
      coins: ''
    }
  }),
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  },
  methods: {
    onAddCoins() {
      const { coins } = this.form
      if (+coins > 1000 || +coins < 1) {
        this.sendNotification(this.user, 'เพิ่มเหรียญไม่สำเร็จ', 'error')
      } else {
        this.user.balance.addCoins(+coins)
        this.sendNotification(this.user, 'เพิ่มเหรียญสำเร็จ', 'success')
      }
    }
  }
}
</script>

<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        variant="outlined"
        class="border-accent"
        size="small"
        text="เพิ่มเหรียญ"
      >
      </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <template v-slot:title>
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-semibold">เติมเหรียญ</h1>
            <v-btn :rounded="true" variant="tonal" size="small">
              <v-icon icon="mdi-close"></v-icon>
            </v-btn>
          </div>
          <div class="divider"></div>
        </template>
        <v-card-text>
          <FormKit type="form" :actions="false">
            <FormKit
              v-model="form.coins"
              type="text"
              name="coins"
              label="จำนวนที่ต้องการเติม"
              help="ขั้นต่ำ 1 และห้ามเกิน 1000 เหรียญ"
              :validation-messages="{
                min: 'จำนวนเหรียญต้องไม่ต่ำกว่า 1 เหรียญ',
                max: 'จำนวนเหรียญต้องไม่เกิน 1000 เหรียญ',
                required: 'จำนวนเหรียญต้องไม่เป็นค่าว่าง'
              }"
              validation="required|min:1|max:1000"
            />
            <div class="divider mt-12 mb-6">
              <v-btn
                text="ยืนยันการเพิ่มเหรียญ"
                color="primary"
                variant="tonal"
                @click="() => [onAddCoins(), (isActive.value = false), (form.coins = '')]"
              ></v-btn>
            </div>
          </FormKit>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>
