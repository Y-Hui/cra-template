import React from 'react'
import { Navigate } from 'react-router-dom'

import { HOME } from '@/router/name'

/**
 * 路由权限校验
 */
const Guard: React.FC = (props) => {
  const { children } = props

  const NOT_AUTHORITY = false

  // 没有访问权限的情况
  if (NOT_AUTHORITY) {
    // console.log('没有权限，重定向到首页')
    // 重定向到首页
    return <Navigate to={HOME} replace />
  }

  // 渲染 children 表示渲染路由，通过权限校验
  return <>{children}</>
}

export default Guard
