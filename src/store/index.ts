import { createPinia, defineStore } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import piniaPersistConfig from "@/config/piniaPersist.ts"
import { GlobalState } from "@/store/interface/index.ts"

export const GlobalStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: "GlobalState",
	state: (): GlobalState => ({
		token: ""
	}),
	getters: {},
	actions: {
		setToken(token: string) {
			this.token = token
		}
	},
	persist: piniaPersistConfig("GlobalState")
})

// piniaPersist(持久化)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
