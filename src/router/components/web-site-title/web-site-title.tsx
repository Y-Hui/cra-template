import React, { useEffect } from 'react'

export interface WebSiteTitleProps {
  /**
   * 网页标题
   */
  title?: string
}

const WebSiteTitle: React.FC<WebSiteTitleProps> = (props) => {
  const { title, children } = props

  useEffect(() => {
    if (typeof title === 'string' && title.trim().length > 0) {
      document.title = `${title}`
    }
  }, [title])

  return <>{children}</>
}

export default WebSiteTitle
