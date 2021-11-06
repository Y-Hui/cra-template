import loadable, { DefaultComponent } from '@loadable/component'
import React from 'react'

import { Loading } from '../components'

const feedback = {
  fallback: React.createElement(Loading),
}

const lazy = (load: () => Promise<DefaultComponent<unknown>>) =>
  loadable(load, feedback)
export default lazy
