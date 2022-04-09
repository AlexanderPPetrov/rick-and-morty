import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Characters from '@pages/Characters'
import CharacterDetails from '@pages/CharacterDetails'
import Episodes from '@pages/Episodes'
import Locations from '@pages/Locations'

const routes = [
  {
    path: '/',
    page: <Characters />,
    exact: true,
  },
  {
    path: '/aaaa',
    page: <CharacterDetails />,
    exact: true,
  },
  {
    path: '/episodes',
    page: <Episodes />,
  },
  {
    path: 'locations',
    page: <Locations />,
  },
]

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.page} />
      ))}
    </Routes>
  )
}
export default AppRoutes
