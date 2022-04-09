import React from 'react'
import { Empty } from 'antd'
import PageTitle from '@components/shared/page-components/PageTitle'
const Locations: React.FC = () => {
  return (
    <>
      <PageTitle title="Locations" />
      <div className="py-24 flex justify-center items-center">
        <Empty />
      </div>
    </>
  )
}
export default Locations
