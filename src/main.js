import { createApp } from "vue";
import App from './App.vue';
import router from './router';
import Components from './components'
import UiComponents from './ui-components'

const app = createApp(App)
Components.map(component => app.component(component.name, component))
UiComponents.map(component => app.component(component.name, component))

app.use(router)
app.mount('#app')

