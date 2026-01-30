import { DateRange } from 'react-day-picker'

export const getSelectedDate = (
  selectedDate: Date | DateRange | undefined,
  mode: 'single' | 'range',
): Date | DateRange | undefined => {
  if (!selectedDate) return undefined

  if (mode === 'single') {
    if (selectedDate instanceof Date) {
      return selectedDate
    }
    return undefined
  }

  if (typeof selectedDate === 'object' && 'from' in selectedDate) {
    return selectedDate as DateRange
  }

  return undefined
}
