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
  const offset = 0.01

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
    getLaundryStore: (state) => state.laundryStates,
    getLandryQueues: (state) => state.laundryStates.map((state) => state.queue) as QueueOperation[]
  },
  actions: {
    generateLaundryStore(
      userLocation: ICoordinates,
      amountOfStore = 10,
      amountOfMachine = 10
    ): Promise<LaundryState[]> {
      return new Promise((resolve) => {
        const stores: LaundryState[] = []
        for (let i = 0; i < amountOfStore; i++) {
          const sample = {
            id: `store-${i}`,
            name: `Store ${i}`,
            coordinate: generateCoordinateNearUserLocation(userLocation)
          }
          const { id, name, coordinate } = sample

          const laundryStore = new LaundryStore(id, name, coordinate)
          const washingMachines = generateWashingMachines(amountOfMachine, id)
          const queue = new QueueOperation(laundryStore, [])

          stores.push({
            laundryStore,
            washingMachines,
            queue
          })
        }

        this.$state.laundryStates = [...this.$state.laundryStates, ...stores]
        resolve(stores)
      })
    },

    randomizeToRunningMachines(amountOfMachine = 5) {
      console.log(this.$state.laundryStates[0].washingMachines.length)
      if (amountOfMachine < this.$state.laundryStates[0].washingMachines.length) {
        const stores = this.$state.laundryStates
        stores.forEach((store) => {
          const machines = [...store.washingMachines]

          for (let i = 0; i < amountOfMachine; i++) {
            const randomIndex = Math.floor(Math.random() * machines.length)
            const randomMachine = machines[randomIndex]
            machines.splice(randomIndex, 1)

            console.log(randomMachine)

            const randomTimeUnder180Sec = Math.floor(Math.random() * 180) + 1
            randomMachine.startWashing(
              randomTimeUnder180Sec,
              store.queue as QueueOperation,
              null,
              store.laundryStore
            )
          }
        })
      } else {
        throw new Error('Amount of machine is greater than the amount of machine in the store')
      }
    }
  }
})
