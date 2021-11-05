import { ComponentType, FC } from 'react'
import { Outlet } from 'react-router-dom'

import { RouteConfig } from '@/router/config'

import Redirect from '../redirect'
import { WebSiteTitle } from '../web-site-title'

export type RouterViewProps = {
  /**
   * 自定义渲染网页标题
   */
  websiteTitle?: (title?: string) => string
}

export interface RouteElementProps
  extends Pick<RouteConfig, 'redirectTo' | 'redirectWithState'> {
  /**
   * 网页标题
   */
  title: string
  /**
   * 路由组件
   */
  component?: ComponentType
  /**
   * 重定向来源
   */
  redirestFrom?: string
}

/**
 * Route 组件 element 渲染内容
 */
const RouteElement: FC<RouteElementProps> = (props) => {
  const {
    title,
    component: Component,
    redirestFrom,
    redirectTo,
    redirectWithState,
  } = props

  return (
    <WebSiteTitle title={title}>
      {Component && (
        <Component>
          <Outlet />
        </Component>
      )}
      {redirectTo && (
        <Redirect
          from={redirestFrom}
          to={redirectTo}
          withState={redirectWithState}
        />
      )}
    </WebSiteTitle>
  )
}

export default RouteElement
