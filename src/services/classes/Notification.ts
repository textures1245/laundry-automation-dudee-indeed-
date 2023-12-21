import type { INotification } from '../type'
import type { User } from './User'
import type { WashingMachine } from './WashingMachine'

export class Notification implements INotification {
  public user: User // Assuming you have a User class
  public message: string
  public date: Date
  public machine?: WashingMachine

  constructor(user: User, message: string, machine?: WashingMachine) {
    this.user = user
    this.message = message
    this.date = new Date()
    this.machine = machine
  }

  getNotifications(): Notification[] {
    throw new Error('Method not implemented.')
  }
}

export function notifyMachineReady(machine: WashingMachine, time: Date) {
  // Implement notification logic for machine availability
}

export function scheduleMachineNotification(machine: WashingMachine, time: Date) {
  // Implement scheduling logic
}

export function sendNotification(message: string) {
  // Implement notification sending logic
}

export function alertUserOnMachineIssues(machine: WashingMachine) {
  // Implement alert logic for machine issues
}
