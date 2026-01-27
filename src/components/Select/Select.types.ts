import { ReactNode } from 'react'

export type SelectOption = {
  icon?: ReactNode
  label: string
  value: string
}

export type SelectProps = {
  className?: string
  disabled?: boolean
  label?: string
  onChange?: (value: string) => void
  options: SelectOption[]
  placeholder?: string
  value?: string
}
