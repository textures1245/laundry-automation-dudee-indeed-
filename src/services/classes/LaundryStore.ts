import type { ICoordinates, ILaundryStore, IQueueOperations } from '../type'

export class LaundryStore implements ILaundryStore {
  id: string
  name: string
  location: ICoordinates

  constructor(id: string, name: string, location: ICoordinates) {
    this.id = id
    this.name = name
    this.location = location
  }

  getQueue(): IQueueOperations {
    throw new Error('Method not implemented.')
  }
  notifyUser(): void {
    throw new Error('Method not implemented.')
  }
}
