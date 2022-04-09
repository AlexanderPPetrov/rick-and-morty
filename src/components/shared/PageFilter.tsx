import React from 'react'
import { Collapse, Radio } from 'antd'
import { CheckboxOptionType, CheckboxValueType } from 'antd/lib/checkbox/Group'
const { Panel } = Collapse

export type optionGroup = {
  key: string
  title: string
  options: Array<CheckboxOptionType | string | number>
}
interface Props {
  title?: string
  optionsGroup: optionGroup[]
  onChange: (groupKey: string, checkedValue: string) => void
}

const PageFilter: React.FC<Props> = ({ title = 'filters', optionsGroup, onChange }) => {
  return (
    <Collapse defaultActiveKey={['1']} ghost>
      <Panel showArrow={false} header={title} key="1">
        {optionsGroup.map(optionGroup => (
          <div key={optionGroup.key}>
            <span>{optionGroup.title}</span>
            <Radio.Group
              options={optionGroup.options}
              onChange={e => onChange(optionGroup.key, e.target.value)}
            />
          </div>
        ))}
      </Panel>
    </Collapse>
  )
}
export default PageFilter
