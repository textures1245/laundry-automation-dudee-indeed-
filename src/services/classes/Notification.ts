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
    this.machine = machine
    this.date = new Date()
  }

  getNotificationAsMessage() {
    return {
      message: this.message,
      date: this.date
    }
  }
}
