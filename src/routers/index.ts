import { AxiosCanceler } from "@/api/helper/axiosCancel.ts"
import { GlobalStore } from "@/store/index.ts"
import { AuthStore } from "@/store/modules/auth.ts"
import { HOME_URL } from "@/config/config.ts"
import router from "@/routers/router.ts"
import NProgress from "@/config/nprogress.ts"

const axiosCanceler = new AxiosCanceler()

/**
 * 路由拦截
 */
router.beforeEach((to, form, next) => {
	NProgress.start()

	// 在路由跳转之前，清除所有请求
	axiosCanceler.removeAllPending()

	// 判断当前路由是否需要访问权限
	if (!to.matched.some(record => record.meta.requiresAuth)) return next()

	// 判断是否有token
	const globalStore = GlobalStore()
	if (!globalStore.token) {
		next({
			path: "/login"
		})
		return NProgress.done()
	}

	const authStore = AuthStore()

	// * Dynamic Router(动态路由，根据后端返回的菜单数据生成的一维数组)
	const { dynamicRouter } = authStore
	// * Static Router(静态路由，必须配置首页地址，否则不能进首页获取菜单、按钮权限等数据)，获取数据的时候会loading，所有配置首页地址也没问题
	const staticRouter = [HOME_URL, "/403"]
	const routerList = dynamicRouter.concat(staticRouter)

	// * 如果访问的地址没有在路由表中重定向到403页面
	if (routerList.indexOf(to.path) !== -1) return next()
	return next({
		path: "/403"
	})
})

router.afterEach(() => {
	NProgress.done()
})

export default router
