import { DateRange } from 'react-day-picker'
import { formatDate } from './formatDate'

export const formatDateRange = (range: DateRange | undefined): string => {
  if (!range?.from || !range?.to) {
    return ''
  }
  return `${formatDate(range.from)} - ${formatDate(range.to)}`
}
