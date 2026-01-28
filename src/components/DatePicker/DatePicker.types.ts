import { ComponentPropsWithoutRef } from 'react'
import { DateRange } from 'react-day-picker'

export type InputProps = {
  label?: string
  error?: string
  placeholder?: string
  disabled?: boolean
} & Omit<ComponentPropsWithoutRef<'input'>, 'value' | 'readOnly'>

type SingleModeProps = {
  mode: 'single'
  date?: Date
  onSelectDate?: (date: Date | undefined) => void
  onSelectRange?: never
}

type RangeModeProps = {
  mode: 'range'
  date?: DateRange
  onSelectRange?: (range: DateRange | undefined) => void
  onSelectDate?: never
}

export type DatePickerProps = (SingleModeProps | RangeModeProps) & Omit<InputProps, 'onClick'>
