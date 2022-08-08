const { toString } = Object.prototype

/**
 * 判断值是否为某个类型
 * @param val
 * @param type
 */
export function is(val: unknown, type: string) {
	return toString.call(val) === `[object ${type}]`
}

/**
 * 是否为函数
 */
export function isFunction<T = Function>(val: unknown): val is T {
	return is(val, "Function")
}

/**
 * 是否已定义
 * @param val
 */
export const isDef = <T = unknown>(val?: T): val is T => {
	return typeof val !== "undefined"
}

export const isUnDef = <T = unknown>(val?: T): val is T => {
	return !isDef(val)
}

/**
 * 是否为对象
 */
export function isObject(val: any): val is Record<any, any> {
	return val !== null && is(val, "Object")
}

/**
 * 是否为时间
 */
export function isDate(val: unknown): val is Date {
	return is(val, "Date")
}

/**
 * 是否为数值
 */
export function isNumber(val: unknown): val is number {
	return is(val, "Number")
}

/**
 * 是否为AsyncFunction
 */
export function isAsyncFunction<T = any>(val: unknown): val is Promise<T> {
	return is(val, "AsyncFunction")
}

/**
 * 是否为promise
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
	return is(val, "Promise") && isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

/**
 * 是否为字符串
 */
export function isString(val: unknown): val is string {
	return is(val, "String")
}

/**
 * 是否为boolean
 */
export function isBoolean(val: unknown): val is boolean {
	return is(val, "Boolean")
}

/**
 * 是否为数组
 */
export function isArray(val: any): val is Array<any> {
	return val && Array.isArray(val)
}

/**
 * 是否为null
 */
export function isNull(val: unknown): val is null {
	return val === null
}
