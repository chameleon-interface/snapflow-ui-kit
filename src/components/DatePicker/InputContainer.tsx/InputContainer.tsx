import { Typography } from '@/components/Typography'
import { CalendarIcon, CloseIcon } from '@/icons'
import clsx from 'clsx'
import { useState } from 'react'
import s from './InputContainer.module.css'
import { InputContainerProps } from './InputContainer.types'

export const InputContainer = (props: InputContainerProps) => {
  const { id, label, onClick, value, disabled, error, placeholder, onClear, ...rest } = props
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (disabled) return
    onClick()
  }

  const handleClearClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (disabled) return
    onClear?.()
  }

  const hasValue = Boolean(value)

  return (
    <div className={s.inputContainer}>
      {label && (
        <label htmlFor={id} className={disabled ? s.disabledLabel : s.label}>
          <Typography variant="text-14">{label}</Typography>
        </label>
      )}
      <div
        className={s.inputWrapper}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          type="text"
          readOnly
          className={clsx(s.trigger, error && s.error)}
          onClick={handleClick}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={label || 'Select date'}
          aria-invalid={error ? 'true' : 'false'}
          {...rest}
        />
        {hasValue && isHovered && !disabled && onClear && (
          <button
            type="button"
            className={s.clearButton}
            onClick={handleClearClick}
            aria-label="Clear date"
            tabIndex={0}
          >
            <CloseIcon className={s.clearIcon} />
          </button>
        )}
        <CalendarIcon className={clsx(s.icon, !value && s.placeholder)} />
      </div>
      {error && (
        <Typography variant="small" className={s.error}>
          {error}
        </Typography>
      )}
    </div>
  )
}
