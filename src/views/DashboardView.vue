<script lang="ts">
import MapComponent from '@/components/MapComponent.vue'
import DashboardDrawer from '@/components/DashboardDrawer.vue'
import { getGeoRequest } from '../services/functions/geoLocation'
import { useUserStore } from '@/services/store/userStore'
import { useLaundryStore } from '../services/store/index'
import { useNotificationStore } from '../services/store/notificationStore'

export default {
  name: 'DashboardView',
  components: { MapComponent, DashboardDrawer },
  async setup() {
    const currentUserLocation = await getGeoRequest()

    const user = { username: 'Traiphakh Sittikaew', balance: 1000 }

    if (currentUserLocation) {
      useUserStore().setUser(user, currentUserLocation)
      useLaundryStore().generateLaundryStore(currentUserLocation, 5, 10)
      useNotificationStore().setNotification([])

      console.log(useLaundryStore().getLaundryStore)
    } else {
      console.error('Cannot get current location')
    }

    return {
      currentUserLocation,
      user: useUserStore().getUser
    }
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>

<template>
  <div>
    <v-app>
      <v-layout>
        <DashboardDrawer :user="user" />
        <v-main class="h-full w-full">
          <MapComponent :zoom-num="16" :geo-location="currentUserLocation" />
        </v-main>
      </v-layout>
    </v-app>
  </div>
</template>
