import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'text'

type CommonProps = {
  variant?: ButtonVariant
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

export const Button = (props: ButtonProps) => {
  const { className, variant = 'primary', asLink, ...rest } = props
  const classes = clsx(s.button, s[variant], className)

  if (asLink) {
    const { ...linkProps } = rest as AsLinkProps
    return <a className={classes} {...linkProps} />
  }

  const { ...buttonProps } = rest as AsButtonProps
  return <button className={classes} {...buttonProps} />
}
