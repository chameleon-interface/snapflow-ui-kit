import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'

export type InputProps = {
  label?: string
  errorMessage?: string

  startIcon?: ReactNode
  endIcon?: ReactNode
  onEndIconClick?: () => void

  allowPasswordToggle?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  className?: string
} & InputHTMLAttributes<HTMLInputElement>
