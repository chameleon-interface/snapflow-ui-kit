import { Typography } from '@/components/Typography'
import { CalendarIcon, CloseIcon } from '@/icons'
import clsx from 'clsx'
import { type MouseEvent, useCallback, useMemo, useRef, useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'

import styles from './DatePicker.module.css'
import { DatePickerProps } from './DatePicker.types'
import { useClickOutside } from './hooks/useClickOutside'
import { formatDateRange } from './utils/formatDateRange'
import { formatSingleDate } from './utils/formatSingleDate'
import { getDayPickerProps } from './utils/getDayPickerProps'

export const DatePicker = ({
  mode,
  date,
  onSelectDate,
  onSelectRange,
  disabled,
  label,
  error,
  placeholder,
  ...rest
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const closeCalendar = useCallback(() => {
    setIsOpen(false)
  }, [])

  useClickOutside(wrapperRef, isOpen, closeCalendar)

  const handleSelect = useCallback(
    (value: Date | DateRange | undefined) => {
      if (mode === 'single') {
        if (value instanceof Date || value === undefined) {
          onSelectDate?.(value)
          if (value) {
            setIsOpen(false)
          }
        }
      } else {
        if (
          value === undefined ||
          (typeof value === 'object' && 'from' in value && 'to' in value)
        ) {
          onSelectRange?.(value)
          if (value && 'from' in value && value.from && value.to && value.from !== value.to) {
            setIsOpen(false)
          }
        }
      }
    },
    [mode, onSelectDate, onSelectRange],
  )

  const handleClear = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      handleSelect(undefined)
    },
    [handleSelect],
  )

  const handleToggle = useCallback(() => {
    if (disabled) return
    setIsOpen((prev) => !prev)
  }, [disabled])

  const displayValue = useMemo(() => {
    if (mode === 'single') {
      return formatSingleDate(date instanceof Date ? date : undefined)
    }
    return formatDateRange(date && typeof date === 'object' && 'from' in date ? date : undefined)
  }, [mode, date])

  const hasValue = Boolean(displayValue)

  const commonDayPickerProps = useMemo(() => getDayPickerProps(isOpen), [isOpen])

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.inputContainer}>
        {label && (
          <span className={disabled ? styles.disabledLabel : styles.label}>
            <Typography variant="text-14">{label}</Typography>
          </span>
        )}
        <div className={styles.inputWrapper}>
          <input
            type="text"
            readOnly
            className={clsx(styles.trigger, error && styles.error)}
            onClick={handleToggle}
            value={displayValue}
            placeholder={placeholder}
            disabled={disabled}
            aria-label={label || 'Select date'}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            aria-invalid={error ? 'true' : 'false'}
            {...rest}
          />
          {hasValue && !disabled && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={handleClear}
              aria-label="Clear date"
            >
              <CloseIcon className={styles.clearIcon} />
            </button>
          )}
          <CalendarIcon className={clsx(styles.icon, !displayValue && styles.placeholder)} />
        </div>
        {error && (
          <Typography variant="small" className={styles.error}>
            {error}
          </Typography>
        )}
      </div>

      {mode === 'single' ? (
        <DayPicker
          {...commonDayPickerProps}
          captionLayout="dropdown"
          mode="single"
          selected={date instanceof Date ? date : undefined}
          onSelect={(selectedDate) => handleSelect(selectedDate)}
        />
      ) : (
        <DayPicker
          {...commonDayPickerProps}
          captionLayout="dropdown"
          mode="range"
          selected={date && typeof date === 'object' && 'from' in date ? date : undefined}
          onSelect={(selectedRange) => handleSelect(selectedRange)}
        />
      )}
    </div>
  )
}
