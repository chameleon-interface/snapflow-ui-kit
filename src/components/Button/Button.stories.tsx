import type { Meta, StoryObj } from '@storybook/react-vite'

import { LogOutIcon, PlusSquareIcon, SearchIcon, TrashIcon } from '@/icons'

import { Button } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A polymorphic button component that can render as a `<button>` or `<a>` element. Supports multiple visual variants for different use cases.',
      },
    },
  },
  argTypes: {
    asLink: {
      control: { type: 'boolean' },
      description: 'Renders the button as an anchor element',
      table: { defaultValue: { summary: 'false' }, type: {} },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outlined', 'text'],
      description: 'Visual style variant of the button',
      table: { defaultValue: { summary: 'primary' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the button (only for button element)',
      table: { defaultValue: { summary: 'false' } },
    },
    icon: {
      control: false,
      description: 'Icon element to display before the button text',
      table: { type: {} },
    },
    children: {
      description: 'Button content',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
      table: { type: {} },
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/** Primary action button. Use for main call-to-action. */
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

/** Secondary action button. Use for less prominent actions. */
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

/** Outlined button with transparent background. Use for tertiary actions. */
export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    disabled: false,
    variant: 'outlined',
  },
}

/** Text-only button without background. Use for subtle actions. */
export const Text: Story = {
  args: {
    children: 'Text Button',
    disabled: false,
    variant: 'text',
  },
}

/** Button rendered as an anchor element. Use for navigation that should look like a button. */
export const AsLink: Story = {
  args: {
    asLink: true,
    children: 'Link that looks like a button',
    href: 'https://google.com',
    rel: 'noopener noreferrer',
    target: '_blank',
    variant: 'primary',
  },
}

/** Primary button with an icon. Use icons to enhance button meaning. */
export const PrimaryWithIcon: Story = {
  args: {
    children: 'Add Item',
    icon: <PlusSquareIcon />,
    variant: 'primary',
  },
}

/** Secondary button with an icon. */
export const SecondaryWithIcon: Story = {
  args: {
    children: 'Search',
    icon: <SearchIcon />,
    variant: 'secondary',
  },
}

/** Outlined button with an icon. */
export const OutlinedWithIcon: Story = {
  args: {
    children: 'Log Out',
    icon: <LogOutIcon />,
    variant: 'outlined',
  },
}

/** Text button with an icon. */
export const TextWithIcon: Story = {
  args: {
    children: 'Delete',
    icon: <TrashIcon />,
    variant: 'text',
  },
}

/** Button with icon and disabled state. */
export const DisabledWithIcon: Story = {
  args: {
    children: 'Add Item',
    disabled: true,
    icon: <PlusSquareIcon />,
    variant: 'primary',
  },
}

/** Link button with an icon. */
export const AsLinkWithIcon: Story = {
  args: {
    asLink: true,
    children: 'Search Results',
    href: '#',
    icon: <SearchIcon />,
    variant: 'primary',
  },
}
