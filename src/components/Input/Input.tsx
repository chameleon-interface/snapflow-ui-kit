import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { clsx } from 'clsx'

import s from './Input.module.css'
import { EyeIcon, SearchIcon } from '../../icons'

export type InputProps = {
  error?: boolean
  errorMessage?: string
  className?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { error = false, errorMessage, className, disabled, type = 'text', id, ...rest } = props

  const isSearch = type === 'search'
  const isPassword = type === 'password'

  const errorId = error && errorMessage ? `${id || 'input'}-error` : undefined

  const inputClasses = clsx(
    s.input,
    {
      [s.errorState]: error,
      [s.disabled]: disabled,
      [s.withStartIcon]: isSearch,
      [s.withEndIcon]: isPassword,
    },
    className,
  )

  return (
    <div className={s.inputWrapper}>
      {isSearch && (
        <div className={s.searchIcon}>
          <SearchIcon />
        </div>
      )}

      <input
        ref={ref}
        id={id}
        type={type}
        disabled={disabled}
        className={inputClasses}
        aria-invalid={error}
        aria-describedby={errorId}
        {...rest}
      />

      {isPassword && (
        <div className={s.eyeIcon}>
          <EyeIcon />
        </div>
      )}

      {error && errorMessage && (
        <span id={errorId} className={s.errorMessage} role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  )
})

Input.displayName = 'Input'
