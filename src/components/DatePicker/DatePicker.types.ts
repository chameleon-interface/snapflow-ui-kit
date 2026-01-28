import { DateRange } from 'react-day-picker'
import { InputProps } from './InputContainer.tsx/InputContainer.types'

type DatePickerMode = 'single' | 'range'
type DateType = Date | DateRange

export type DatePickerProps = {
  mode: DatePickerMode
  onSelectDate?: (date: Date | undefined) => void
  onSelectRange?: (range: DateRange | undefined) => void
  date?: DateType
} & Omit<InputProps, 'onClick'>
