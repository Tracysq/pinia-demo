import {defineStore} from 'pinia'

export const useMeStore = defineStore('me', {
  state: () => ({
    name: 'qdd'
  }),
  actions: {
    printName () {
      console.log(this.name)
    }
  }
})