import { useEffect, useRef } from 'react'
import { DateRange } from 'react-day-picker'
import { getSingleDateFromProps, getRangeDateFromProps } from '../utils/getDateFromProps'
import { DateType } from '../DatePicker.types'

export const useSyncDateFromProps = (
  mode: 'single' | 'range',
  date: DateType | undefined,
  setSelectedSingle: (date: Date | undefined) => void,
  setSelectedRange: (range: DateRange | undefined) => void,
) => {
  const prevModeRef = useRef(mode)

  useEffect(() => {
    const modeChanged = prevModeRef.current !== mode

    if (modeChanged) {
      if (mode === 'single') {
        setSelectedRange(undefined)
      } else {
        setSelectedSingle(undefined)
      }
      prevModeRef.current = mode
    }

    if (mode === 'single') {
      setSelectedSingle(getSingleDateFromProps(date))
    } else {
      setSelectedRange(getRangeDateFromProps(date))
    }
  }, [date, mode, setSelectedSingle, setSelectedRange])
}
