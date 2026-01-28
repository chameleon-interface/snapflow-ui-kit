import { useState } from 'react'

import s from './PageSizeSelect.module.css'
import { PageSizeSelectProps } from './PageSizeSelect.type'
import { ArrowDownIcon, ArrowUpIcon } from '../../../icons'

export const PageSizeSelect = ({
  value,
  options = [10, 20, 30, 50, 100],
  onChange,
}: PageSizeSelectProps) => {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((prev) => !prev)

  const selectValue = (val: number) => {
    onChange(val)
    setOpen(false)
  }

  return (
    <div className={s.wrapper}>
      <span className={s.label}>Show</span>

      <div className={s.select}>
        <button
          type="button"
          className={s.trigger}
          onClick={toggle}
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          <span className={s.value}>{value}</span>

          <span className={s.arrow}>
            {open ? (
              <ArrowUpIcon width={16} height={16} />
            ) : (
              <ArrowDownIcon width={16} height={16} />
            )}
          </span>
        </button>

        {open && (
          <ul className={s.list} role="listbox">
            {options.map((option) => {
              const isActive = option === value

              return (
                <li
                  key={option}
                  role="option"
                  aria-selected={isActive}
                  className={`${s.item} ${isActive ? s.active : ''}`}
                  onClick={() => selectValue(option)}
                >
                  {option}
                </li>
              )
            })}
          </ul>
        )}
      </div>

      <span className={s.label}>on page</span>
    </div>
  )
}
