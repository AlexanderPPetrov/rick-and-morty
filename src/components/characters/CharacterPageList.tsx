import React from 'react'
import { Row } from 'antd'
import CharacterList from '@components/characters/CharacterList'
import { GetCharactersQuery } from '@generated/graphql'
import PageLoader from '@components/shared/PageLoader'

interface Props {
  pages: GetCharactersQuery[]
  sentryRef?: React.Ref<HTMLDivElement>
  isLoading: boolean
  isFetchingNextPage: boolean
}
const CharacterPageList: React.FC<Props> = ({
  pages,
  isLoading,
  isFetchingNextPage,
  sentryRef,
}) => {
  return (
    <Row gutter={[12, 12]} className="relative">
      {pages.map(
        (page, index: number) =>
          page && (
            <CharacterList
              key={index}
              data={page}
              isLoading={isLoading}
              isFetchingNextPage={isFetchingNextPage}
              sentryRef={sentryRef}
            />
          ),
      )}
      {isFetchingNextPage && <PageLoader />}
    </Row>
  )
}
export default CharacterPageList
