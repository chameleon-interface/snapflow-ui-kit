import { ComponentPropsWithoutRef } from 'react'
import { TypographyVariant } from '../Typography'

export type LabelProps = {
  text: string
  textVariant?: TypographyVariant
  required?: boolean
  color?: string
  className?: string
} & Omit<ComponentPropsWithoutRef<'label'>, 'children'>
