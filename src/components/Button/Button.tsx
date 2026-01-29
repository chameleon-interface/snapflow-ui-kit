import { clsx } from 'clsx'

import s from './Button.module.css'
import { ButtonProps } from './Button.types'

type AsButtonProps = ButtonProps & { asLink?: false }
type AsLinkProps = ButtonProps & { asLink: true }

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
