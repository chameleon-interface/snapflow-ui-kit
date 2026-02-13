import { ReactNode } from 'react'

export type DropdownMenuItem = {
  icon?: ReactNode
  label: string
  onSelect?: () => void
  disabled?: boolean
}

export type DropdownMenuProps = {
  children: ReactNode
  items: DropdownMenuItem[]
  className?: string
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
}
