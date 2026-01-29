import { ChangeEvent, ComponentPropsWithoutRef } from 'react'

export type TextareaProps = {
  label?: string
  errorMessage?: string
  minHeight?: number
  className?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
} & ComponentPropsWithoutRef<'textarea'>
