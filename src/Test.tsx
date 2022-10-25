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

export const ChildOne = defineComponent({
    setup: (props, context) => {
        const store = useStore()
        return () => <div><span>hi, </span>{store.me.name}</div>
    }
})

export const ChildTwo = defineComponent({
    setup: (props, context) => {
        const store = useStore()
        return () => <div>
            <input v-model={store.me.name} />
        </div>
    }
})

export const Test = defineComponent({
    setup: (props, context) => {
        return <div>
            <ChildOne />
            <ChildTwo />
        </div>
    }
})