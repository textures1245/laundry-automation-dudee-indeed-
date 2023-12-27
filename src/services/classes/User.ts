import type { ICoordinates, IQueue, IUser } from '../type'
import type { LaundryStore } from './LaundryStore'
import QueueOperation from './QueueOperation'
import VirtualCoins from './VirtualCoins'
import { WashingMachine } from './WashingMachine'

export class User implements IUser {
  uId: string
  username: string
  balance: VirtualCoins
  currentLocation: ICoordinates // Assuming you have a balance class
  queueList: QueueOperation[]

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

  addQueue(store: LaundryStore, machine: WashingMachine) {
    const laundryStore = this.queueList.find((s) => s.store.id === store.id)
    console.log(laundryStore)
    if (laundryStore) {
      laundryStore.enqueue(machine)
      return laundryStore
    } else {
      const newQueue = new QueueOperation(store, [machine])
      this.queueList.push(newQueue)
      return newQueue
    }
  }

  getAllReserveQueue(allQueue: QueueOperation[]): IQueue[] {
    const reservedQueue = allQueue
      .filter((queue) => queue.machinesOnQueue.some((machine) => machine.isBooked))
      .map((queue) => ({
        store: queue.store,
        machinesOnQueue: queue.machinesOnQueue.filter((machine) => machine.isBooked)
      })) as QueueOperation[]
    console.log(reservedQueue)
    return reservedQueue
  }

  useWashingMachine(
    machine: WashingMachine,
    cost: number,
    mins: number,
    storeQueue: QueueOperation,
    store: LaundryStore
  ): boolean {
    if (this.balance.getBalance() >= cost) {
      this.balance.addCoins(-cost)
      machine.startWashing(mins, storeQueue, this, store)
      return true
    } else {
      return false
    }
  }
}
