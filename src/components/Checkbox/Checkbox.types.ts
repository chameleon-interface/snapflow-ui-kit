import { ReactNode } from 'react'

export type CheckboxProps = {
  children?: ReactNode
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  id?: string
  className?: string
}
