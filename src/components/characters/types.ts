import { CharacterBaseFragment, CharacterExtendedFragment } from '@generated/graphql'

export interface CharacterWithSkeleton extends CharacterBaseFragment {
  skeleton?: boolean
}
export interface CharacterWithSkeletonExtended extends CharacterExtendedFragment {
  skeleton?: boolean
}
