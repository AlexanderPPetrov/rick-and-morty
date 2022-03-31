import React from 'react'
import { Layout } from 'antd'
import AppHeader from '@components/AppHeader'
import AppSider from '@components/AppSider'
import AppBreadcrumb from '@components/AppBreadcrumb'

interface Props {
  children: React.ReactNode
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <Layout style={{ padding: '0 24px 24px' }}>
          <AppBreadcrumb />
          {children}
        </Layout>
      </Layout>
    </Layout>
  )
}
export default DefaultLayout
