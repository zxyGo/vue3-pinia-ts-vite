/**
 * 功能：防止按钮在短时间内被多次点击
 * <button v-throttle="debounceClick">节流提交</button>
 */
import type { Directive, DirectiveBinding } from "vue"

interface ElType extends HTMLElement {
	__handleClick__: () => any
	disabled: boolean
}

const throttle: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		if (typeof binding.value !== "function") {
			throw new Error("callback must be a function")
		}
		let timer: ReturnType<typeof setTimeout> | null = null
		el.__handleClick__ = function () {
			if (timer) {
				clearTimeout(timer)
			}
			if (!el.disabled) {
				el.disabled = true
				binding.value()
				timer = setTimeout(() => {
					el.disabled = false
				}, 1000)
			}
		}
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener("click", el.__handleClick__)
	}
}

export default throttle
