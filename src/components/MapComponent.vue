<script lang="ts">
// @ts-nocheck
import type { ICoordinates } from '@/services/type'
import { type PropType } from 'vue'

export default {
  setup() {
    var map = new longdo.Map({
      placeholder: document.getElementById('map')
    })
    function init(zoomNum: number, geo: { lat: number; lng: number } | null) {
      map = new longdo.Map({
        placeholder: document.getElementById('map')
      })
      map.zoom(zoomNum, true)
      var TagPanel2 = new longdo.TagPanel({ tag: ['mountain'] })
      map.Ui.add(TagPanel2)

      if (geo !== null) {
        map.Overlays.add(new longdo.Marker({ lon: geo.lng, lat: geo.lat }))
        map.location({ lon: geo.lng, lat: geo.lat }, true)
      } else {
        map.location(longdo.LocationMode.Geolocation)
      }
    }

    return { map, init }
  },
  props: {
    zoomNum: {
      type: Number,
      default: 5
    },
    geoLocation: {
      type: Object as PropType<ICoordinates | null>,
      required: true
    }
  },
  mounted() {

    if (this.geoLocation !== null) {
      this.init(this.zoomNum, { lat: this.geoLocation.latitude, lng: this.geoLocation.longitude })
    } else {
      this.init(this.zoomNum, null)
    }
  }
}
</script>

<template>
  <div class="h-screen" id="map"></div>
</template>

<style scoped></style>
