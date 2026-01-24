import { ElementType } from 'react'

import { clsx } from 'clsx'

import s from './Typography.module.css'
import { TypographyProps } from './Typography.types'

export const Typography = <T extends ElementType = 'span'>(props: TypographyProps<T>) => {
  const { as: Component = 'span', children, className, icon, variant, ...rest } = props

  return (
    <Component className={clsx(s.typography, s[variant], className)} {...rest}>
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
    </Component>
  )
}
