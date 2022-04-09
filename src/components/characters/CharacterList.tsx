import React from 'react'
import { GetCharactersQuery } from '@generated/graphql'
import CharacterListItem from '@components/characters/CharacterListItem'
interface Props {
  data: GetCharactersQuery
  sentryRef?: React.Ref<HTMLDivElement>
  loading: boolean
}
const CharacterList: React.FC<Props> = ({ data, loading, sentryRef }) => {
  return (
    <>
      {data?.characters?.results &&
        data.characters.results.map(
          (character, index: number) =>
            character && (
              <CharacterListItem
                key={index}
                character={character}
                loading={loading}
                sentryRef={sentryRef}
              />
            ),
        )}
    </>
  )
}
export default CharacterList
