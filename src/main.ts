import { createApp } from "vue"

// reset style sheet
import "@/styles/reset.scss"
// common style sheet
import "@/styles/common.scss"
// element-plus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

import App from "./App.vue"

const app = createApp(App)

app.use(ElementPlus).mount("#app")
