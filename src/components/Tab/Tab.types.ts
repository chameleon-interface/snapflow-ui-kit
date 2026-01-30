import { ComponentPropsWithoutRef } from 'react'

export type TabProps = {
  selected?: boolean
} & ComponentPropsWithoutRef<'button'>
