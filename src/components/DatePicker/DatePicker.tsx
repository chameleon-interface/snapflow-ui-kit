import { useRef, useState, useCallback } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'

import styles from './DatePicker.module.css'
import { DatePickerProps } from './DatePicker.types'
import { InputContainer } from './InputContainer.tsx'
import { formatDateRange } from './utils/formatDateRange'
import { formatSingleDate } from './utils/formatSingleDate'
import { getDayPickerProps } from './utils/getDayPickerProps'
import { getInitialSingle, getInitialRange } from './utils/getInitialDate'
import { useSyncDateFromProps } from './hooks/useSyncDateFromProps'
import { useClickOutside } from './hooks/useClickOutside'

export const DatePicker = ({
  mode,
  onSelectDate,
  onSelectRange,
  disabled,
  date,
  ...rest
}: DatePickerProps) => {
  const [selectedSingle, setSelectedSingle] = useState<Date | undefined>(() =>
    mode === 'single' ? getInitialSingle(date) : undefined,
  )
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(() =>
    mode === 'range' ? getInitialRange(date) : undefined,
  )
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const closeCalendar = useCallback(() => {
    setIsOpen(false)
  }, [])

  const openHandler = () => {
    if (disabled) return
    setIsOpen((prev) => !prev)
  }

  const handleSingleSelect = useCallback(
    (date: Date | undefined) => {
      setSelectedSingle(date)
      onSelectDate?.(date)
    },
    [onSelectDate],
  )

  const handleRangeSelect = useCallback(
    (range: DateRange | undefined) => {
      setSelectedRange(range)
      onSelectRange?.(range)
    },
    [onSelectRange],
  )

  const handleClear = () => {
    if (disabled) return
    if (mode === 'single') {
      handleSingleSelect(undefined)
    } else {
      handleRangeSelect(undefined)
    }
  }

  useSyncDateFromProps(mode, date, setSelectedSingle, setSelectedRange)
  useClickOutside(wrapperRef, isOpen, closeCalendar)

  const displayValue =
    mode === 'range' ? formatDateRange(selectedRange) : formatSingleDate(selectedSingle)

  const commonDayPickerProps = getDayPickerProps(isOpen)

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <InputContainer
        onClick={openHandler}
        value={displayValue}
        disabled={disabled}
        onClear={handleClear}
        {...rest}
      />
      {mode === 'single' ? (
        <DayPicker
          {...commonDayPickerProps}
          mode="single"
          selected={selectedSingle}
          onSelect={handleSingleSelect}
        />
      ) : (
        <DayPicker
          {...commonDayPickerProps}
          mode="range"
          selected={selectedRange}
          onSelect={handleRangeSelect}
        />
      )}
    </div>
  )
}
