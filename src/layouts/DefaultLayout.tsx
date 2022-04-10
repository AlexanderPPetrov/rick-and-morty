import React from 'react'
import { Layout } from 'antd'
import AppHeader from '@components/app/AppHeader'
import AppSideBar from '@components/app/AppSideBar'
import AppDrawer from '@components/app/AppDrawer'
import { MobileView, BrowserView } from 'react-device-detect'

interface Props {
  children: React.ReactNode
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout className="h-full">
      <AppHeader />
      <MobileView>
        <AppDrawer />
      </MobileView>
      <Layout>
        <BrowserView>
          <AppSideBar />
        </BrowserView>
        <Layout className="px-6 py-4 overflow-y-auto">{children}</Layout>
      </Layout>
    </Layout>
  )
}
export default DefaultLayout
