import { ComponentPropsWithoutRef } from 'react'

export type InputProps = {
  label?: string
  error?: string
  placeholder?: string
  disabled?: boolean
} & Omit<ComponentPropsWithoutRef<'input'>, 'value' | 'readOnly'>

export type InputContainerProps = {
  value?: string
  onClick: () => void
  onClear?: () => void
} & InputProps
