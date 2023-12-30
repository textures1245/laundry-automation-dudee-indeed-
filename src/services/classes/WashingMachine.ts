import type { IWashingMachine } from '../type'
import type { LaundryStore } from './LaundryStore'
import type QueueOperation from './QueueOperation'
import type { User } from './User'
import { useNotificationStore } from '../store/notificationStore'

export class WashingMachine implements IWashingMachine {
  public id: string
  public storeId: string
  public name: string
  public isAvailable: boolean = true
  public isBooked: boolean = false

  public fromTime: number = 0
  public timeLeft: number = 0
  private timeInterval: NodeJS.Timeout = setInterval(() => {}, 0)

  constructor(id: string, storeId: string, name: string) {
    this.id = id
    this.storeId = storeId
    this.name = name
  }

  startWashing(
    second: number,
    storeQueue: QueueOperation,
    user: User | null,
    store: LaundryStore
  ): void {
    this.isAvailable = false
    this.timeLeft = second
    this.fromTime = second
    storeQueue.enqueue(this)
    let userQueue: QueueOperation | null = null
    if (user) {
      userQueue = user.addQueue(store, this)
      this.setTimeLeftInterval(user)
    } else {
      this.setTimeLeftInterval(null)
    }

    setTimeout(() => {
      this.isAvailable = true
      storeQueue.dequeue(this)
      if (userQueue && user) {
        const onDequeueUserQueueList = {
          user: user
        }
        userQueue.dequeue(this, onDequeueUserQueueList)
      }
    }, second * 1000)
  }

  onBooked(user: User) {
    this.isBooked = true
    let timeInterval: NodeJS.Timeout = setInterval(() => {}, 0)
    if (this.timeLeft > 0) {
      timeInterval = setInterval(() => {
        if (this.timeLeft > 0) {
          if (this.timeLeft === 60) {
            if (user) useNotificationStore().notifyMachineUnderMinute(user, this, 'info')
          }
        } else {
          this.isBooked = false
          clearInterval(timeInterval)
          if (user) useNotificationStore().notifyMachineWhenReady(user, this, 'success')
        }
      }, 1000)
    }
  }

  setTimeLeftInterval(user: User | null): void {
    this.timeInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--
        if (this.timeLeft === 60) {
          if (user) useNotificationStore().notifyMachineUnderMinute(user, this, 'info')
        }
      } else {
        if (user) useNotificationStore().notifyMachineSuccess(user, this, 'success')
        clearInterval(this.timeInterval)
        this.fromTime = 0
      }
    }, 1000)
  }

  getTimeLeftInterval(): number {
    return this.timeLeft
  }
}
