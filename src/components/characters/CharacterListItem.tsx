import React from 'react'
import { Col, Card, Avatar, Image, Skeleton } from 'antd'
import defaultAvatar from '@root/src/assets/images/default_avatar.png'
import YoutubeOutlined from '@ant-design/icons/YoutubeOutlined'
import PushpinOutlined from '@ant-design/icons/PushpinOutlined'
import EyeOutlined from '@ant-design/icons/EyeOutlined'
import { Link } from 'react-router-dom'
import { CharacterWithSkeleton } from '@components/characters/types'

interface Props {
  character: CharacterWithSkeleton
  loading: boolean
  sentryRef?: React.Ref<HTMLDivElement>
}

const CharacterListItem: React.FC<Props> = ({ character, loading, sentryRef }) => {
  return (
    <Col xs={24} xl={6} ref={sentryRef}>
      <Card
        actions={[
          <YoutubeOutlined key="episodes" />,
          <PushpinOutlined key="location" />,
          <Link key="location" to={`characters/${character.id}`}>
            <EyeOutlined />
          </Link>,
        ]}
      >
        <Skeleton active avatar loading={loading && character.skeleton} paragraph={{ rows: 1 }}>
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
          <span>{character.gender}</span>
        </Skeleton>
      </Card>
    </Col>
  )
}
export default CharacterListItem
