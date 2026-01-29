import { ComponentPropsWithoutRef, ReactNode } from 'react'
export type RadioProps = {
  children?: ReactNode
  checked?: boolean
  onChange?: ComponentPropsWithoutRef<'input'>['onChange']
} & Omit<ComponentPropsWithoutRef<'input'>, 'checked' | 'onChange' | 'children'>
