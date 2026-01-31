import { ComponentPropsWithoutRef, ReactNode } from 'react'

export type CardProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<'div'>
