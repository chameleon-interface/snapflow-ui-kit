import { Typography } from '@/components/Typography'
import { CalendarIcon, CloseIcon } from '@/icons'
import clsx from 'clsx'
import { ChangeEvent, type MouseEvent, useMemo, useRef, useState } from 'react'
import { DateRange, DayPicker, type DayPickerProps } from 'react-day-picker'

import styles from './DatePicker.module.css'
import { DatePickerProps } from './DatePicker.types'
import { useClickOutside } from './hooks/useClickOutside'
import { useDatePickerState } from './hooks/useDatePickerState'
import { getDayPickerProps } from './utils/getDayPickerProps'
import { getSelectedDate } from './utils/getSelectedDate'
import { handleDateSelect } from './utils/handleDateSelect'
import { parseDateValue } from './utils/parseDateValue'
import { updateMonthFromDate } from './utils/updateMonthFromDate'

export const DatePicker = ({
  mode,
  value,
  onChange,
  disabled,
  label,
  error,
  placeholder,
  ...rest
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { selectedDate, setSelectedDate, month, setMonth } = useDatePickerState(value, mode)

  const closeCalendar = () => {
    setIsOpen(false)
  }

  useClickOutside(wrapperRef, isOpen, closeCalendar)

  const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    handleSelect(undefined)
  }

  const handleToggle = () => {
    if (disabled) return
    setIsOpen((prev) => !prev)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value

    onChange(inputValue)

    const parsed = parseDateValue(inputValue, mode)

    if (parsed) {
      setSelectedDate(parsed)
      updateMonthFromDate(parsed, mode, setMonth)
    } else if (!inputValue) {
      setSelectedDate(undefined)
    }
  }

  const handleSelect = (selectedValue: Date | DateRange | undefined) => {
    handleDateSelect({
      value: selectedValue,
      mode,
      onChange,
      setSelectedDate,
      setMonth,
      setIsOpen,
    })
  }

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
            className={clsx(styles.trigger, error && styles.error)}
            onClick={handleToggle}
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
            disabled={disabled}
            aria-label={label || 'Select date'}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            aria-invalid={error ? 'true' : 'false'}
            {...rest}
          />
          {value && !disabled && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={handleClear}
              aria-label="Clear date"
            >
              <CloseIcon className={styles.clearIcon} />
            </button>
          )}
          <CalendarIcon className={clsx(styles.icon, !value && styles.placeholder)} />
        </div>
        {error && (
          <Typography variant="small" className={styles.error}>
            {error}
          </Typography>
        )}
      </div>

      {mode === 'single' ? (
        <DayPicker
          {...(commonDayPickerProps as DayPickerProps)}
          month={month}
          onMonthChange={setMonth}
          mode="single"
          selected={getSelectedDate(selectedDate, mode) as Date | undefined}
          onSelect={handleSelect}
        />
      ) : (
        <DayPicker
          {...(commonDayPickerProps as DayPickerProps)}
          month={month}
          onMonthChange={setMonth}
          mode="range"
          selected={getSelectedDate(selectedDate, mode) as DateRange | undefined}
          onSelect={handleSelect}
        />
      )}
    </div>
  )
}
