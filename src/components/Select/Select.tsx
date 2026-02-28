'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { clsx } from 'clsx'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

import { ArrowDownIcon } from '@/icons'

import { SelectDropdownContent } from './SelectDropdownContent'
import s from './Select.module.css'
import { SelectProps } from './Select.types'
import { useDebouncedValue } from './useDebouncedValue'

export const Select = (props: SelectProps) => {
  const {
    className,
    disabled = false,
    label,
    noOptionsText = 'No options found',
    onChange,
    options,
    placeholder,
    searchPlaceholder = 'Search...',
    searchable = false,
    value,
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const selectRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 180)

  const selectedOption = options.find((option) => option.value === value)
  const normalizedSearchQuery = debouncedSearchQuery.trim().toLowerCase()
  const filteredOptions = normalizedSearchQuery
    ? options.filter((option) => option.label.toLowerCase().includes(normalizedSearchQuery))
    : options

  const closeDropdown = useCallback(() => {
    setIsOpen(false)
    setSearchQuery('')
  }, [])

  const handleToggle = () => {
    if (disabled) {
      return
    }

    if (isOpen) {
      closeDropdown()
    } else {
      setSearchQuery('')
      setIsOpen(true)
    }
  }

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue)
    closeDropdown()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        closeDropdown()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [closeDropdown, isOpen])

  useEffect(() => {
    if (isOpen && searchable) {
      searchInputRef.current?.focus()
    }
  }, [isOpen, searchable])

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
            <SelectDropdownContent
              filteredOptions={filteredOptions}
              noOptionsText={noOptionsText}
              onSearchChange={setSearchQuery}
              onSelect={handleSelect}
              searchInputRef={searchInputRef}
              searchPlaceholder={searchPlaceholder}
              searchQuery={searchQuery}
              searchable={searchable}
              value={value}
            />
          </SimpleBar>
        )}
      </div>
    </div>
  )
}
