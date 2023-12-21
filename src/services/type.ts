import type { User } from './classes/User'
import type { WashingMachine } from './classes/WashingMachine'
import { Notification } from './classes/Notification'
import type { LaundryStore } from './classes/LaundryStore'
import type VirtualCoins from './classes/VirtualCoins'

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
  useWashingMachine(machine: WashingMachine): void
}

interface IWashingMachineOperations {
  startWashing(user: User): void
  getCost(): number
}

interface IQueueOperations {
  enqueue(machine: WashingMachine): void
  dequeue(): WashingMachine | undefined
  notifyUser(machine: WashingMachine): void
  getQueue(): WashingMachine[]
}

interface IMapOperations {
  addStore(store: LaundryStore): void
  showMap(): void
}

interface ILaundryStoreOperations {
  getQueue(): IQueueOperations
  notifyUser(): void
}

interface IWashingMachine extends IWashingMachineOperations {
  // You can extend this interface with additional properties/methods as needed
  id: string
  storeId: string
  name: string
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
  getNotifications(): Notification[]
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
  IMap
}
