<script lang="ts">
import CoinSettingDialog from './CoinSettingDialog.vue'
import type { User } from '@/services/classes/User'
import { type PropType, watch } from 'vue'
import type { LaundryStore } from '@/services/classes/LaundryStore'
import { WashingMachine } from '../services/classes/WashingMachine'
import QueueOperation from '../services/classes/QueueOperation'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import myAvatarPic from '@/assets/my-avatar.jpeg'

export default {
  name: 'LandryStoreDrawer',
  components: { CoinSettingDialog },
  mounted() {
    watch(
      () => this.user.queueList.find((q) => q.store.id === this.laundryStore.id)?.machinesOnQueue,
      (newValue) => {
        this.userQueue = newValue ?? []
      }
    )
  },
  data() {
    return {
      drawer: true,
      rail: false,
      panel: [0, 1],
      tab: null,
      display: useDisplay(),
      userQueue:
        this.user.queueList.find((q) => q.store.id === this.laundryStore.id)?.machinesOnQueue ||
        ([] as WashingMachine[]),
      tabOptions: [
        { value: 'allQueue', text: 'คิวทั้งหมด' },
        { value: 'myQueue', text: 'คิวของฉัน' }
      ],
      myAvatar: myAvatarPic
    }
  },
  computed: {
    asSmSize() {
      if (this.display.smAndDown) {
        return false
      }
      return true
    }
  },
  props: {
    user: {
      type: Object as PropType<User>,

      required: true
    },
    laundryStore: {
      type: Object as PropType<LaundryStore>,
      required: true
    },
    storeQueue: {
      type: Object as PropType<QueueOperation>,
      required: true
    },
    machines: {
      type: Array as PropType<WashingMachine[]>,
      required: true
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
    temporary
    class="fixed bg-fixed"
    app
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
        <template v-slot:append>
          <v-btn variant="text" icon="mdi-chevron-left" @click.stop="drawer = !drawer"></v-btn>
        </template>
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
      </v-list-item>

      <div v-if="!rail" class="flex items-center justify-between">
        <p class="text-subtitle-2">
          <v-icon icon="mdi-bitcoin"></v-icon>

          คงเหลือ: {{ user.balance.getBalance() }}
        </p>
        <CoinSettingDialog :user="user" />
      </div>

      <div class="divider"></div>

      <v-card>
        <v-tabs v-model="tab" bg-color="primary">
          <v-tab
            v-for="(opt, i) of tabOptions"
            :key="i"
            :value="opt.value"
            :text="opt.text"
          ></v-tab>
        </v-tabs>

        <v-list density="compact" nav>
          <v-window v-model="tab">
            <v-window-item value="allQueue">
              <v-list>
                <v-list-subheader>คิวเครื่องซักผ้าในตอนนี้</v-list-subheader>

                <v-list-item
                  v-for="(machine, i) in storeQueue.getQueue()"
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
                      <h1 class="text-base font-semibold">
                        {{ machine.name }}
                      </h1>
                      <p class="font-light text-sm">
                        <v-icon icon="mdi-alarm"> </v-icon>
                        {{ machine.timeLeft }} วินาที
                      </p>
                      <v-chip
                        v-if="machine.isBooked"
                        size="small"
                        color="primary"
                        class="font-light text-sm animate__animated animate__bounceIn"
                      >
                        <v-icon icon="mdi-bookmark-outline"> </v-icon>
                        ทำเครื่องหมายแจ้งเตือนไว้
                      </v-chip>
                    </div>
                  </template>
                </v-list-item>
              </v-list>
              <div v-if="storeQueue.getQueue().length < 1" class="text-sm text-slate-500 divider">
                ยังไม่มีคิวที่ดำเนินการอยู่ในขณะนี้
              </div>
            </v-window-item>
            <v-window-item value="myQueue">
              <v-list>
                <v-list-subheader>คิวเครื่องซักผ้าของคุณ</v-list-subheader>

                <v-list-item
                  v-for="userMachineQueue in userQueue"
                  :key="userMachineQueue.id"
                  :value="userMachineQueue"
                  color="primary"
                  rounded="shaped"
                >
                  <template v-slot:prepend>
                    <v-icon icon="mdi-washing-machine"></v-icon>
                  </template>

                  <template v-slot:subtitle>
                    <div class="flex flex-col gap-2">
                      <h1 class="text-base font-semibold">
                        {{ userMachineQueue.name }}
                      </h1>
                      <p class="font-light text-sm">
                        <v-icon icon="mdi-alarm"> </v-icon>
                        {{ userMachineQueue.timeLeft }} วินาที
                      </p>
                    </div>
                  </template>
                </v-list-item>

                <div v-if="userQueue.length < 1" class="text-sm text-slate-500 divider">
                  ยังไม่มีคิวที่ดำเนินการอยู่ในขณะนี้
                </div>
              </v-list>
            </v-window-item>
          </v-window>
        </v-list>
      </v-card>
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
