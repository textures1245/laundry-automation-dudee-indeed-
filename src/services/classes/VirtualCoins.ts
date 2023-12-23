import type { IVirtualCoins } from '../type'

export class VirtualCoins implements IVirtualCoins {
  balance: number = 0

  constructor(balance: number) {
    this.balance = balance
  }

  addCoins(amount: number) {
    this.balance += amount
  }

  getBalance(): number {
    return this.balance
  }
}

export default VirtualCoins
