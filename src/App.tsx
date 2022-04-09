import React from 'react'
import './styles/App.less'
import Providers from './providers/Providers'
import { BrowserRouter } from 'react-router-dom'
import DefaultLayout from '@layouts/DefaultLayout'
import AppRoutes from '@root/src/router/Router'
const App: React.FC = () => {
  return (
    <Providers>
      <BrowserRouter>
        <DefaultLayout>
          <AppRoutes />
        </DefaultLayout>
      </BrowserRouter>
    </Providers>
  )
}

export default App
