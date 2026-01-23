import type { Meta, StoryObj } from '@storybook/react-vite'

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
