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
  noOptionsText?: string
  onChange?: (value: string) => void
  options: SelectOption[]
  placeholder?: string
  searchPlaceholder?: string
  searchable?: boolean
  value?: string
}
