import { isValid, parse } from 'date-fns'
import { DateRange } from 'react-day-picker'

const DATE_FORMAT = 'dd.MM.yyyy'

export const parseSingleDate = (value: string): Date | undefined => {
  if (!value) return undefined

  const parsedDate = parse(value, DATE_FORMAT, new Date())
  return isValid(parsedDate) ? parsedDate : undefined
}

export const parseRangeDate = (value: string): DateRange | undefined => {
  if (!value) return undefined

  const separator = ' - '
  const separatorIndex = value.indexOf(separator)

  if (separatorIndex === -1) {
    const parsedDate = parse(value.trim(), DATE_FORMAT, new Date())
    if (isValid(parsedDate)) {
      return { from: parsedDate, to: undefined }
    }
    return undefined
  }

  const fromPart = value.substring(0, separatorIndex).trim()
  const toPart = value.substring(separatorIndex + separator.length).trim()

  if (!fromPart || !toPart) return undefined

  const fromDate = parse(fromPart, DATE_FORMAT, new Date())
  const toDate = parse(toPart, DATE_FORMAT, new Date())

  if (isValid(fromDate) && isValid(toDate)) {
    return { from: fromDate, to: toDate }
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
