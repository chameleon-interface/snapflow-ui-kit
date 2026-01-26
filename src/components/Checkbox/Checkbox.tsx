import { clsx } from 'clsx'
import { CheckmarkIcon } from '../../icons/CheckmarkIcon'
import { CheckboxProps } from './Checkbox.types'
import s from './Checkbox.module.css'

export const Checkbox = ({
  children,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  className,
}: CheckboxProps) => {
  const isControlled = checked !== undefined

  return (
    <label className={clsx(s.root, className)}>
      <span className={s.control}>
        <input
          id={id}
          type="checkbox"
          className={s.input}
          disabled={disabled}
          checked={isControlled ? checked : undefined}
          defaultChecked={!isControlled ? defaultChecked : undefined}
          onChange={(e) => onChange?.(e.target.checked)}
        />

        <span className={s.box}>
          <CheckmarkIcon className={s.checkmark} />
        </span>
      </span>

      {children && <span className={s.label}>{children}</span>}
    </label>
  )
}
