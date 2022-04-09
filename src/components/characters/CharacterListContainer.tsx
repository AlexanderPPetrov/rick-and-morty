import React, { useState } from 'react'
import { useInfiniteGetCharactersQuery } from '@generated/graphql'
import useInfiniteScroll from 'react-infinite-scroll-hook'

import CharacterPageList from '@components/characters/CharacterPageList'
import { getMockPageResults } from '@utils/mockResults'
import PageTitle from '@components/shared/PageTitle'
import PageSearch from '@components/shared/PageSearch'
import PageError from '@components/shared/PageError'

const CharacterListContainer: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const filter = searchValue ? { name: searchValue } : {}

  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteGetCharactersQuery(
      {
        page: 1,
        filter,
      },
      {
        getNextPageParam: lastPage => {
          return {
            page: lastPage?.characters?.info?.next,
            filter,
          }
        },
        refetchOnWindowFocus: false,
        retry: 1,
      },
    )

  const [sentryRef] = useInfiniteScroll({
    hasNextPage: hasNextPage ?? false,
    loading: isFetchingNextPage,
    onLoadMore: fetchNextPage,
    rootMargin: '0px 0px 800px 0px',
  })

  const pagesData = data?.pages ?? []
  const loading = isLoading || isFetchingNextPage
  const pages = loading ? [...pagesData, getMockPageResults('characters')] : pagesData
  return (
    <>
      <div className="flex justify-between items-center my-3">
        <PageTitle title="Characters" />
        <PageSearch placeholder="Search for characters" handleSearch={setSearchValue} />
      </div>
      {error && <PageError error={error} />}
      <CharacterPageList pages={pages} loading={loading} sentryRef={sentryRef} />
    </>
  )
}
export default CharacterListContainer
