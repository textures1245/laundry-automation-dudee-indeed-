import type { IQueueOperations } from '../type'
import type { LaundryStore } from './LaundryStore'
import type { User } from './User'
import type { WashingMachine } from './WashingMachine'

class QueueOperation implements IQueueOperations {
  store: LaundryStore
  machinesOnQueue: WashingMachine[] = []

  constructor(storeId: LaundryStore, machinesOnQueue: WashingMachine[]) {
    this.store = storeId
    this.machinesOnQueue = machinesOnQueue
  }

  enqueue(machine: WashingMachine) {
    this.machinesOnQueue.push(machine)
    // Implement queue logic
  }

  dequeue(onDequeueUserQueueList?: { user: User; onDequeueQueueList: QueueOperation }) {
    this.machinesOnQueue.shift()
    if (onDequeueUserQueueList) {
      const { user, onDequeueQueueList } = onDequeueUserQueueList
      if (onDequeueQueueList.machinesOnQueue.length < 1) {
        user.queueList.splice(user.queueList.indexOf(onDequeueQueueList), 1)
      }
    }
  }

  getQueue(): WashingMachine[] {
    // Implement queue logic
    return this.machinesOnQueue
  }
}

export default QueueOperation
