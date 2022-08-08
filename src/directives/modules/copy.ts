/**
 * 复制到剪切板，v-copy
 */
import type { Directive, DirectiveBinding } from "vue"
import { ElMessage } from "element-plus"

interface ElType extends HTMLElement {
	copyData: string | number
	__handleClick__: any
}

function handleClick(that: any) {
	const input = document.createElement("input")
	input.value = that.copyData.toLocaleString()
	document.body.append(input)
	input.select()
	document.execCommand("Copy")
	document.body.removeChild(input)
	ElMessage({
		type: "success",
		message: "复制成功"
	})
}

const copy: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		el.copyData = binding.value
		el.addEventListener("click", handleClick)
	},
	updated(el: ElType, binding: DirectiveBinding) {
		el.copyData = binding.value
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener("click", el.__handleClick__)
	}
}

export default copy
