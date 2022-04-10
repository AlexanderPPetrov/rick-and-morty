import React from 'react'
import { Row, Col, Card, Skeleton } from 'antd'
const { Meta } = Card
import defaultAvatar from '@root/src/assets/images/default_avatar.png'
import { CharacterWithSkeleton } from '@components/characters/types'
import EpisodeList from '@components/episodes/EpisodeList'
import { EpisodeBaseFragment } from '@generated/graphql'

interface CharacterWithEpisode extends CharacterWithSkeleton {
  episode?: EpisodeBaseFragment[] | null
}
interface Props {
  character: CharacterWithEpisode
  loading: boolean
}

const CharacterDetailsItem: React.FC<Props> = ({ character, loading }) => {
  return (
    <Row>
      <Col>
        <Skeleton active avatar loading={loading && character.skeleton} paragraph={{ rows: 1 }}>
          <Card
            style={{ width: 240 }}
            cover={<img alt={character.name ?? ''} src={character.image ?? defaultAvatar} />}
          >
            <Meta title={character.name} description={character.species} />
          </Card>
          <span>{character.gender}</span>
        </Skeleton>
      </Col>
      <Col>
        <EpisodeList episodes={character.episode} />
      </Col>
    </Row>
  )
}
export default CharacterDetailsItem
