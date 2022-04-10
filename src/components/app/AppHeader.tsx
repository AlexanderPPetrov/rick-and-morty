import React from 'react'
import { Layout, Button } from 'antd'
import { useAppContext } from '@context/AppContext'
import MenuOutlined from '@ant-design/icons/MenuOutlined'
import MemoSvgLogo from '@components/shared/svg/Logo'
const AppHeader: React.FC = () => {
  const { menuOpened, setMenuOpened } = useAppContext()
  const { Header } = Layout
  return (
    <Header className="header flex items-center border-b border-slate-200" data-testid="app-header">
      <Button
        data-testid="app-header-menu-button"
        className="menu mr-6"
        type="link"
        icon={<MenuOutlined />}
        onClick={() => setMenuOpened(!menuOpened)}
      />
      <MemoSvgLogo data-testid="app-header-logo" />
    </Header>
  )
}
export default AppHeader
