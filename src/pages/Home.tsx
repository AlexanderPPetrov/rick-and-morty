import React from 'react'
import CharacterList from '@components/characters/CharacterList'
import DefaultLayout from '@layouts/DefaultLayout'
const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <CharacterList />
    </DefaultLayout>
  )
}
export default Home
