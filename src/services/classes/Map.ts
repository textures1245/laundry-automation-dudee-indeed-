import type { IMap } from '../type'
import type { LaundryStore } from './LaundryStore'

export class Map implements IMap {
  stores: LaundryStore[] = []

  addStore(store: LaundryStore | LaundryStore[]) {
    if (Array.isArray(store)) {
      this.stores = [...this.stores, ...store]
    } else {
      this.stores.push(store)
    }
  }

  showMap() {
    // Implement map rendering logic
  }
}
