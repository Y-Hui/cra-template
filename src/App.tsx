import React from 'react'

import { RouterView } from './router'

function createWebsiteTitle(title?: string) {
  const prefix = '网页标题'
  if (title) {
    return `${title} - ${prefix}`
  }
  return prefix
}

const App: React.FC = () => {
  return <RouterView websiteTitle={createWebsiteTitle} />
}

export default App
