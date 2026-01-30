import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'

export type InputProps = {
  label?: string
  errorMessage?: string

  startIcon?: ReactNode
  endIcon?: ReactNode
  onEndIconClick?: () => void

  allowPasswordToggle?: boolean
  className?: string

  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
