import React from 'react'
import { Row } from 'antd'
import { GetCharactersQuery } from '@generated/graphql'
import CharacterListItem from '@components/characters/CharacterListItem'
interface Props {
  data: GetCharactersQuery
  sentryRef?: React.Ref<HTMLDivElement>
  isLoading: boolean
  isFetchingNextPage: boolean
}
const CharacterList: React.FC<Props> = ({ data, isLoading, isFetchingNextPage, sentryRef }) => {
  return (
    <Row gutter={[12, 12]}>
      {data?.characters?.results &&
        data.characters.results.map(
          (character, index: number) =>
            character && (
              <CharacterListItem
                key={index}
                character={character}
                isLoading={isLoading}
                isFetchingNextPage={isFetchingNextPage}
                sentryRef={sentryRef}
              />
            ),
        )}
    </Row>
  )
}
export default CharacterList
