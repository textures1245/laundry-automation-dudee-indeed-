import { defineStore } from 'pinia'
import type { ICoordinates } from '../type'
import { User } from '../classes/User'

export const useUserStore = defineStore('useUserStore', {
  state: () => ({
    user: <User>{}
  }),
  getters: {
    getUser: (state) => state.user
  },
  actions: {
    setUser(user: { username: string; balance: number }, geo: ICoordinates) {
      this.user = new User(user.username, user.balance, geo)
    }
  }
})
