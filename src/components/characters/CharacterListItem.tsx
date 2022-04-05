import React from 'react'
import { Col, Card } from 'antd'
import { Character } from '@generated/graphql'
import defaultAvatar from '@root/src/assets/images/default_avatar.png'

interface Props {
  character: Omit<Character, 'episode'>
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
        cover={<img alt={character.name ?? ''} src={character.image ?? defaultAvatar} />}
      >
        <Card.Meta title={character.name} description={character.species} />
      </Card>
    </Col>
  )
}
export default CharacterListItem
