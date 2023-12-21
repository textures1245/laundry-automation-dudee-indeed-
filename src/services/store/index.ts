import { defineStore } from 'pinia'
import { LaundryStore } from '../classes/LaundryStore'
import type { ICoordinates } from '../type'
import QueueOperation from '../classes/QueueOperation'
import { WashingMachine } from '../classes/WashingMachine'

export type LaundryState = {
  laundryStore: LaundryStore
  washingMachines: WashingMachine[]
  queue: QueueOperation
}

function generateCoordinateNearUserLocation(userLocation: ICoordinates): ICoordinates {
  // Define the range of the offset (in degrees)
  const offset = 0.03

  // Generate random offsets for latitude and longitude
  const latOffset = (Math.random() - 0.5) * 2 * offset
  const lonOffset = (Math.random() - 0.5) * 2 * offset

  // Add the offsets to the user's location to get the laundry store location
  const storeLocation: ICoordinates = {
    latitude: userLocation.latitude + latOffset,
    longitude: userLocation.longitude + lonOffset
  }

  return storeLocation
}

function generateWashingMachines(amount: number, storeId: string): WashingMachine[] {
  const washingMachines = []

  for (let i = 0; i < amount; i++) {
    const sample: { id: string; name: string } = {
      id: `washingMachine-${i}`,
      name: `Washing Machine ${i}`
    }
    const { id, name } = sample
    washingMachines.push(new WashingMachine(id, storeId, name))
  }
  return washingMachines
}

export const useLaundryStore = defineStore('useLaundryStore', {
  state: () => ({
    laundryStates: <LaundryState[]>[]
  }),
  getters: {
    getLaundryStoreById: (state) => {
      return (storeId: string) =>
        state.laundryStates.find((store) => store.laundryStore.id === storeId)
    },
    getLaundryStore: (state) => state.laundryStates
  },
  actions: {
    generateLaundryStore(
      userLocation: ICoordinates,
      amountOfStore = 10,
      amountOfMachine = 10
    ): LaundryState[] {
      const stores: LaundryState[] = []
      for (let i = 0; i < amountOfStore; i++) {
        const sample = {
          id: `store-${i}`,
          name: `Store ${i}`,
          coordinate: generateCoordinateNearUserLocation(userLocation)
        }
        const { id, name, coordinate } = sample

        const washingMachines = generateWashingMachines(amountOfMachine, id)
        const queue = new QueueOperation(id)

        stores.push({
          laundryStore: new LaundryStore(id, name, coordinate),
          washingMachines,
          queue
        })
      }

      this.$state.laundryStates = [...this.$state.laundryStates, ...stores]
      return stores
    }
  }
})
