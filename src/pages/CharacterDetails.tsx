import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCharacterQuery } from '@generated/graphql'
import CharacterDetailsItem from '@components/characters/CharacterDetailsItem'
import PageError from '@components/shared/page-components/PageError'
import PageTitle from '@components/shared/page-components/PageTitle'

const CharacterDetails: React.FC = () => {
  const { characterId } = useParams()
  const id = characterId ?? ''

  const { data, error, isLoading } = useGetCharacterQuery(
    {
      id,
    },
    {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  )
  const character = data?.character
  return (
    <>
      <PageTitle title="Character details" />
      {error && <PageError error={error} />}
      {!error && character && <CharacterDetailsItem character={character} loading={isLoading} />}
    </>
  )
}
export default CharacterDetails
