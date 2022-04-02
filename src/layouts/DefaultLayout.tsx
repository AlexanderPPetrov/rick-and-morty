import React from 'react'
import { Layout } from 'antd'
import AppHeader from '@components/AppHeader'
import AppSideBar from '@components/menu/AppSideBar'
import AppBreadcrumb from '@components/AppBreadcrumb'
import AppDrawer from '@components/menu/AppDrawer'
import { MobileView, BrowserView } from 'react-device-detect'

interface Props {
  children: React.ReactNode
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <AppHeader />
      <MobileView>
        <AppDrawer></AppDrawer>
      </MobileView>
      <Layout>
        <BrowserView>
          <AppSideBar></AppSideBar>
        </BrowserView>
        <Layout style={{ padding: '0 24px 24px' }}>
          <AppBreadcrumb />
          {children}
        </Layout>
      </Layout>
    </Layout>
  )
}
export default DefaultLayout
