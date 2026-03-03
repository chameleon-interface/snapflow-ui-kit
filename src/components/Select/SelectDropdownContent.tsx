import { RefObject } from 'react'

import { clsx } from 'clsx'

import { SelectOption } from './Select.types'
import s from './Select.module.css'

type SelectDropdownContentProps = {
  filteredOptions: SelectOption[]
  isLoading: boolean
  loadingText: string
  noOptionsText: string
  onSearchChange: (value: string) => void
  onSelect: (optionValue: string) => void
  searchInputRef: RefObject<HTMLInputElement | null>
  searchPlaceholder: string
  searchQuery: string
  searchable: boolean
  value?: string
}

export const SelectDropdownContent = ({
  filteredOptions,
  isLoading,
  loadingText,
  noOptionsText,
  onSearchChange,
  onSelect,
  searchInputRef,
  searchPlaceholder,
  searchQuery,
  searchable,
  value,
}: SelectDropdownContentProps) => {
  return (
    <>
      {searchable && (
        <div className={s.searchContainer}>
          <input
            ref={searchInputRef}
            className={s.searchInput}
            onChange={(event) => onSearchChange(event.currentTarget.value)}
            placeholder={searchPlaceholder}
            type="text"
            value={searchQuery}
          />
        </div>
      )}

      {isLoading && <p className={s.noOptions}>{loadingText}</p>}

      {filteredOptions.length ? (
        filteredOptions.map((option) => (
          <button
            key={option.value}
            className={clsx(s.option, option.value === value && s.selected)}
            onClick={() => onSelect(option.value)}
            type="button"
            role="option"
            aria-selected={option.value === value}
          >
            {option.icon && <span className={s.optionIcon}>{option.icon}</span>}
            {option.label}
          </button>
        ))
      ) : !isLoading ? (
        <p className={s.noOptions}>{noOptionsText}</p>
      ) : null}
    </>
  )
}
