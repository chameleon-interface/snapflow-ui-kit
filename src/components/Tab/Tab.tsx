import { clsx } from 'clsx'

import s from './Tab.module.css'
import type { TabProps } from './Tab.types'

export const Tab = (props: TabProps) => {
  const { children, selected = false, className, disabled = false, ...rest } = props

  const tabClasses = clsx(s.tab, selected && s.selected, disabled && s.disabled, className)

  return (
    <button
      type="button"
      role="tab"
      className={tabClasses}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      aria-selected={selected}
      aria-disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
