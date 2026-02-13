import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  BookMarkIcon,
  LogOutIcon,
  MoreHozitontalIcon,
  PersonIcon,
  SettingsIcon,
  TrendingUpIcon,
} from '@/icons'

import { Button } from '../Button'

import { DropdownMenu } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A dropdown menu component built on Radix UI. Provides a flexible menu interface with support for custom triggers and menu items with optional icons.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'Trigger element (typically a button or icon button)',
    },
    items: {
      description:
        'Array of menu items with label, optional icon, onSelect callback, and disabled state',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
      description: 'Horizontal alignment of the menu relative to the trigger',
      table: { defaultValue: { summary: 'end' } },
    },
    side: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Side of the trigger where the menu appears',
      table: { defaultValue: { summary: 'bottom' } },
    },
  },
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

/** Basic dropdown menu with text-only items. */
export const Default: Story = {
  args: {
    children: <Button variant="primary">Open Menu</Button>,
    items: [
      { label: 'Edit', onSelect: () => console.log('Edit clicked') },
      { label: 'Duplicate', onSelect: () => console.log('Duplicate clicked') },
      { label: 'Archive', onSelect: () => console.log('Archive clicked') },
      { label: 'Delete', onSelect: () => console.log('Delete clicked') },
    ],
  },
}

/** Dropdown menu with icons for each item (Instagram profile menu example). */
export const WithIcons: Story = {
  args: {
    children: (
      <Button variant="text">
        <MoreHozitontalIcon />
      </Button>
    ),
    items: [
      {
        icon: <SettingsIcon />,
        label: 'Profile Settings',
        onSelect: () => console.log('Profile Settings'),
      },
      {
        icon: <TrendingUpIcon />,
        label: 'Statistics',
        onSelect: () => console.log('Statistics'),
      },
      {
        icon: <BookMarkIcon />,
        label: 'Favorites',
        onSelect: () => console.log('Favorites'),
      },
      {
        icon: <LogOutIcon />,
        label: 'Log Out',
        onSelect: () => console.log('Log Out'),
      },
    ],
  },
}

/** Dropdown menu with some disabled items. */
export const WithDisabledItems: Story = {
  args: {
    children: <Button variant="outlined">Actions</Button>,
    items: [
      { label: 'View', onSelect: () => console.log('View') },
      { label: 'Edit', onSelect: () => console.log('Edit') },
      { label: 'Delete', onSelect: () => console.log('Delete'), disabled: true },
      { label: 'Archive', onSelect: () => console.log('Archive'), disabled: true },
    ],
  },
}

/** Menu aligned to the start of the trigger. */
export const AlignStart: Story = {
  args: {
    align: 'start',
    children: <Button variant="primary">Align Start</Button>,
    items: [
      { label: 'Option 1', onSelect: () => console.log('Option 1') },
      { label: 'Option 2', onSelect: () => console.log('Option 2') },
      { label: 'Option 3', onSelect: () => console.log('Option 3') },
    ],
  },
}

/** Menu appearing on the right side of the trigger. */
export const SideRight: Story = {
  args: {
    side: 'right',
    children: <Button variant="primary">Side Right</Button>,
    items: [
      { label: 'Option 1', onSelect: () => console.log('Option 1') },
      { label: 'Option 2', onSelect: () => console.log('Option 2') },
      { label: 'Option 3', onSelect: () => console.log('Option 3') },
    ],
  },
}

/** Icon button trigger (common pattern for overflow menus). */
export const IconButtonTrigger: Story = {
  args: {
    children: (
      <Button variant="text" aria-label="More options">
        <MoreHozitontalIcon />
      </Button>
    ),
    items: [
      {
        icon: <PersonIcon />,
        label: 'Profile',
        onSelect: () => console.log('Profile'),
      },
      {
        icon: <SettingsIcon />,
        label: 'Settings',
        onSelect: () => console.log('Settings'),
      },
      {
        icon: <LogOutIcon />,
        label: 'Log Out',
        onSelect: () => console.log('Log Out'),
      },
    ],
  },
}
