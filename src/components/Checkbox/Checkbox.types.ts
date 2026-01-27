import { ComponentPropsWithoutRef, ReactNode } from 'react'

export type CheckboxProps = {
  children?: ReactNode
  checked?: boolean
  onChange?: ComponentPropsWithoutRef<'input'>['onChange']
} & Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'checked' | 'onChange' | 'children'>
