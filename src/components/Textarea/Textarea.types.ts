import { ChangeEvent, ComponentPropsWithoutRef } from 'react'

type BaseProps = {
  label?: string
  errorMessage?: string
  minHeight?: number
}

export type TextareaProps = BaseProps & {
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
} & Omit<ComponentPropsWithoutRef<'textarea'>, 'value' | 'defaultValue' | 'onChange'>
