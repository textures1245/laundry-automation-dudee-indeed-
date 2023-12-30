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
import { Toast } from '@/components/Toast'
import LoadingView from '@/views/assets/LoadingView.vue'

export default {
  name: 'DashboardView',
  components: { MapComponent, DashboardDrawer, NotificationDrawer, LoadingView },
  async setup() {
    const currentUserLocation = await getGeoRequest()

    const user = { username: 'Traiphakh Sittikaew', balance: 1000 }
    const laundryState = useLaundryStore()

    if (currentUserLocation) {
      useUserStore().setUser(user, currentUserLocation)
      useNotificationStore().setNotification([])
      await laundryState.generateLaundryStore(currentUserLocation, 5, 10)
      laundryState.randomizeToRunningMachines(3)
    } else {
      Toast.fire({
        icon: 'error',
        title:
          'เนื่องจากแอปพลิเคชันจำเป็นต้องเข้าถึงตำแหน่งปัจจุบันของคุณ เพื่อทำงานให้ได้เต็มประสิทธิภาพกรุณาเปิดใช้งานตำแหน่งปัจจุบันของคุณ'
      })
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
