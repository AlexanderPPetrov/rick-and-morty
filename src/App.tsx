import React from 'react'
import './styles/App.less'
import Providers from './providers/Providers'
import Home from '@pages/Home'
const App: React.FC = () => {
  return (
    <Providers>
      <Home />
    </Providers>
  )
}

export default App
