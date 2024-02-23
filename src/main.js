
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import UiComponents from './Ui-components'
const app = createApp(App)
UiComponents.map(component => app.component(component.name, component))
app.use(router)

app.mount('#app')
