import React from 'react'
import { Row } from 'antd'
import { GetCharactersQuery } from '@generated/graphql'
import CharacterListItem from '@components/characters/CharacterListItem'
interface Props {
  data: GetCharactersQuery
}
const CharacterList: React.FC<Props> = ({ data }) => {
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
