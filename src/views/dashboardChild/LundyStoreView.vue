<script lang="ts">
import LandryStoreDrawer from '@/components/LaundryStoreDrawer.vue'
import { useUserStore } from '../../services/store/userStore'
import { useLaundryStore } from '@/services/store'
import WashingMachineCard from '@/components/WashingMachineCard.vue'
import { storeToRefs } from 'pinia'
import NotificationDrawer from '@/components/NotificationDrawer.vue'
import QueueOperation from '@/services/classes/QueueOperation'
import type { User } from '@/services/classes/User'
import type { WashingMachine } from '@/services/classes/WashingMachine'

export default {
  components: { LandryStoreDrawer, WashingMachineCard, NotificationDrawer },
  data() {
    return {
      userRef: storeToRefs(useUserStore()).getUser,
      laundryState: useLaundryStore().getLaundryStoreById(this.$route.params.storeId as string)!
    }
  },
  created() {
    if (!this.laundryState) {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<template>
  <div>
    <v-layout>
      <LandryStoreDrawer
        :storeQueue="laundryState.queue as QueueOperation"
        :laundry-store="laundryState.laundryStore"
        :user="userRef as User"
        :machines="laundryState.washingMachines as WashingMachine[]"
      />
      <v-main class="h-full w-full">
        <div class="container space-y-8 mx-auto">
          <div class="divider text-3xl mt-8">
            <div class="badge badge-primary badge-lg text-xl p-4">
              เครื่องซักผ้าร้าน {{ laundryState.laundryStore.name ?? 'none' }}
            </div>
          </div>
          <div class="flex justify-center items-center flex-wrap gap-10">
            <WashingMachineCard
              :storeQueue="laundryState.queue as QueueOperation"
              :laundry-store="laundryState.laundryStore"
              v-for="machine of laundryState.washingMachines"
              :key="machine.id"
              :machine="machine as WashingMachine"
              :user="userRef as User"
            />
          </div>
        </div>
      </v-main>
      <NotificationDrawer :user="userRef as User" />
    </v-layout>
  </div>
</template>
