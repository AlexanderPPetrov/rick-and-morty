import React from 'react'
import CharacterListContainer from '@components/characters/CharacterListContainer'
import DefaultLayout from '@layouts/DefaultLayout'
const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <CharacterListContainer />
    </DefaultLayout>
  )
}
export default Home
