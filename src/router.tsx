import { lazy } from 'react'
import * as React from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('./pages/home/index'))

export const router = () =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useRoutes([
    { path: 'home', element: <Home /> },
    { path: '*', element: <Home /> },
  ])

export default router
