import type { IQueueOperations } from '../type'
import type { WashingMachine } from './WashingMachine'

class QueueOperation implements IQueueOperations {
  storeId: string
  machinesOnQueue: WashingMachine[] = []

  constructor(storeId: string) {
    this.storeId = storeId
  }

  enqueue(machine: WashingMachine) {
    this.machinesOnQueue.push(machine)
    // Implement queue logic
  }

  dequeue(): WashingMachine | undefined {
    return this.machinesOnQueue.shift()
  }

  notifyUser(machine: WashingMachine) {
    // Implement notification logic
  }

  getQueue(): WashingMachine[] {
    // Implement queue logic
    return this.machinesOnQueue
  }
}

export default QueueOperation
