'use client'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './DropdownMenu.module.css'
import { DropdownMenuProps } from './DropdownMenu.types'

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { children, items, className, align = 'end', side = 'bottom' } = props

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>{children}</DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align={align}
          className={clsx(s.content, className)}
          side={side}
          sideOffset={4}
        >
          {items.map((item, index) => (
            <DropdownMenuPrimitive.Item
              key={index}
              className={s.item}
              disabled={item.disabled}
              onSelect={item.onSelect}
            >
              {item.icon && <span className={s.icon}>{item.icon}</span>}
              <span className={s.label}>{item.label}</span>
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}
