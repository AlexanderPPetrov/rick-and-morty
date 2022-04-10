import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Characters from '@pages/Characters'
import CharacterDetails from '@pages/CharacterDetails'
import Episodes from '@pages/Episodes'
import Locations from '@pages/Locations'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters />}></Route>
      <Route path="characters/:characterId" element={<CharacterDetails />} />
      <Route path="episodes" element={<Episodes />}></Route>
      <Route path="locations" element={<Locations />}></Route>
    </Routes>
  )
}
export default AppRoutes
