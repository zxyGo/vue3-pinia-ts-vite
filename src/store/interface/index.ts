/**
 * 全局的状态
 */
export interface GlobalState {
	token: string
}

/**
 * 按钮权限状态
 */
export interface AuthState {
	authButtons: {
		[propName: string]: any
	}
	authRouter: string[]
}

/**
 * 菜单权限状态
 */
// export interface MenuState {
// 	isCollapse: boolean
// 	menuList: Menu.MenuOptions[]
// }
