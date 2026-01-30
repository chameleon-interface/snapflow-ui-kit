import { DateRange } from 'react-day-picker'
import { format } from 'date-fns'

const DATE_FORMAT = 'dd.MM.yyyy'

export const formatSingleDate = (date: Date | undefined): string => {
  if (!date) return ''
  return format(date, DATE_FORMAT)
}

export const formatRangeDate = (range: DateRange | undefined): string => {
  if (!range || !range.from) return ''

  if (range.to && range.from.getTime() !== range.to.getTime()) {
    return `${format(range.from, DATE_FORMAT)} - ${format(range.to, DATE_FORMAT)}`
  }

  return format(range.from, DATE_FORMAT)
}

export const formatDateValue = (
  value: Date | DateRange | undefined,
  mode: 'single' | 'range',
): string => {
  if (!value) return ''

  if (mode === 'single' && value instanceof Date) {
    return formatSingleDate(value)
  }

  if (mode === 'range' && typeof value === 'object' && 'from' in value) {
    return formatRangeDate(value as DateRange)
  }

  return ''
}
