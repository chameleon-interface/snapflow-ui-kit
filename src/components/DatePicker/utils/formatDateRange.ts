import { DateRange } from 'react-day-picker'
import { formatDate } from './formatDate'

export const formatDateRange = (range: DateRange | undefined): string => {
  if (!range?.from) return ''
  if (!range.to) return formatDate(range.from)
  return `${formatDate(range.from)} - ${formatDate(range.to)}`
}
