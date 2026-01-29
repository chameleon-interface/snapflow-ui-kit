import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

export type TypographyVariant =
  | 'large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'text-16'
  | 'text-14'
  | 'text-14-bold'
  | 'text-16-bold'
  | 'text-14-medium'
  | 'small'
  | 'small-semibold'
  | 'link'
  | 'small-link'

export type TypographyProps<T extends ElementType = 'span'> = {
  as?: T
  children: ReactNode
  icon?: ReactNode
  variant: TypographyVariant
} & Omit<ComponentPropsWithoutRef<T>, 'as'>
