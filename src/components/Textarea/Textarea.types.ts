import { ChangeEvent, ComponentPropsWithoutRef } from 'react'

export type TextareaProps = {
  label?: string
  errorMessage?: string
  minHeight?: number
  value?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
} & Omit<ComponentPropsWithoutRef<'textarea'>, 'value' | 'defaultValue' | 'onChange'>
