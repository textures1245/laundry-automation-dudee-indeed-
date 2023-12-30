<script lang="ts">
import type { User } from '@/services/classes/User'
import type { PropType } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { useNotificationStore } from '../services/store/notificationStore'

export default {
  components: {},

  data() {
    return {
      drawer: false,
      rail: false,
      panel: [0, 1],
      display: useDisplay()
    }
  },
  computed: {
    asSmSize() {
      if (this.display.smAndDown) {
        return false
      }
      return true
    },
    userNotification() {
      return useNotificationStore().getUserNotification(this.user.uId).reverse() ?? []
    }
  },
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  },
  methods: {}
}
</script>

<template>
  <div class="relative">
    <div class="fixed z-50 right-2 bottom-2">
      <v-btn
        @click="() => (drawer = !drawer)"
        variant="flat"
        class="!bg-opacity-20"
        :rounded="true"
        color="warning"
        icon="mdi-message-badge"
      ></v-btn>
    </div>
  </div>
  <v-navigation-drawer
    fixed
    temporary
    width="300"
    :class="!rail ? 'p-3' : 'p-0'"
    location="right"
    v-model="drawer"
    @click="rail = false"
  >
    <div class="space-y-3">
      <v-list-item prepend-icon="mdi-message" :title="'รายการข้อความแจ้งเตือนทั้งหมด'" nav>
        <template v-slot:append>
          <v-btn variant="text" icon="mdi-chevron-right" @click.stop="drawer = !drawer"></v-btn>
        </template>
      </v-list-item>

      <div class="divider"></div>

      <v-list density="compact" nav>
        <v-card class="mx-auto" max-width="300">
          <v-list>
            <v-list-subheader>จำนวนรายการทั่งหมด {{ userNotification.length }}</v-list-subheader>

            <v-list-item
              class="space-y-4"
              v-for="(notification, i) in userNotification"
              :key="i"
              :value="i"
              color="primary"
              rounded="shaped"
            >
              <template v-slot:prepend>
                <v-icon :icon="'mdi-message-text-fast'"></v-icon>
              </template>

              <template v-slot:subtitle>
                <div class="flex flex-col gap-2">
                  <h1 class="text-sm font-semibold">{{ notification.message }}</h1>
                  <p class="font-light text-caption">
                    ส่งเมื่อ {{ notification.date.toLocaleString() }}
                  </p>
                </div>
              </template>
            </v-list-item>

            <div v-if="userNotification.length < 1" class="text-sm text-slate-500 divider">
              คุณยังไม่ได้รับข้อความใด ๆ ในขณะนี้
            </div>
          </v-list>
        </v-card>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<style scoped>
.v-navigation-drawer {
  position: fixed !important;
  top: 0;
  bottom: 0;
  height: 100vh !important;
}
</style>
