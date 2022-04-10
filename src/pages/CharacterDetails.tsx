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
  const pageTitle = data?.character?.name ?? ''
  return (
    <>
      <PageTitle title={pageTitle} />
      {error && <PageError error={error} />}
      {!error && data?.character && (
        <CharacterDetailsItem character={data.character} loading={isLoading} />
      )}
    </>
  )
}
export default CharacterDetails
