import React from 'react'
import { useInfiniteGetCharactersQuery } from '@generated/graphql'
import useInfiniteScroll from 'react-infinite-scroll-hook'

import { Alert } from 'antd'
import CharacterPageList from '@components/characters/CharacterPageList'
import { getMockPageResults } from '@utils/mockResults'

const CharacterListContainer: React.FC = () => {
  const { status, data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteGetCharactersQuery(
      'page',
      {
        page: 1,
      },
      {
        getNextPageParam: lastPage => {
          return {
            page: lastPage?.characters?.info?.next,
          }
        },
      },
    )
  console.log(status, data, error, isLoading, isFetchingNextPage, hasNextPage)

  const [sentryRef] = useInfiniteScroll({
    hasNextPage: hasNextPage ?? false,
    loading: isFetchingNextPage,
    onLoadMore: fetchNextPage,
    rootMargin: '0px 0px 800px 0px',
  })

  if (error) {
    return <Alert message="Error" description="Could not load characters" type="error" showIcon />
  }
  const pagesData = data?.pages ?? []
  const loading = isLoading || isFetchingNextPage ? true : false
  const pages = loading ? [...pagesData, getMockPageResults('characters')] : pagesData
  return (
    <>
      <CharacterPageList pages={pages} loading={loading} sentryRef={sentryRef} />
    </>
  )
}
export default CharacterListContainer
