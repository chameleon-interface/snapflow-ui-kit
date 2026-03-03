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
    defaultSearchValue = '',
    disabled = false,
    filterOptions,
    isLoading = false,
    label,
    loadingText = 'Loading...',
    noOptionsText = 'No options found',
    onChange,
    onSearchChange,
    options,
    placeholder,
    searchDebounceMs = 180,
    searchMode = 'local',
    searchPlaceholder = 'Search...',
    searchValue,
    searchable = false,
    value,
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const [searchQueryState, setSearchQueryState] = useState(searchValue ?? defaultSearchValue)
  const selectRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const isFirstSearchChangeRef = useRef(true)
  const isSearchControlled = searchValue !== undefined
  const searchQuery = isSearchControlled ? searchValue : searchQueryState
  const debouncedDisplayedSearchQuery = useDebouncedValue(searchQuery, searchDebounceMs)
  const debouncedSearchQuery = useDebouncedValue(searchQueryState, searchDebounceMs)
  const shouldFilterOptions = filterOptions ?? searchMode === 'local'

  const selectedOption = options.find((option) => option.value === value)
  const normalizedSearchQuery = debouncedDisplayedSearchQuery.trim().toLowerCase()
  const filteredOptions =
    shouldFilterOptions && normalizedSearchQuery
      ? options.filter((option) => option.label.toLowerCase().includes(normalizedSearchQuery))
      : options

  const resetSearchQuery = useCallback(() => {
    setSearchQueryState('')
  }, [])

  const closeDropdown = useCallback(() => {
    setIsOpen(false)
    resetSearchQuery()
  }, [resetSearchQuery])

  const handleToggle = () => {
    if (disabled) {
      return
    }

    if (isOpen) {
      closeDropdown()
    } else {
      resetSearchQuery()
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
    if (!searchable || !onSearchChange) {
      return
    }

    if (isFirstSearchChangeRef.current) {
      isFirstSearchChangeRef.current = false

      return
    }

    onSearchChange(debouncedSearchQuery)
  }, [debouncedSearchQuery, onSearchChange, searchable])

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
              isLoading={isLoading}
              loadingText={loadingText}
              noOptionsText={noOptionsText}
              onSearchChange={setSearchQueryState}
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
