<script lang="ts">
import LandryStoreDrawer from '@/components/LaundryStoreDrawer.vue'
import { useUserStore } from '../../services/store/userStore'
import { useLaundryStore } from '@/services/store'
import { LaundryStore } from '../../services/classes/LaundryStore'
import { WashingMachine } from '../../services/classes/WashingMachine'
import WashingMachineCard from '@/components/WashineMachineCard.vue'

export default {
  components: { LandryStoreDrawer, WashingMachineCard },
  data() {
    return {
      user: useUserStore().getUser,
      store: {} as LaundryStore,
      machines: [] as WashingMachine[]
    }
  },
  mounted() {
    const storeId = this.$route.params.storeId as string
    const store = useLaundryStore().getLaundryStoreById(storeId)
    if (store) {
      this.store = store.laundryStore
      this.machines = store.washingMachines
    }
  }
}
</script>

<template>
  <div>
    <v-app>
      <v-layout>
        <LandryStoreDrawer :laundry-store="store" :user="user" :machines="machines" />
        <v-main class="h-full w-full">
          <div class="container space-y-8 mx-auto">
            <div class="divider text-3xl mt-8">
              <div class="badge badge-primary badge-lg text-xl p-4 ">เครื่องซักผ้าร้าน {{ store.name }}</div>
            </div>
            <div class="flex justify-center items-center flex-wrap gap-10">
              <WashingMachineCard
                v-for="machine of machines"
                :key="machine.id"
                :machine="machine"
              />
            </div>
          </div>
        </v-main>
      </v-layout>
    </v-app>
  </div>
</template>
