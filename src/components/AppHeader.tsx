import React from 'react'
import { Layout, Button, Switch } from 'antd'
import { useAppContext } from '@context/AppContext'
import MenuOutlined from '@ant-design/icons/MenuOutlined'
// import BulbOutlined from '@ant-design/icons/BulbOutlined'
import MemoSvgLogo from '@components/shared/svg/Logo'
const AppHeader: React.FC = () => {
  const { menuOpened, setMenuOpened, setTheme } = useAppContext()
  const { Header } = Layout

  // TODO  Support Light and Dark theme
  // Seems not quite an easy job, will leave it for now as
  // only Menu and Sider components support light and dark theme
  // function onChange(checked: boolean) {
  //   const theme = checked ? 'light' : 'dark'
  //   setTheme(theme)
  // }

  return (
    <Header className="header flex items-center border-b border-slate-200">
      <Button
        className="menu mr-6"
        type="link"
        icon={<MenuOutlined />}
        onClick={() => setMenuOpened(!menuOpened)}
      />
      <MemoSvgLogo />
      {/*<div className="ml-auto flex items-center">*/}
      {/*  <BulbOutlined className="mx-2" />*/}
      {/*  <Switch defaultChecked onChange={onChange} size="small" />*/}
      {/*</div>*/}
    </Header>
  )
}
export default AppHeader
