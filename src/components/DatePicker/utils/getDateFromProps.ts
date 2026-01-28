import { DateRange } from 'react-day-picker'
import { isDate, isDateRange } from './isDate'
import { DateType } from '../DatePicker.types'

export const getSingleDateFromProps = (date: DateType | undefined): Date | undefined => {
  return isDate(date) ? date : undefined
}

export const getRangeDateFromProps = (date: DateType | undefined): DateRange | undefined => {
  return isDateRange(date) ? date : undefined
}
