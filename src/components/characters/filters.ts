import { CheckboxOptionType } from 'antd/lib/checkbox/Group'
import { optionGroup } from '@components/shared/page-components/PageFilter'

export const statusOptions: Array<CheckboxOptionType | string | number> = [
  { label: 'Alive', value: 'alive' },
  { label: 'Dead', value: 'dead' },
  { label: 'Unknown', value: 'unknown' },
]

const genderOptions: Array<CheckboxOptionType | string | number> = [
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' },
  { label: 'Genderless', value: 'genderless' },
  { label: 'Unknown', value: 'unknown' },
]
const statusOptionsGroup: optionGroup = {
  key: 'status',
  title: 'Status',
  options: statusOptions,
}
const genderOptionsGroup: optionGroup = {
  key: 'gender',
  title: 'Gender',
  options: genderOptions,
}

export const characterFilters = [statusOptionsGroup, genderOptionsGroup]
