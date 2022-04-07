import { Input } from 'antd'
import React from 'react'
const { Search } = Input

interface Props {
  placeholder: string
}
const onSearch = (value: any) => console.log(value)

const PageTitle: React.FC<Props> = ({ placeholder }) => {
  return (
    <Search
      size="large"
      placeholder={placeholder}
      allowClear
      onSearch={onSearch}
      className="max-w-xs"
    />
  )
}
export default PageTitle
