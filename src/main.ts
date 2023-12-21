//- assets
import './style.postcss'
import 'iconify-icon'
import 'animate.css'

import App from '@/App.vue'
import router from './router'

//- config
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

createApp(App).use(vuetify).mount('#app')
