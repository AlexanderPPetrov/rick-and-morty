import React from 'react'
import { Collapse, Checkbox } from 'antd'
import { CheckboxOptionType, CheckboxValueType } from 'antd/lib/checkbox/Group'
const { Panel } = Collapse

interface Props {
  title?: string
  optionsGroup: Array<Array<CheckboxOptionType | string | number>>
  onChange?: (checkedValue: Array<CheckboxValueType>) => void
}

const PageFilter: React.FC<Props> = ({ title = 'filters', optionsGroup, onChange }) => {
  return (
    <Collapse defaultActiveKey={['1']} ghost>
      <Panel showArrow={false} header={title} key="1">
        {optionsGroup.map((options, index: number) => (
          <Checkbox.Group key={index} options={options} onChange={onChange} />
        ))}
      </Panel>
    </Collapse>
  )
}
export default PageFilter
