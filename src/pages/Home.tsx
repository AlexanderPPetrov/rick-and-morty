import React from 'react'
import CharacterListContainer from '@components/characters/CharacterListContainer'
import DefaultLayout from '@layouts/DefaultLayout'
import PageTitle from '@components/shared/PageTitle'
import PageSearch from '@components/shared/PageSearch'
const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="flex justify-between items-center my-3">
        <PageTitle title="Characters" />
        <PageSearch placeholder="Search for characters" />
      </div>
      <CharacterListContainer />
    </DefaultLayout>
  )
}
export default Home
