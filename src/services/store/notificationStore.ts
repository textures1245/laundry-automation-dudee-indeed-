import { defineStore } from 'pinia'
import { Notification } from '../classes/Notification'
import type { WashingMachine } from '../classes/WashingMachine'
import type { User } from '../classes/User'
import { Toast } from '@/components/Toast'
import type { SweetAlertIcon } from 'sweetalert2'

export const useNotificationStore = defineStore('useNotificationStore', {
  state: () => ({
    notification: <Notification[]>[]
  }),
  actions: {
    setNotification(notification: Notification[]) {
      this.notification = notification
    },

    notifyMachineReady(user: User, machine: WashingMachine, icon?: SweetAlertIcon) {
      const msg = new Notification(
        user,
        `เครื่องหมายเลย ${machine.name} ว่างพร้อมให้ใช้งานแล้ว, สามารถใช้ได้ตอนนี้เลย`,
        machine
      )
      this.$state.notification.push(msg)
    },

    // scheduleMachineNotification(user: User, machine: WashingMachine, time: Date) {

    // },

    sendNotification(user: User, message: string, icon?: SweetAlertIcon) {
      const msg = new Notification(user, message)
      Toast.fire({
        icon: icon ?? 'info',
        text: message,
        footer: `เมื่อ ${msg.date.toLocaleString()}`
      })

      this.$state.notification.push(msg)
    },

    alertUserOnMachineIssues(machine: WashingMachine, icon?: SweetAlertIcon) {
      // Implement alert logic for machine issues
    }
  }
})
