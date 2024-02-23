
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import UiComponents from './Ui-components'
import store from './store'
const app = createApp(App)
UiComponents.map(component => app.component(component.name, component))
app.use(router)
app.use(store)

app.mount('#app')
