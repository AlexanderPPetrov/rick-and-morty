import React from 'react'
import { Row } from 'antd'
import { useGetCharactersQuery } from '@generated/graphql'
import CharacterListItem from '@components/characters/CharacterListItem'

const CharacterList: React.FC = () => {
  const { data, error, isLoading } = useGetCharactersQuery({ page: 1 })
  //TODO maybe extract fetching error and loading to a container
  return (
    <Row gutter={[12, 12]}>
      {data?.characters?.results &&
        data.characters.results.map(
          character => character && <CharacterListItem key={character.id} character={character} />,
        )}
    </Row>
  )
}
export default CharacterList
