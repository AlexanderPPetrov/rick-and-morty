import { CheckboxOptionType } from 'antd/lib/checkbox/Group'

export const status = [
  { label: 'Alive', value: 'alive' },
  { label: 'Dead', value: 'dead' },
  { label: 'Unknown', value: 'unknown' },
]

const genders = [
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' },
  { label: 'Genderless', value: 'genderless' },
  { label: 'Unknown', value: 'unknown' },
]
export const genderOptions = status as Array<CheckboxOptionType | string | number>
export const statusOptions = genders as Array<CheckboxOptionType | string | number>
