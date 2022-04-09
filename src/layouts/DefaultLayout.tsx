import React from 'react'
import { Layout } from 'antd'
import AppHeader from '@components/AppHeader'
import AppSideBar from '@components/menu/AppSideBar'
import AppDrawer from '@components/menu/AppDrawer'
import { MobileView, BrowserView } from 'react-device-detect'

interface Props {
  children: React.ReactNode
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout className="h-full">
      <AppHeader />
      <MobileView>
        <AppDrawer></AppDrawer>
      </MobileView>
      <Layout>
        <BrowserView>
          <AppSideBar></AppSideBar>
        </BrowserView>
        <Layout className="px-6 py-4 overflow-y-auto">{children}</Layout>
      </Layout>
    </Layout>
  )
}
export default DefaultLayout
