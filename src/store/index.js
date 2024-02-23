import auth from '@/modules/auth'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {auth}
})

export default store