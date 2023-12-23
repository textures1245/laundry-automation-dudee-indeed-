<script lang="ts">
//@ts-nocheck
import type { ICoordinates } from '@/services/type'
import { type PropType } from 'vue'
import { useLaundryStore } from '../services/store/index'
import launddyIcon from '@/assets/laundry-shop.png'

export default {
  setup() {
    return {}
  },
  data: () => ({
    stores: useLaundryStore().getLaundryStore
  }),
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
    window.navigateToStore = this.navigateToStore
    var map = new longdo.Map({
      placeholder: document.getElementById('map')
    })

    if (this.geoLocation !== null) {
      this.init(
        this.zoomNum,
        { lat: this.geoLocation.latitude, lng: this.geoLocation.longitude },
        map
      )
      this.createStoreMarker(map)
    } else {
      this.init(this.zoomNum, null, map)
      this.createStoreMarker(map)
    }
  },
  beforeUnmount() {
    // Remove the navigateToStore function from the window object when the component is destroyed
    delete window.navigateToStore
  },
  methods: {
    navigateToStore(id) {
      this.$router.push(`/dashboard/${id}`)
    },
    createStoreMarker(map: typeof longdo) {
      this.stores.forEach((store) => {
        map.Overlays.add(
          new longdo.Marker(
            {
              lon: store.laundryStore.location.longitude,
              lat: store.laundryStore.location.latitude
            },
            {
              title: store.laundryStore.name,
              icon: {
                html: `<div class="avatar"><div class="w-9 rounded-full p-3 bg-primary/60"><img src="${launddyIcon}" /></div></div>`,
                offset: { x: 12, y: 45 }
              },
              popup: {
                html: `
                <div class="card w-32">
      <div class="alert flex flex-col alert-secondary">
        <div>จำนวนเครื่องซักผ้า: ${store.washingMachines.length}</div>
        <button class="btn btn-xs btn-info" onclick="navigateToStore('${store.laundryStore.id}')">
          เข้าสู้ร้าน
        </button>
      </div>
    </div>
  `,
                offset: { x: 12, y: 80 }
              },
              weight: longdo.OverlayWeight.Top
            }
          )
        )
      })
    },
    init(zoomNum: number, geo: { lat: number; lng: number } | null, map: typeof longdo) {
      map.zoom(zoomNum, true)
      // var TagPanel2 = new longdo.TagPanel({ tag: ['mountain'] })
      // map.Ui.add(TagPanel2)

      if (geo !== null) {
        map.Overlays.add(new longdo.Marker({ lon: geo.lng, lat: geo.lat }))
        map.location({ lon: geo.lng, lat: geo.lat }, true)
      } else {
        let defaultGeo = longdo.LocationMode.Geolocation
        map.location(defaultGeo)
      }
    }
  }
}
</script>

<template>
  <div class="h-screen" id="map"></div>
</template>

<style scoped></style>
