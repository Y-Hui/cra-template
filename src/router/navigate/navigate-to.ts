import { createHashHistory } from 'history-with-query'

const history = createHashHistory()

export interface NavigateParams {
  /**
   * 重定向
   */
  redirect?: boolean
}

export interface NavigateToParams {
  /**
   * 路由地址
   */
  path: string
  /**
   * 重定向
   */
  redirect?: boolean
}

export default function navigateTo(params: NavigateToParams) {
  if (params.redirect) {
    history.replace(params.path)
    return
  }
  history.push(params.path)
}
