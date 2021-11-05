import loadable, { DefaultComponent } from '@loadable/component'
import React from 'react'

const feedback = {
  fallback: React.createElement('div', null, 'loading...'),
}

const lazy = (load: () => Promise<DefaultComponent<unknown>>) =>
  loadable(load, feedback)
export default lazy
