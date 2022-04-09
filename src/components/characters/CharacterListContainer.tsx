import React, { useState } from 'react'
import { useInfiniteGetCharactersQuery } from '@generated/graphql'
import useInfiniteScroll from 'react-infinite-scroll-hook'

import CharacterPageList from '@components/characters/CharacterPageList'
import { getMockPageResults } from '@utils/mockResults'
import PageTitle from '@components/shared/PageTitle'
import PageSearch from '@components/shared/PageSearch'
import PageFilter from '@components/shared/PageFilter'
import PageError from '@components/shared/PageError'
import { characterFilters } from '@components/characters/filters'

const CharacterListContainer: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  const setFilters = (filterKey: string, value: string) => {
    if (filterKey === 'gender') {
      setGender(value)
    }
    if (filterKey === 'status') {
      setStatus(value)
    }
  }
  const filter = {
    name,
    gender,
    status,
  }

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
      <PageFilter optionsGroup={characterFilters} onChange={setFilters} />

      <div className="flex justify-between items-center my-3">
        <PageTitle title="Characters" />
        <PageSearch placeholder="Search for characters" handleSearch={setName} />
      </div>
      {error && <PageError error={error} />}
      <CharacterPageList pages={pages} loading={loading} sentryRef={sentryRef} />
    </>
  )
}
export default CharacterListContainer
