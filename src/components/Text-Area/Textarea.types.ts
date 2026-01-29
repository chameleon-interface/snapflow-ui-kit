import { ComponentPropsWithoutRef } from 'react'

export type TextareaProps = {
  label?: string
  errorMessage?: string
  minHeight?: number
  className?: string
} & ComponentPropsWithoutRef<'textarea'>
