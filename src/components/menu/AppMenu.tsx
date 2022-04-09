import React from 'react'
import { Menu } from 'antd'
import UserOutlined from '@ant-design/icons/UserOutlined'
import YoutubeOutlined from '@ant-design/icons/YoutubeOutlined'
import PushpinOutlined from '@ant-design/icons/PushpinOutlined'

const AppMenu: React.FC = () => {
  const items = [
    {
      key: 'characters',
      title: 'Characters',
      icon: <UserOutlined />,
    },
    {
      key: 'episodes',
      title: 'Episodes',
      icon: <YoutubeOutlined />,
    },
    {
      key: 'locations',
      title: 'Locations',
      icon: <PushpinOutlined />,
    },
  ]
  const menuItems = items.map(item => (
    <Menu.Item key={item.key} icon={item.icon}>
      {item.title}
    </Menu.Item>
  ))
  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={[items[0].key]}
      style={{ height: '100%', borderRight: 0 }}
    >
      {menuItems}
    </Menu>
  )
}
export default AppMenu
