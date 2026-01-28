import { DateRange } from 'react-day-picker'
import { DateType } from '../DatePicker.types'

export const isDate = (date: DateType | undefined): date is Date => {
  return date instanceof Date
}

export const isDateRange = (date: DateType | undefined): date is DateRange => {
  return date !== undefined && !(date instanceof Date)
}
