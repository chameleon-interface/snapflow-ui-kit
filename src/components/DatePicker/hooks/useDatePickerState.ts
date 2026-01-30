import { useState, useMemo } from 'react'
import { DateRange } from 'react-day-picker'
import { parseDateValue } from '../utils/parseDateValue'

export const useDatePickerState = (value: string, mode: 'single' | 'range') => {
  const [localMonth, setLocalMonth] = useState(new Date())

  const selectedDate = useMemo(() => parseDateValue(value, mode), [value, mode])

  // Compute month from selectedDate if available, otherwise use localMonth
  const month = useMemo(() => {
    if (!selectedDate) return localMonth

    if (mode === 'single' && selectedDate instanceof Date) {
      return selectedDate
    }

    if (mode === 'range' && typeof selectedDate === 'object' && 'from' in selectedDate) {
      const range = selectedDate as DateRange
      if (range.from) {
        return range.from
      }
      if (range.to) {
        return range.to
      }
    }

    return localMonth
  }, [selectedDate, mode, localMonth])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setSelectedDate = (_date: Date | DateRange | undefined) => {
    // This is a no-op since selectedDate is derived from value
    // The actual update should happen through onChange callback
  }

  const setMonth = (date: Date) => {
    setLocalMonth(date)
  }

  return {
    selectedDate,
    setSelectedDate,
    month,
    setMonth,
  }
}
