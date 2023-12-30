import type { User } from './classes/User'
import type { WashingMachine } from './classes/WashingMachine'
import { Notification } from './classes/Notification'
import type { LaundryStore } from './classes/LaundryStore'
import type VirtualCoins from './classes/VirtualCoins'
import type QueueOperation from './classes/QueueOperation'

interface ICoordinates {
  latitude: number
  longitude: number
}

interface IMachineNotification {
  notifyMachineReady(machine: WashingMachine, time: Date): void
  scheduleMachineNotification(machine: WashingMachine, time: Date): void
}

interface IStoreNotification {
  notifyUser(): void
}

interface IFormValidation {
  validateCoins(coins: number): boolean
}

interface IUserOperations {
  getVirtualCoins(): number
  addVirtualCoins(amount: number): void
  useWashingMachine(
    machine: WashingMachine,
    cost: number,
    mins: number,
    storeQueue: QueueOperation,
    store: LaundryStore
  ): boolean
  addQueue(store: LaundryStore, machine: WashingMachine): QueueOperation
}

interface IWashingMachineOperations extends IGetTimeLeftInterval {
  startWashing(mins: number, storeQueue: QueueOperation, user: User, store: LaundryStore): void
}

interface IQueueOperations {
  enqueue(machine: WashingMachine): void
  dequeue(machineToDequeued: WashingMachine, onDequeueUserQueueList?: { user: User }): void
  getQueue(): WashingMachine[]
}

interface IMapOperations {
  addStore(store: LaundryStore): void
  showMap(): void
}

interface ILaundryStoreOperations {
  getStore(): {
    id: string
    name: string
    location: ICoordinates
  }

  notifyUser(): void
}

interface IWashingMachine extends IWashingMachineOperations {
  // You can extend this interface with additional properties/methods as needed
  id: string
  storeId: string
  name: string
  isAvailable: boolean
}

// classes interface
interface IUser extends IUserOperations {
  // You can extend this interface with additional properties/methods as needed
  uId: string
  username: string
  balance: VirtualCoins
  currentLocation: ICoordinates
}

interface ILaundryStore extends ILaundryStoreOperations {
  // You can extend this interface with additional properties/methods as needed
  id: string
  name: string
  location: ICoordinates
}

interface INotification {
  user: User
  machine?: WashingMachine
  message: string
  date: Date
}

interface IMap {
  stores: LaundryStore[]
  addStore(store: ILaundryStore): void
  showMap(): void
}

interface IVirtualCoins {
  addCoins(amount: number): void
  getBalance(): number
}

interface IGetTimeLeftInterval {
  setTimeLeftInterval(user: User, userQueue: QueueOperation): void
  getTimeLeftInterval(): number
}

interface IQueue {
  store: LaundryStore
  machinesOnQueue: WashingMachine[]
}

export type {
  ICoordinates,
  IMachineNotification,
  IStoreNotification,
  IFormValidation,
  IUserOperations,
  IWashingMachineOperations,
  IVirtualCoins,
  IQueueOperations,
  IMapOperations,
  ILaundryStoreOperations,
  IWashingMachine,
  IUser,
  INotification,
  ILaundryStore,
  IMap,
  IQueue,
  IGetTimeLeftInterval
}
