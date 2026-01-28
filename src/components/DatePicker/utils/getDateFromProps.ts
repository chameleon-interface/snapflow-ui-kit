import { DateRange } from 'react-day-picker'

type DateType = Date | DateRange

export const getSingleDateFromProps = (date: DateType | undefined): Date | undefined => {
  return date instanceof Date ? date : undefined
}

export const getRangeDateFromProps = (date: DateType | undefined): DateRange | undefined => {
  return date && !(date instanceof Date) ? (date as DateRange) : undefined
}
