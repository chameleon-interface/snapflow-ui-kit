import { ElementType } from 'react'

import { clsx } from 'clsx'

import s from './Button.module.css'
import { ButtonProps } from './Button.types'

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, variant = 'primary', icon, ...rest } = props
  const classes = clsx(s.button, s[variant], className)
  const { children, ...componentProps } = rest

  return (
    <Component className={classes} {...componentProps}>
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
    </Component>
  )
}
