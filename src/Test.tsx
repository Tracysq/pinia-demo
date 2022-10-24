import { defineStore } from "pinia"
import { defineComponent } from "vue"

const useStore = defineStore('store', {
    state() {
        return {
            me: {
                name: 'qdd'
            }
        }
    },
    actions: {
        fetchMe() {
            this.me.name = 'xxx'
        }
    }
})