import { useState, useMemo } from 'react'
import { DateRange } from 'react-day-picker'
import { parseDateValue } from '../utils/parseDateValue'

export const useDatePickerState = (value: string, mode: 'single' | 'range') => {
  const [localMonth, setLocalMonth] = useState(new Date())

  const month = useMemo(() => {
    const parsedDate = parseDateValue(value, mode)

    if (!parsedDate) return localMonth

    if (mode === 'single' && parsedDate instanceof Date) {
      return parsedDate
    }

    if (mode === 'range' && typeof parsedDate === 'object' && 'from' in parsedDate) {
      const range = parsedDate as DateRange
      if (range.from) {
        return range.from
      }
      if (range.to) {
        return range.to
      }
    }

    return localMonth
  }, [value, mode, localMonth])

  const setMonth = (date: Date) => {
    setLocalMonth(date)
  }

  return {
    month,
    setMonth,
  }
}
