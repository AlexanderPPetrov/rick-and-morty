import React from 'react'
import { Empty } from 'antd'
import PageTitle from '@components/shared/page-components/PageTitle'

const Episodes: React.FC = () => {
  return (
    <>
      <PageTitle title="Episodes" />
      <div className="py-24 flex justify-center items-center">
        <Empty />
      </div>
    </>
  )
}
export default Episodes
