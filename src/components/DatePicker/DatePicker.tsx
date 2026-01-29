import { Typography } from '@/components/Typography'
import { CalendarIcon, CloseIcon } from '@/icons'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
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

  const closeCalendar = () => {
    setIsOpen(false)
  }

  useClickOutside(wrapperRef, isOpen, closeCalendar)

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const handleSelect = (value: Date | DateRange | undefined) => {
    if (mode === 'single') {
      const date = value as Date | undefined
      onSelectDate?.(date)
      if (date) {
        setIsOpen(false)
      }
    } else {
      const range = value as DateRange | undefined
      onSelectRange?.(range)
      if (range?.from && range?.to && range.from !== range.to) {
        setIsOpen(false)
      }
    }
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (disabled) return
    handleSelect(undefined)
  }

  const openHandler = () => {
    if (disabled) return
    setIsOpen((prev) => !prev)
  }

  const displayValue =
    mode === 'single'
      ? formatSingleDate(date as Date | undefined)
      : formatDateRange(date as DateRange | undefined)

  const hasValue = Boolean(displayValue)

  const commonDayPickerProps = getDayPickerProps(isOpen, disabled)

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
            onClick={openHandler}
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
          selected={date as Date | undefined}
          onSelect={handleSelect as (date: Date | undefined) => void}
        />
      ) : (
        <DayPicker
          {...commonDayPickerProps}
          captionLayout="dropdown"
          mode="range"
          selected={date as DateRange | undefined}
          onSelect={handleSelect as (range: DateRange | undefined) => void}
        />
      )}
    </div>
  )
}
