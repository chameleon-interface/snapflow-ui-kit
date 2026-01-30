import { DateRange } from 'react-day-picker'
import { isValid, parse } from 'date-fns'

const DATE_FORMAT = 'dd.MM.yyyy'

export const parseSingleDate = (value: string): Date | undefined => {
  if (!value) return undefined

  const parsedDate = parse(value, DATE_FORMAT, new Date())
  return isValid(parsedDate) ? parsedDate : undefined
}

export const parseRangeDate = (value: string): DateRange | undefined => {
  if (!value) return undefined

  const parts = value
    .split(/\s*-\s*/)
    .map((part) => part.trim())
    .filter((part) => part)

  if (parts.length === 2) {
    const fromDate = parse(parts[0], DATE_FORMAT, new Date())
    const toDate = parse(parts[1], DATE_FORMAT, new Date())

    if (isValid(fromDate) && isValid(toDate)) {
      return { from: fromDate, to: toDate }
    }
  } else if (parts.length === 1 && parts[0]) {
    const parsedDate = parse(parts[0], DATE_FORMAT, new Date())
    if (isValid(parsedDate)) {
      return { from: parsedDate, to: undefined }
    }
  }

  return undefined
}

export const parseDateValue = (
  value: string,
  mode: 'single' | 'range',
): Date | DateRange | undefined => {
  if (!value) return undefined

  if (mode === 'single') {
    return parseSingleDate(value)
  }

  return parseRangeDate(value)
}
