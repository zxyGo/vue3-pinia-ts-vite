import { createApp } from "vue"
import ElementPlus from "element-plus"

import App from "./App.vue"
// reset style sheet
import "@/styles/reset.scss"

const app = createApp(App)

app.use(ElementPlus).mount("#app")
