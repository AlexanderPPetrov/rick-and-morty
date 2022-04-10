import React from 'react'
import { List } from 'antd'
import { EpisodeBaseFragment } from '@generated/graphql'
interface Props {
  episodes?: EpisodeBaseFragment[] | null
}
const EpisodeList: React.FC<Props> = ({ episodes }) => {
  if (!episodes) {
    return null
  }
  return (
    <List
      itemLayout="horizontal"
      dataSource={episodes}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta title={<span>{item.name}</span>} description={item.air_date} />
        </List.Item>
      )}
    />
  )
}
export default EpisodeList
