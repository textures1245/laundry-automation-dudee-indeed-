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

  getters: {
    getUserNotification: (state) => {
      return (userId: string) =>
        state.notification.filter((notification) => notification.user.uId === userId)
    }
  },
  actions: {
    setNotification(notification: Notification[]) {
      this.notification = notification
    },

    notifyMachineSuccess(user: User, machine: WashingMachine, icon?: SweetAlertIcon) {
      const notification = new Notification(user, `ร้าน: ${machine.storeId} เครื่องปั่นหมายเลข ${machine.name} ทำงานเสร็จเรียบร้อบแล้ว`, machine)
      Toast.fire({
        icon: icon ?? 'info',
        title: `ข้อความจากร้าน ${machine.storeId}`,
        text: notification.message,
        footer: `เมื่อ ${notification.date.toLocaleString()}`
      })
      this.$state.notification.push(notification)
    },

    notifyMachineWhenReady(user: User, machine: WashingMachine, icon?: SweetAlertIcon) {
      const notification = new Notification(
        user,
        `จากร้าน: ${machine.storeId},เครื่องปั่นหมายเลข ${machine.name} พร้อมใช้งานแล้ว `,
        machine
      )
      Toast.fire({
        icon: icon ?? 'info',
        title: `ข้อความจากร้าน ${machine.storeId}`,
        text: notification.message,
        footer: `เมื่อ ${notification.date.toLocaleString()}`
      })
      this.$state.notification.push(notification)
    },

    notifyMachineUnderMinute(user: User, machine: WashingMachine, icon?: SweetAlertIcon) {
      const notification = new Notification(
        user,
        `เครื่องซักผ้า ${machine.name} จะว่างในอีก 1 นาที`,
        machine
      )
      Toast.fire({
        icon: icon ?? 'info',
        title: `ข้อความจากร้าน ${machine.storeId}`,
        text: `เครื่องซักผ้า ${machine.name} จะว่างในอีก 1 นาที`,
        footer: `เมื่อ ${notification.date.toLocaleString()}`
      })
      this.$state.notification.push(notification)
    },

    sendNotification(user: User, message: string, icon?: SweetAlertIcon) {
      const notification = new Notification(user, message)
      Toast.fire({
        icon: icon ?? 'info',
        text: message,
        footer: `เมื่อ ${notification.date.toLocaleString()}`
      })

      this.$state.notification.push(notification)
    },

    alertUserOnMachineIssues(user: User, machine: WashingMachine, icon?: SweetAlertIcon) {
      const notification = new Notification(user, 'เครื่องซักผ้ามีปัญหา', machine)
      Toast.fire({
        icon: icon ?? 'info',
        title: `ข้อความจากร้าน ${machine.storeId}`,
        text: notification.message,
        footer: `เมื่อ ${notification.date.toLocaleString()}`
      })

      this.$state.notification.push(notification)
    }
  }
})
