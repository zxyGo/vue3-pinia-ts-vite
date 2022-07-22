/**
 * 增加背景水印
 * 使用：设置水印文案，颜色，字体大小即可
 * <div v-waterMarker="{text:'版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
 */
import type { Directive, DirectiveBinding } from "vue"

const addWaterMarker: Directive = (str: string, parentNode: any, font: any, textColor: string) => {
	// 水印文字、父元素、字体、文字颜色
	const canvas: HTMLCanvasElement = document.createElement("canvas")
	parentNode.appendChild(canvas)
	canvas.width = 200
	canvas.height = 150
	canvas.style.display = "none"
	const draw = canvas.getContext("2d") as CanvasRenderingContext2D
	draw.rotate((-20 * Math.PI) / 180)
	draw.font = font || "16px Microsoft JhengHei"
	draw.fillStyle = textColor || "rgba(180, 180, 180, 0.3)"
	draw.textAlign = "left"
	// eslint-disable-next-line no-undef
	draw.textBaseline = "Middle" as CanvasTextBaseline
	draw.fillText(str, canvas.width / 10, canvas.height / 2)
	parentNode.style.backgroundImage = `url(${canvas.toDataURL("image/png")})`
}

const waterMarker = {
	mounted(el: DirectiveBinding, binding: DirectiveBinding) {
		addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
	}
}

export default waterMarker
