import { App } from "vue"
import copy from "./modules/copy"
import debounce from "./modules/debounce"
import longpress from "./modules/longpress"
import throttle from "./modules/throttle"
import waterMarker from "./modules/waterMarker"

const directivesList: any = {
	copy,
	debounce,
	longpress,
	throttle,
	waterMarker
}

const directives = {
	install(app: App<Element>) {
		Object.keys(directivesList).forEach(key => {
			// 注册自定义指令
			app.directive(key, directivesList[key])
		})
	}
}

export default directives
