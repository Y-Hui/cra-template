import lazy from '../lazy-load'
import defineRoutes from '../utils/define-routes'

const routes = defineRoutes([
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
])

export default routes
