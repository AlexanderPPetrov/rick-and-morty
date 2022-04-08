import React from 'react'
import { Spin } from 'antd'
import LoadingOutlined from '@ant-design/icons/LoadingOutlined'

interface PageLoaderProps {
  fontSize?: number
}
const PageLoader: React.FC<PageLoaderProps> = ({ fontSize = 40 }) => {
  const antIcon = <LoadingOutlined style={{ fontSize }} spin />
  return (
    <Spin
      className="left-1/2 transform -translate-x-1/2 bottom-5 opacity-70"
      style={{ position: 'absolute' }}
      indicator={antIcon}
    />
  )
}
export default PageLoader
