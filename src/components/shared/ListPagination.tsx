import React from 'react'
import { Pagination } from 'antd'

const ListPagination: React.FC = () => {
  function onChange(pageNumber: number) {
    console.log('Page: ', pageNumber)
  }
  return <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
}
export default ListPagination
