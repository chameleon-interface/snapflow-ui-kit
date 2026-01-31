import { DateRange } from 'react-day-picker'

export const updateMonthFromDate = (
  date: Date | DateRange | undefined,
  mode: 'single' | 'range',
  setMonth: (date: Date) => void,
) => {
  if (!date) return

  if (mode === 'single' && date instanceof Date) {
    setMonth(date)
    return
  }

  if (mode === 'range' && typeof date === 'object' && 'from' in date) {
    const range = date as DateRange
    if (range.from) {
      setMonth(range.from)
    } else if (range.to) {
      setMonth(range.to)
    }
  }
}
