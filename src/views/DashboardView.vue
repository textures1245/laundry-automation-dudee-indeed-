<script lang="ts">
import MapComponent from '@/components/MapComponent.vue'
import DashboardDrawer from '@/components/DashboardDrawer.vue'
import { getGeoRequest } from '../services/functions/geoLocation'
import { useUserStore } from '@/services/store/userStore'
import { useLaundryStore } from '../services/store/index'
import { useNotificationStore } from '../services/store/notificationStore'
import { storeToRefs } from 'pinia'
import type { User } from '@/services/classes/User'
import NotificationDrawer from '@/components/NotificationDrawer.vue'
import LoadingView from '@/views/assets/LoadingView.vue'
import Swal from 'sweetalert2'

export default {
  name: 'DashboardView',
  components: { MapComponent, DashboardDrawer, NotificationDrawer, LoadingView },
  async setup() {
    let currentUserLocation = await getGeoRequest()

    const user = { username: 'Traiphakh Sittikaew', balance: 1000 }
    const laundryState = useLaundryStore()

    if (currentUserLocation) {
      useUserStore().setUser(user, currentUserLocation)
      useNotificationStore().setNotification([])
      await laundryState.generateLaundryStore(currentUserLocation, 8, 10)
      laundryState.randomizeToRunningMachines(5)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'ไม่สามารถระบุตำแหน่งของคุณได้',
        text: 'เนื่องจากว่าแอปพลิแคชั่นจำเป็นต้องใช้งานร่วมกับ GPS ของอุปกรณ์ แต่เนื่องจากเราไม่สามารถระบุตำแหน่งของคุณได้ ด้วยสาเหตุบางอย่าง ดังนั้นเราจึงจำลองตำแหน่งของคุณให้เป็นตำแหน่งที่อยู่ในเชียงใหม่'
      })

      const randomLocation = {
        latitude: 18.7883,
        longitude: 98.9853
      }
      currentUserLocation = randomLocation
      useUserStore().setUser(user, currentUserLocation)
      useNotificationStore().setNotification([])
      await laundryState.generateLaundryStore(currentUserLocation, 8, 10)
      laundryState.randomizeToRunningMachines(5)
    }

    return {
      currentUserLocation,
      user: storeToRefs(useUserStore()).getUser
    }
  },
  data() {
    return {
      fakeLoader: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.fakeLoader = false
    }, 1500)
  }
}
</script>

<template>
  <div>
    <v-layout v-if="!fakeLoader">
      <DashboardDrawer :user="user as User" />
      <v-main class="h-full w-full">
        <MapComponent :zoom-num="16" :geo-location="currentUserLocation" />
      </v-main>
      <NotificationDrawer :user="user as User" />
    </v-layout>
    <LoadingView v-else />
  </div>
</template>
