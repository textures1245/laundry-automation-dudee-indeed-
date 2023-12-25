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

  public fromTime: number = 0
  public timeLeft: number = 0
  private timeInterval: NodeJS.Timeout = setInterval(() => {}, 0)

  constructor(id: string, storeId: string, name: string) {
    this.id = id
    this.storeId = storeId
    this.name = name
  }

  startWashing(second: number, storeQueue: QueueOperation, user: User, store: LaundryStore): void {
    this.isAvailable = false
    this.timeLeft = second
    this.fromTime = second
    storeQueue.enqueue(this)
    const userQueue = user.addQueue(store, this)

    this.setTimeLeftInterval(user)
    setTimeout(() => {
      this.isAvailable = true
      storeQueue.dequeue()
      const onDequeueUserQueueList = {
        user: user,
        onDequeueQueueList: storeQueue
      }
      userQueue.dequeue(onDequeueUserQueueList)

    
    }, second * 1000)
  }

  setTimeLeftInterval(user: User): void {
    this.timeInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--
        if (this.timeLeft === 60) {
          useNotificationStore().notifyMachineUnderMinute(user, this, 'info')
        }
      } else {
        useNotificationStore().notifyMachineSuccess(user, this, 'success')
        clearInterval(this.timeInterval)
        this.fromTime = 0
      }
    }, 1000)
  }

  getTimeLeftInterval(): number {
    return this.timeLeft
  }
  getCost(): number {
    throw new Error('Method not implemented.')
  }
}
