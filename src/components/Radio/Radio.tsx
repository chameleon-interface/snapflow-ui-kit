import { clsx } from 'clsx'
import s from './Radio.module.css'
import { RadioProps } from './Radio.types'

export const Radio = ({ children, className, checked, onChange, ...rest }: RadioProps) => {
  return (
    <label className={clsx(s.radio, className)}>
      <input type="radio" className={s.input} checked={checked} onChange={onChange} {...rest} />

      <span className={s.control} />
      {children && <span className={s.labelSpan}>{children}</span>}
    </label>
  )
}
