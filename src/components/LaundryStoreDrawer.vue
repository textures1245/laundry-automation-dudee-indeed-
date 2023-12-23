<script lang="ts">
import CoinSettingDialog from './CoinSettingDialog.vue'
import type { User } from '@/services/classes/User'
import type { PropType } from 'vue'
import { useNotificationStore } from '@/services/store/notificationStore'
import type { LaundryStore } from '@/services/classes/LaundryStore'
import { WashingMachine } from '../services/classes/WashingMachine'

export default {
  name: 'LandryStoreDrawer',
  components: { CoinSettingDialog },
  mounted() {
    return {}
  },
  data() {
    return {
      drawer: true,
      rail: false,
      panel: [0, 1],
      tab: null,

      tabOptions: [
        { value: 'allQueue', text: 'คิวทั้งหมด' },
        { value: 'myQueue', text: 'คิวของฉัน' }
      ]
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
    machines: {
      type: Array as PropType<WashingMachine[]>,
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
  <v-navigation-drawer
    width="300"
    :class="!rail ? 'p-3' : 'p-0'"
    location="left"
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <div class="space-y-3">
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        :title="user.username"
        nav
      >
        <template v-slot:append>
          <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
        </template>
      </v-list-item>

      <div v-if="!rail" class="flex items-center justify-between">
        <p class="text-subtitle-2">
          <v-icon icon="mdi-bitcoin"></v-icon>

          คงเหลือ: {{ user.balance.getBalance() }}
        </p>
        <CoinSettingDialog />
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
            <v-list>
              <v-list-subheader>คิวเครื่องซักผ้าของคุณ</v-list-subheader>

              <v-list-item
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
                    v-for="(machine, i) in queue.machine"
                    :key="i"
                    :value="machine"
                    color="primary"
                    rounded="shaped"
                  >
                    <template v-slot:prepend>
                      <v-icon :icon="'mdi-store'"></v-icon>
                    </template>

                    <v-list-item-title :v-text="machine.name"></v-list-item-title>
                  </v-list-item>
                </v-list>

                <v-list-item-title :v-text="queue.store.name"></v-list-item-title>
              </v-list-item>

              <div v-if="user.queueList.length < 1" class="text-sm text-slate-500 divider">
                ยังไม่มีคิวที่ดำเนินการอยู่ในขณะนี้
              </div>
            </v-list>
          </v-window>
        </v-list>
      </v-card>
    </div>
  </v-navigation-drawer>
</template>
