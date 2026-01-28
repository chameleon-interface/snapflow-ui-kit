import { DateRange } from 'react-day-picker'

type DateType = Date | DateRange

export const getInitialSingle = (date: DateType | undefined): Date | undefined => {
  if (!date) return undefined
  return date instanceof Date ? date : undefined
}

export const getInitialRange = (date: DateType | undefined): DateRange | undefined => {
  if (!date) return undefined
  return !(date instanceof Date) ? (date as DateRange) : undefined
}
