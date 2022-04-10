import React from 'react'
import { Row } from 'antd'
import CharacterList from '@components/characters/CharacterList'
import { GetCharactersQuery } from '@generated/graphql'

interface Props {
  pages: GetCharactersQuery[]
  sentryRef?: React.Ref<HTMLDivElement>
  loading: boolean
}
const CharacterPageList: React.FC<Props> = ({ pages, loading, sentryRef }) => {
  return (
    <Row gutter={[12, 12]} data-testid="character-page-list">
      {pages.map(
        (page, index: number) =>
          page && <CharacterList key={index} data={page} loading={loading} sentryRef={sentryRef} />,
      )}
    </Row>
  )
}
export default CharacterPageList
