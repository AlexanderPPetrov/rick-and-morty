import React from 'react'
import { List } from 'antd'
import { EpisodeBaseFragment, Maybe } from '@generated/graphql'
import YoutubeOutlined from '@ant-design/icons/YoutubeOutlined'
interface Props {
  episodes?: Maybe<EpisodeBaseFragment>[]
}
const EpisodeList: React.FC<Props> = ({ episodes }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={episodes ?? []}
      renderItem={item => (
        <List.Item>
          <YoutubeOutlined key="episodes" className="text-3xl mr-6" style={{ color: 'gray' }} />
          <List.Item.Meta title={<span>{item?.name}</span>} description={item?.air_date} />
        </List.Item>
      )}
    />
  )
}
export default EpisodeList
