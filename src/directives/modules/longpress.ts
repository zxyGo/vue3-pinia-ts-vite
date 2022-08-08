/**
 * 长按指令，v-longpress
 */
import type { Directive, DirectiveBinding } from "vue"

const directive: Directive = {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		if (typeof binding.value !== "function") {
			throw new Error("callback must be a function")
		}

		let pressTimer: any = null
		const handler = (e: MouseEvent | TouchEvent) => {
			binding.value(e)
		}

		// 创建计时器（2秒后执行函数）
		const start = (e: any) => {
			if (!(e.button && e.type === "click" && e.button !== 0)) {
				if (pressTimer === null) {
					pressTimer = setTimeout(() => {
						handler(e)
					})
				}
			}
		}
		// 取消计时器
		const cancel = () => {
			if (pressTimer !== null) {
				clearTimeout(pressTimer)
				pressTimer = null
			}
		}
		// 添加事件监听
		el.addEventListener("mousedown", start)
		el.addEventListener("touchstart", start)
		// 取消计时器
		el.addEventListener("click", cancel)
		el.addEventListener("mouseout", cancel)
		el.addEventListener("touchend", cancel)
		el.addEventListener("touchcancel", cancel)
	}
}

export default directive
