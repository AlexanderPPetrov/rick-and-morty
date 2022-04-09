import React from 'react'
import { Collapse, Radio, Divider } from 'antd'
import { CheckboxOptionType } from 'antd/lib/checkbox/Group'
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

const PageFilter: React.FC<Props> = ({ title = 'Filters', optionsGroup, onChange }) => {
  return (
    <Collapse className="!mb-3">
      <Panel showArrow={false} header={title} key="1">
        <div className="flex flex-wrap -mx-4">
          {optionsGroup.map(optionGroup => (
            <div key={optionGroup.key} className="px-4">
              <div className="text-md font-bold py-1">{optionGroup.title}</div>
              <Radio.Group
                className="py-1"
                options={optionGroup.options}
                onChange={e => onChange(optionGroup.key, e.target.value)}
              />
            </div>
          ))}
        </div>
      </Panel>
    </Collapse>
  )
}
export default PageFilter
