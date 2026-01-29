import { InputHTMLAttributes, ReactNode } from 'react'

export type InputProps = {
  label?: string
  errorMessage?: string

  startIcon?: ReactNode
  endIcon?: ReactNode
  onEndIconClick?: () => void

  allowPasswordToggle?: boolean

  className?: string
} & InputHTMLAttributes<HTMLInputElement>
