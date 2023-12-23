import type { ICoordinates, IUser } from '../type'
import type { LaundryStore } from './LaundryStore'
import VirtualCoins from './VirtualCoins'
import { WashingMachine } from './WashingMachine'

export class User implements IUser {
  uId: string
  username: string
  balance: VirtualCoins
  currentLocation: ICoordinates // Assuming you have a balance class
  queueList: {
    store: LaundryStore
    machine: WashingMachine[]
  }[]

  constructor(username: string, initialCoins: number, location: ICoordinates) {
    this.uId = Math.random().toString(36).substr(2, 9)
    this.username = username
    this.balance = new VirtualCoins(initialCoins)
    this.currentLocation = location
    this.queueList = []
  }

  getVirtualCoins(): number {
    return this.balance.getBalance()
  }

  addVirtualCoins(amount: number) {
    this.balance.addCoins(amount)
  }

  useWashingMachine(machine: WashingMachine) {
    if (this.balance.getBalance() >= machine.getCost()) {
      this.balance.addCoins(-machine.getCost())
      machine.startWashing(this)
    } else {
      console.log(`${this.username}, you don't have enough coins to use this machine.`)
    }
  }

  addQueue(store: LaundryStore, machine: WashingMachine) {
    const laundryStore = this.queueList.find((s) => s.store.id === store.id)
    if (laundryStore) {
      laundryStore.machine.push(machine)
    } else {
      this.queueList.push({
        store: store,
        machine: [machine]
      })
    }
  }
}

