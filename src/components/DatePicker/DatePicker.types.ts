import { ComponentPropsWithoutRef } from 'react'
import type { DayPickerProps } from 'react-day-picker'

export type CaptionLayout = NonNullable<DayPickerProps['captionLayout']>
export type WeekStartsOn = NonNullable<DayPickerProps['weekStartsOn']>

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
