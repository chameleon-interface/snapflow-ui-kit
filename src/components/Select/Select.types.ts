import { ReactNode } from 'react'

export type SelectOption = {
  icon?: ReactNode
  label: string
  value: string
}

export type SelectProps = {
  className?: string
  defaultSearchValue?: string
  disabled?: boolean
  filterOptions?: boolean
  isLoading?: boolean
  label?: string
  loadingText?: string
  noOptionsText?: string
  onChange?: (value: string) => void
  onSearchChange?: (query: string) => void
  options: SelectOption[]
  placeholder?: string
  searchDebounceMs?: number
  searchMode?: 'local' | 'remote'
  searchPlaceholder?: string
  searchValue?: string
  searchable?: boolean
  value?: string
}
