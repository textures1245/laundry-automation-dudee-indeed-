import type { ICoordinates, ILaundryStore } from '../type'

export class LaundryStore implements ILaundryStore {
  id: string
  name: string
  location: ICoordinates

  constructor(id: string, name: string, location: ICoordinates) {
    this.id = id
    this.name = name
    this.location = location
  }

  getStore() {
    return {
      id: this.id,
      name: this.name,
      location: this.location
    }
  }
}
