import { ComponentPropsWithoutRef, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'text'

type CommonProps = {
  variant?: ButtonVariant
  icon?: ReactNode
}

type AsButtonProps = {
  asLink?: false
} & CommonProps &
  ComponentPropsWithoutRef<'button'>

type AsLinkProps = {
  asLink: true
} & CommonProps &
  ComponentPropsWithoutRef<'a'>

export type ButtonProps = AsButtonProps | AsLinkProps
