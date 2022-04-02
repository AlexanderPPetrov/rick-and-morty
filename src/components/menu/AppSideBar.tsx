import React from 'react'
import { Layout } from 'antd'
import AppMenu from '@components/menu/AppMenu'
import './sidebar.css'
import { useAppContext } from '@context/AppContext'

const AppSideBar: React.FC = () => {
  const { menuOpened } = useAppContext()

  return (
    <Layout.Sider
      collapsed={menuOpened}
      className="sidebar"
      breakpoint={'lg'}
      theme="light"
      width={320}
      collapsedWidth={0}
      trigger={null}
    >
      <AppMenu />
    </Layout.Sider>
  )
}
export default AppSideBar
