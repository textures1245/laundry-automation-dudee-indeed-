<script lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'
import CoinSettingDialog from './CoinSettingDialog.vue'
import type { User } from '@/services/classes/User'
import type { PropType } from 'vue'
import { useNotificationStore } from '@/services/store/notificationStore'
import { useUserStore } from '../services/store/userStore'
import { useLaundryStore } from '@/services/store'
import QueueOperation from '../services/classes/QueueOperation'
import myAvatarPic from '@/assets/my-avatar.jpeg'

export default {
  components: { CoinSettingDialog },
  mounted() {
    console.log(this.user)
    return {}
  },
  data() {
    return {
      drawer: true,
      rail: false,
      panel: [0, 1],
      display: useDisplay(),
      tab: null,
      tabOptions: [
        { value: 'userQueue', text: 'คิวของฉัน' },
        { value: 'reserveQueue', text: 'คิวที่รอแจ้งเตือน' }
      ],
      queueState: useLaundryStore().getLandryQueues,
      myAvatar: myAvatarPic
    }
  },
  computed: {
    asSmSize() {
      if (this.display.smAndDown) {
        return false
      }
      return true
    },
    getReserveQueue() {
      return this.user.getAllReserveQueue(this.queueState as QueueOperation[])
    }
  },
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  },
  methods: {
    test() {
      useNotificationStore().sendNotification(this.user, 'test')
    }
  }
}
</script>

<template>
  <div class="relative">
    <div class="fixed z-10 left-2 bottom-2">
      <v-btn
        @click="() => (drawer = !drawer)"
        variant="flat"
        class="!bg-opacity-20"
        :rounded="true"
        color="primary"
        icon="mdi-menu"
      ></v-btn>
    </div>
  </div>
  <v-navigation-drawer
    fixed
    temporary
    elevation="6"
    width="300"
    :class="!rail ? 'p-3' : 'p-0'"
    location="left"
    v-model="drawer"
    :rail="rail"
    :permanent="asSmSize"
    @click="rail = false"
  >
    <div class="space-y-3">
      <v-list-item :prepend-avatar="myAvatar" :title="user.username" nav>
        <template v-slot:subtitle>
          <div class="flex flex-col gap-2 mt-2">
            <v-chip
              :link="true"
              target="_blank"
              size="small"
              href="https://github.com/textures1245/"
              variant="flat"
              color="black"
              >Github</v-chip
            >
            <v-chip
              :link="true"
              target="_blank"
              size="small"
              href="https://resume-gamma-topaz.vercel.app"
              variant="flat"
              color="primary"
              >Resume</v-chip
            >
          </div>
        </template>
        <template v-slot:append>
          <v-btn variant="text" icon="mdi-chevron-left" @click.stop="drawer = !drawer"></v-btn>
        </template>
      </v-list-item>
      <div v-if="!rail" class="flex items-center justify-between">
        <p class="text-subtitle-2">
          <v-icon icon="mdi-bitcoin"></v-icon>

          คงเหลือ: {{ user.balance.getBalance() }}
        </p>
        <CoinSettingDialog :user="user" />
        <!-- <button @click="() => test()">test</button> -->
      </div>

      <div class="divider"></div>

      <v-list density="compact" nav>
        <v-card class="mx-auto" max-width="300">
          <v-tabs v-model="tab" bg-color="primary">
            <v-tab
              v-for="(opt, i) of tabOptions"
              :key="i"
              :value="opt.value"
              :text="opt.text"
            ></v-tab>
          </v-tabs>
          <v-list>
            <v-window v-model="tab">
              <v-window-item value="userQueue">
                <v-list-subheader>ร้านเครื่องซักผ้าที่คุณกำลังใช้งาน</v-list-subheader>
                <v-list-item
                  class="space-y-4"
                  v-for="(queue, i) in user.queueList"
                  :key="i"
                  :value="queue.store"
                  color="primary"
                  rounded="shaped"
                >
                  <template v-slot:prepend>
                    <v-icon :icon="'mdi-store'"></v-icon>
                  </template>

                  <v-list>
                    <v-list-subheader>คิวเครื่องซักผ้าของคุณ</v-list-subheader>

                    <v-list-item
                      v-for="(machine, i) in queue.machinesOnQueue"
                      :key="i"
                      :value="machine"
                      color="primary"
                      rounded="shaped"
                    >
                      <template v-slot:prepend>
                        <v-icon :icon="'mdi-washing-machine'"></v-icon>
                      </template>

                      <template v-slot:subtitle>
                        <div class="flex flex-col gap-2">
                          <h1 class="text-sm font-semibold">เครื่องปั่น: {{ machine.name }}</h1>
                          <p class="font-light text-xs">
                            <v-icon icon="mdi-alarm"> </v-icon>
                            เวลาที่เหลือ {{ machine.timeLeft }} วินาที
                          </p>
                        </div>
                      </template>
                    </v-list-item>
                  </v-list>

                  <template v-slot:subtitle>
                    <div class="flex flex-col gap-2">
                      <h1 class="text-sm font-semibold">จากร้าน: {{ queue.store.name }}</h1>
                      <p class="font-light text-caption">
                        <v-icon icon="mdi-washin-machine"> </v-icon>
                        จำนวนเครื่องที่ใช้ในตอนนี้ {{ queue.machinesOnQueue.length }}
                      </p>
                    </div>
                  </template>
                </v-list-item>
                <div v-if="user.queueList.length < 1" class="text-sm text-slate-500 divider">
                  ยังไม่มีคิวที่ดำเนินการอยู่ในขณะนี้
                </div>
              </v-window-item>

              <v-window-item value="reserveQueue">
                <v-list-subheader>คิวเครื่องซักผ้าที่ทำเครื่องหมายแจ้งเตือน</v-list-subheader>
                <v-list-item
                  v-for="(queue, i) in getReserveQueue"
                  :key="i"
                  :value="i"
                  color="primary"
                  rounded="shaped"
                >
                  <template v-slot:prepend>
                    <v-icon :icon="'mdi-store'"></v-icon>
                  </template>

                  <v-list-item
                    v-for="(machine, i) in queue.machinesOnQueue"
                    :key="i"
                    :value="i"
                    color="primary"
                    rounded="shaped"
                  >
                    <template v-slot:prepend>
                      <v-icon :icon="'mdi-washing-machine'"></v-icon>
                    </template>

                    <template v-slot:subtitle>
                      <div class="flex flex-col gap-2">
                        <h1 class="text-sm font-semibold">เครื่องปั่น: {{ machine.name }}</h1>
                        <p class="font-light text-xs">
                          <v-icon icon="mdi-alarm"> </v-icon>
                          เวลาที่เหลือ {{ machine.timeLeft }} วินาที
                        </p>
                      </div>
                    </template>
                  </v-list-item>

                  <template v-slot:subtitle>
                    <div class="flex flex-col gap-2">
                      <h1 class="text-sm font-semibold">จากร้าน: {{ queue.store.name }}</h1>
                      <p class="font-light text-caption">
                        <v-icon icon="mdi-washin-machine"> </v-icon>
                        จำนวนเครื่องที่ใช้ในตอนนี้ {{ queue.machinesOnQueue.length }}
                      </p>
                    </div>
                  </template>
                </v-list-item>
                <div v-if="getReserveQueue.length < 1" class="text-sm text-slate-500 divider">
                  ยังไม่มีคิวที่ดำเนินการอยู่ในขณะนี้
                </div>
              </v-window-item>
            </v-window>
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
