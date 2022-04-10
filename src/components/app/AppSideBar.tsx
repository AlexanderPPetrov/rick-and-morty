import React from 'react'
import { Layout } from 'antd'
import AppMenu from '@components/app/AppMenu'
import { useAppContext } from '@context/AppContext'

const AppSideBar: React.FC = () => {
  const { menuOpened } = useAppContext()

  return (
    <Layout.Sider
      collapsed={menuOpened}
      className="min-h-screen"
      breakpoint={'lg'}
      theme="light"
      width={250}
      collapsedWidth={0}
      trigger={null}
    >
      <AppMenu />
    </Layout.Sider>
  )
}
export default AppSideBar
