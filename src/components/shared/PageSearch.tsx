import { Input } from 'antd'
import React from 'react'
const { Search } = Input

interface Props {
  placeholder: string
  handleSearch: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => void
}

const PageSearch: React.FC<Props> = ({ placeholder, handleSearch }) => {
  return (
    <Search
      size="large"
      placeholder={placeholder}
      allowClear
      onSearch={(value: string) => handleSearch(value)}
      className="max-w-xs"
    />
  )
}
export default PageSearch
