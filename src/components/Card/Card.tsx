import { clsx } from 'clsx'

import s from './Card.module.css'
import { CardProps } from './Card.types'

export const Card = ({ className, children, ...rest }: CardProps) => {
  return (
    <div className={clsx(s.card, className)} {...rest}>
      {children}
    </div>
  )
}
