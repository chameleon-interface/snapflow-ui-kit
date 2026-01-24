import { useEffect, useRef, useState } from 'react'

import { clsx } from 'clsx'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

import { ArrowDownIcon } from '../../icons'

import s from './Select.module.css'
import { SelectProps } from './Select.types'

export const Select = (props: SelectProps) => {
  const { className, disabled = false, label, onChange, options, placeholder, value } = props

  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((option) => option.value === value)

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className={clsx(s.container, className)}>
      {label && <label className={s.label}>{label}</label>}

      <div className={s.select} ref={selectRef}>
        <button
          className={clsx(s.trigger, isOpen && s.triggerOpen)}
          disabled={disabled}
          onClick={handleToggle}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className={selectedOption ? s.selectedContent : s.placeholder}>
            {selectedOption?.icon && <span className={s.optionIcon}>{selectedOption.icon}</span>}
            {selectedOption ? selectedOption.label : placeholder || 'Select an option'}
          </span>
          <span className={clsx(s.arrow, isOpen && s.open)}>
            <ArrowDownIcon />
          </span>
        </button>

        {isOpen && (
          <SimpleBar className={s.dropdown} role="listbox" style={{ maxHeight: 191 }}>
            {options.map((option) => (
              <button
                key={option.value}
                className={clsx(s.option, option.value === value && s.selected)}
                onClick={() => handleSelect(option.value)}
                type="button"
                role="option"
                aria-selected={option.value === value}
              >
                {option.icon && <span className={s.optionIcon}>{option.icon}</span>}
                {option.label}
              </button>
            ))}
          </SimpleBar>
        )}
      </div>
    </div>
  )
}
