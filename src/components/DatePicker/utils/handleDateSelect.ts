import { DateRange } from 'react-day-picker'
import { formatDateValue } from './formatDateValue'

type HandleDateSelectParams = {
  value: Date | DateRange | undefined
  mode: 'single' | 'range'
  onChange: (value: string) => void
  setSelectedDate: (date: Date | DateRange | undefined) => void
  setMonth: (date: Date) => void
  setIsOpen: (open: boolean) => void
}

export const handleDateSelect = ({
  value,
  mode,
  onChange,
  setSelectedDate,
  setMonth,
  setIsOpen,
}: HandleDateSelectParams) => {
  if (!value) {
    setSelectedDate(undefined)
    onChange('')
    return
  }

  if (mode === 'single') {
    if (value instanceof Date) {
      setSelectedDate(value)
      setMonth(value)
      onChange(formatDateValue(value, 'single'))
      setIsOpen(false)
    }
    return
  }

  if (mode === 'range' && typeof value === 'object' && 'from' in value) {
    const range = value as DateRange
    setSelectedDate(range)

    if (range.from) {
      setMonth(range.from)
    } else if (range.to) {
      setMonth(range.to)
    }

    const formattedValue = formatDateValue(range, 'range')
    onChange(formattedValue)

    if (range.from && range.to) {
      setIsOpen(false)
    }
  }
}
