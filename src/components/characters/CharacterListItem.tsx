import React from 'react'
import { Col, Card, Avatar, Image, Skeleton } from 'antd'
import { CharacterBaseFragment } from '@generated/graphql'
import defaultAvatar from '@root/src/assets/images/default_avatar.png'
import YoutubeOutlined from '@ant-design/icons/YoutubeOutlined'
import PushpinOutlined from '@ant-design/icons/PushpinOutlined'

interface CharacterWithSkeleton extends CharacterBaseFragment {
  skeleton?: boolean
}
interface Props {
  character: CharacterWithSkeleton
  isLoading: boolean
  isFetchingNextPage: boolean
  sentryRef?: React.Ref<HTMLDivElement>
}

const CharacterListItem: React.FC<Props> = ({
  character,
  isLoading,
  isFetchingNextPage,
  sentryRef,
}) => {
  if (!character) {
    return null
  }
  const loading = isLoading || isFetchingNextPage
  return (
    <Col xs={24} xl={6} ref={sentryRef}>
      <Card
        hoverable
        actions={[<YoutubeOutlined key="episodes" />, <PushpinOutlined key="location" />]}
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
        </Skeleton>
      </Card>
    </Col>
  )
}
export default CharacterListItem
