import { clsx } from 'clsx'
import s from './Checkbox.module.css'
import { CheckboxProps } from './Checkbox.types'

export const Checkbox = ({ children, className, checked, onChange, ...rest }: CheckboxProps) => {
  return (
    <label className={clsx(s.checkbox, className)}>
      <input type="checkbox" className={s.input} checked={checked} onChange={onChange} {...rest} />

      <span className={s.control} />
      {children && <span className={s.labelSpan}>{children}</span>}
    </label>
  )
}
