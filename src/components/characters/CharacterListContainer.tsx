import React from 'react'
import CharacterList from '@components/characters/CharacterList'
import { useGetCharactersQuery } from '@generated/graphql'
import { Alert } from 'antd'

const CharacterListContainer: React.FC = () => {
  const { data, error, isLoading } = useGetCharactersQuery({ page: 1 })
  if (isLoading) {
    return <div>Loading</div>
  }
  if (error || !data) {
    return <Alert message="Error" description="Could not load characters" type="error" showIcon />
  }
  return (
    <>
      <CharacterList data={data} />
    </>
  )
}
export default CharacterListContainer
