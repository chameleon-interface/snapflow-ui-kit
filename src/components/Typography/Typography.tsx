import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Typography.module.css'

export type TypographyVariant =
  | 'large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'text-16'
  | 'text-14'
  | 'text-14-bold'
  | 'text-16-bold'
  | 'text-14-medium'
  | 'small'
  | 'small-semibold'
  | 'link'
  | 'small-link'

export type TypographyProps<T extends ElementType = 'span'> = {
  as?: T
  children: ReactNode
  icon?: ReactNode
  variant: TypographyVariant
} & Omit<ComponentPropsWithoutRef<T>, 'as'>

export const Typography = <T extends ElementType = 'span'>(props: TypographyProps<T>) => {
  const { as: Component = 'span', children, className, icon, variant, ...rest } = props

  return (
    <Component className={clsx(s.typography, s[variant], className)} {...rest}>
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
    </Component>
  )
}
