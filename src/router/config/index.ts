import { LoadableComponent } from '@loadable/component'
import React from 'react'

import lazy from '../lazy-load'

export interface RouteConfig {
  /**
   * 路由路径
   */
  path: string
  /**
   * 重定向至目标路由
   */
  redirectTo?: string
  /**
   * 重定向时是否携带 search
   */
  redirectWithState?: boolean
  /**
   * 需要渲染的组件
   */
  component?: LoadableComponent<unknown>
  /**
   * 子路由
   */
  routes?: RouteConfig[]
  /**
   * 标签页 title
   */
  title?: string
  /**
   * 路由外部包裹组件
   * 可用于实现路由鉴权。
   *
   * @note 注意：组件内部渲染 `children` 则显示路由
   */
  wrapper?: React.ComponentType
}

const routes: RouteConfig[] = [
  {
    path: '/',
    redirectTo: '/home',
  },
  {
    path: '/home',
    component: lazy(() => import('@/views/home')),
  },
  {
    path: '*',
    component: lazy(() => import('@/views/404')),
  },
]

export default routes
