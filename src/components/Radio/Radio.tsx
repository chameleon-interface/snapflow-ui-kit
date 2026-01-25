import { ComponentPropsWithoutRef } from 'react'
import { clsx } from 'clsx'

import s from './Radio.module.css'

type RadioProps = {
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Radio = (props: RadioProps) => {
  const { label, className, ...rest } = props

  return (
    <label className={clsx(s.radio, s.radioContainer, className)}>
      <input type="radio" className={s.input} {...rest} />
      <span className={s.control} />
      {label && <span className={s.labelSpan}>{label}</span>}
    </label>
  )
}
