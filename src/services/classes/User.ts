import type { ICoordinates, IUser } from '../type'
import VirtualCoins from './VirtualCoins'
import type { WashingMachine } from './WashingMachine'

export class User implements IUser {
  uId: string
  username: string
  balance: VirtualCoins
  currentLocation: ICoordinates // Assuming you have a balance class

  constructor(username: string, initialCoins: number, location: ICoordinates) {
    this.uId = Math.random().toString(36).substr(2, 9)
    this.username = username
    this.balance = new VirtualCoins(initialCoins)
    this.currentLocation = location
  }

  getVirtualCoins(): number {
    return this.balance.getBalance()
  }

  addVirtualCoins(amount: number) {
    this.balance.addCoins(amount)
  }

  useWashingMachine(machine: WashingMachine) {
    // Implement logic to check if the user has enough coins
    if (this.balance.getBalance() >= machine.getCost()) {
      // Deduct coins and allow the user to use the machine
      this.balance.addCoins(-machine.getCost())
      // Implement further logic for using the washing machine
      machine.startWashing(this)
    } else {
      // Notify the user that they don't have enough coins
      console.log(`${this.username}, you don't have enough coins to use this machine.`)
    }
  }

  // You can add more methods as needed
}
