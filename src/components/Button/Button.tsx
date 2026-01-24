import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Button.module.css'

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

export const Button = (props: ButtonProps) => {
  const { className, variant = 'primary', asLink, icon, ...rest } = props
  const classes = clsx(s.button, s[variant], className)

  if (asLink) {
    const { children, ...linkProps } = rest as AsLinkProps
    return (
      <a className={classes} {...linkProps}>
        {icon && <span className={s.icon}>{icon}</span>}
        {children}
      </a>
    )
  }

  const { children, ...buttonProps } = rest as AsButtonProps
  return (
    <button className={classes} {...buttonProps}>
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
    </button>
  )
}
