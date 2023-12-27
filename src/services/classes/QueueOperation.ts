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

  dequeue(machineToDequeued: WashingMachine, onDequeueUserQueueList?: { user: User }) {
    this.machinesOnQueue.splice(this.machinesOnQueue.indexOf(machineToDequeued), 1)
    if (onDequeueUserQueueList) {
      const { user } = onDequeueUserQueueList
      console.log('inside queue')
      const userQueue = user.queueList.find((queue) => queue.store.id === this.store.id)!
      if (userQueue.machinesOnQueue.length < 1) {
        console.log('remove queue')
        user.queueList.splice(user.queueList.indexOf(userQueue), 1)
      }
    }
  }

  getQueue(): WashingMachine[] {
    // Implement queue logic
    return this.machinesOnQueue
  }
}

export default QueueOperation
