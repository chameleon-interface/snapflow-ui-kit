import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'text'

type CommonProps = {
  variant?: ButtonVariant
  icon?: ReactNode
}

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
} & CommonProps &
  Omit<ComponentPropsWithoutRef<T>, 'as'>
