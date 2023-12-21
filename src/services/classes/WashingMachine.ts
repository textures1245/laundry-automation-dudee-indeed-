import type { IWashingMachine } from '../type'
import type { User } from './User'

export class WashingMachine implements IWashingMachine {
  id: string
  storeId: string
  name: string

  constructor(id: string, storeId: string, name: string) {
    this.id = id
    this.storeId = storeId
    this.name = name
  }

  startWashing(user: User): void {
    throw new Error('Method not implemented.')
  }
  getCost(): number {
    throw new Error('Method not implemented.')
  }
}
