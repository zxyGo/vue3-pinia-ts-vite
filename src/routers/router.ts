/**
 * 路由模块集合
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

// 导入所有router
const moduleRouters = import.meta.globEager("./modules/*.ts")

export const routerArray: RouteRecordRaw[] = []
Object.keys(moduleRouters).forEach(item => {
	Object.keys(moduleRouters[item]).forEach(key => {
		routerArray.push(...moduleRouters[item][key])
	})
})

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		redirect: { name: "login" }
	},
	{
		path: "/login",
		name: "login",
		component: () => import("_v/login/index.vue"),
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	strict: false,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
