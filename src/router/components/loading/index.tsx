import './nprogress.less'

import NProgress from 'nprogress'
import { FC, useEffect } from 'react'

const Loading: FC = () => {
  useEffect(() => {
    NProgress.start()

    return () => {
      NProgress.done()
    }
  }, [])

  return null
}

export default Loading
