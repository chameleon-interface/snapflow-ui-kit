import { useEffect, useRef } from 'react'
import { DateRange } from 'react-day-picker'
import { getSingleDateFromProps, getRangeDateFromProps } from '../utils/getDateFromProps'

type DateType = Date | DateRange

export const useSyncDateFromProps = (
  mode: 'single' | 'range',
  date: DateType | undefined,
  setSelectedSingle: (date: Date | undefined) => void,
  setSelectedRange: (range: DateRange | undefined) => void,
  resetSingle: (date: Date | undefined) => void,
  resetRange: (range: DateRange | undefined) => void,
) => {
  const prevModeRef = useRef(mode)

  useEffect(() => {
    const modeChanged = prevModeRef.current !== mode

    if (modeChanged) {
      if (mode === 'single') {
        resetRange(undefined)
      } else {
        resetSingle(undefined)
      }
      prevModeRef.current = mode
    }

    if (mode === 'single') {
      setSelectedSingle(getSingleDateFromProps(date))
    } else {
      setSelectedRange(getRangeDateFromProps(date))
    }
  }, [date, mode, setSelectedSingle, setSelectedRange, resetSingle, resetRange])
}
