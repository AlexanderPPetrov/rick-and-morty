import React from 'react'
import { Col, Card, Avatar, Image } from 'antd'
import { CharacterBaseFragment } from '@generated/graphql'
import defaultAvatar from '@root/src/assets/images/default_avatar.png'
import YoutubeOutlined from '@ant-design/icons/YoutubeOutlined'
import PushpinOutlined from '@ant-design/icons/PushpinOutlined'
interface Props {
  character: CharacterBaseFragment
}

const CharacterListItem: React.FC<Props> = ({ character }) => {
  if (!character) {
    return null
  }
  return (
    <Col span={6}>
      <Card
        hoverable
        style={{ width: 240 }}
        actions={[<YoutubeOutlined key="episodes" />, <PushpinOutlined key="location" />]}
      >
        <Card.Meta
          avatar={
            <Avatar
              size={64}
              src={
                <Image
                  alt={character.name ?? ''}
                  src={character.image ?? defaultAvatar}
                  style={{ width: 64 }}
                />
              }
            />
          }
          title={character.name}
          description={character.species}
        />
      </Card>
    </Col>
  )
}
export default CharacterListItem
