import React from 'react'
import { Drawer } from 'antd'
import { useAppContext } from '@context/AppContext'
import AppMenu from '@components/menu/AppMenu'

const AppDrawer: React.FC = () => {
  const { menuOpened, setMenuOpened } = useAppContext()
  return (
    <Drawer
      title="Rick & Morty"
      placement="left"
      width={320}
      maskClosable={true}
      onClose={() => setMenuOpened(false)}
      visible={menuOpened}
    >
      <AppMenu />
    </Drawer>
  )
}
export default AppDrawer
