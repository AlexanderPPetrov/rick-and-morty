import React from 'react'
import { Row, Col, Card, Skeleton, Avatar, Image, Typography, Descriptions } from 'antd'
const { Title } = Typography

import defaultAvatar from '@root/src/assets/images/default_avatar.png'
import { CharacterWithSkeletonExtended } from '@components/characters/types'
import EpisodeList from '@components/episodes/EpisodeList'
import { Maybe } from '@generated/graphql'

interface Props {
  character: Maybe<CharacterWithSkeletonExtended>
  loading: boolean
}

const CharacterDetailsItem: React.FC<Props> = ({ character, loading }) => {
  const episode = character?.episode
  return (
    <Row gutter={[12, 12]}>
      <Col span={24}>
        {character && (
          <Skeleton active avatar loading={loading && character.skeleton} paragraph={{ rows: 1 }}>
            <Card className="md:!p-6 sm:!p-0">
              <div className="flex flex-wrap">
                <Avatar
                  size={166}
                  src={
                    <Image
                      alt={character.name ?? ''}
                      src={character.image ?? defaultAvatar}
                      style={{ width: 166 }}
                    />
                  }
                />
                <div className="md:!px-12 sm:!px-0 md:!mt-0 mt-6">
                  <Title level={2}>{character.name}</Title>

                  <Descriptions layout="vertical" className="max-w-xl">
                    <Descriptions.Item label="Species">
                      <span className="font-bold">{character.species}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Gender">
                      <span className="font-bold">{character.gender}</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Location">
                      <span className="font-bold">{character.location?.name}</span>
                    </Descriptions.Item>
                  </Descriptions>
                </div>
              </div>
            </Card>
          </Skeleton>
        )}
      </Col>
      <Col span={24}>
        <Card>{episode && <EpisodeList episodes={episode} />}</Card>
      </Col>
    </Row>
  )
}
export default CharacterDetailsItem
