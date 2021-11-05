import { useTitle } from 'ahooks'
import React from 'react'

export interface WebSiteTitleProps {
  /**
   * 网页标题
   */
  title?: string
}

const WebSiteTitle: React.FC<WebSiteTitleProps> = (props) => {
  const { title, children } = props

  useTitle(`${title}`)

  return <>{children}</>
}

export default WebSiteTitle
