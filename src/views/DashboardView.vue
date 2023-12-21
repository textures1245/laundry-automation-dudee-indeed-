<script lang="ts">
import MapComponent from '@/components/MapComponent.vue'
import DashboardDrawer from '@/components/DashboardDrawer.vue'
import { getGeoRequest } from '../services/functions/geoLocation'

export default {
  components: { MapComponent, DashboardDrawer },
  async setup() {
    const currentUserLocation = await getGeoRequest()
    console.log(currentUserLocation)
    return {
      currentUserLocation
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
        <DashboardDrawer />
        <v-main class="h-full w-full">
          <MapComponent :zoom-num="17" :geo-location="currentUserLocation" />
        </v-main>
      </v-layout>
    </v-app>
  </div>
</template>
