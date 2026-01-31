import { forwardRef, useId, useState } from 'react'
import { clsx } from 'clsx'

import s from './Input.module.css'
import { InputProps } from './Input.types'
import { EyeIcon, EyeOffIcon } from '@/icons'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      errorMessage,
      startIcon,
      endIcon,
      onEndIconClick,
      allowPasswordToggle,
      disabled,
      type = 'text',
      className,
      required,
      id,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const errorId = errorMessage ? `${inputId}-error` : undefined

    const isError = Boolean(errorMessage)
    const isPassword = type === 'password' && allowPasswordToggle

    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className={clsx(s.wrapper, className)}>
        {label && (
          <label htmlFor={inputId} className={clsx(s.label, { [s.disabled]: disabled })}>
            {label}
            {required && <sup className={s.required}> *</sup>}
          </label>
        )}

        <div
          className={clsx(s.inputContainer, {
            [s.error]: isError,
            [s.disabled]: disabled,
            [s.withStartIcon]: Boolean(startIcon),
            [s.withEndIcon]: Boolean(endIcon) || isPassword,
          })}
        >
          {startIcon && <span className={s.startIcon}>{startIcon}</span>}

          <input
            ref={ref}
            id={inputId}
            className={s.input}
            type={isPassword && showPassword ? 'text' : type}
            autoComplete={type === 'password' ? 'current-password' : 'off'}
            required={required}
            disabled={disabled}
            aria-invalid={isError}
            aria-describedby={errorId}
            {...rest}
          />

          {isPassword && (
            <button
              type="button"
              className={s.endIcon}
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              disabled={disabled}
              tabIndex={-1}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          )}

          {endIcon && !isPassword && (
            <button
              type="button"
              className={s.endIcon}
              onClick={onEndIconClick}
              aria-label="Action"
              disabled={disabled}
            >
              {endIcon}
            </button>
          )}
        </div>

        {isError && (
          <span id={errorId} className={s.errorMessage} role="alert">
            {errorMessage}
          </span>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
