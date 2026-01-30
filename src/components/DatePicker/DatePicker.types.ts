import { ComponentPropsWithoutRef } from 'react'

export type CaptionLayout = 'dropdown' | 'dropdown-months' | 'dropdown-years' | 'label'
export type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type InputProps = {
  label?: string
  error?: string
  placeholder?: string
  disabled?: boolean
} & Omit<ComponentPropsWithoutRef<'input'>, 'onClick' | 'value' | 'onChange'>

export type DatePickerProps = {
  mode: 'single' | 'range'
  value: string
  onChange: (value: string) => void
} & InputProps
