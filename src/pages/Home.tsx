import React from 'react'
import { useGetCharactersQuery } from '@generated/graphql'
import DefaultLayout from '@layouts/DefaultLayout'
const Home: React.FC = () => {
  const { data } = useGetCharactersQuery({ page: 1 })
  console.log(data)
  return (
    <DefaultLayout>
      <div>aaa</div>
    </DefaultLayout>
  )
}
export default Home
