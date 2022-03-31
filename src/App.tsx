import React from 'react'
import './App.css'
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
