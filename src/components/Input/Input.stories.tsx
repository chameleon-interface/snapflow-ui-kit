import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'
import { SearchIcon } from '@/icons'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    errorMessage: { control: 'text' },
    startIcon: {
      control: { type: 'select', options: ['None', 'Search'] },
      mapping: {
        None: undefined,
        Search: <SearchIcon />,
      },
    },
    endIcon: { control: false },
    allowPasswordToggle: { control: 'boolean' },
    disabled: { control: 'boolean' },
    type: { control: { type: 'select', options: ['text', 'email', 'password'] } },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

/** Template for all stories with controlled value */

/** Default */
export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
  },
}

/** Error */
export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    errorMessage: 'Invalid format',
  },
}

/** Disabled */
export const Disabled: Story = {
  args: {
    label: 'Password',
    value: 'Cannot be edited',
    onChange: () => {},
    disabled: true,
  },
}

/** Start icon */
export const WithStartIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Enter query',
    startIcon: 'Search',
  },
}

/** Password input with toggle eye */
export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    allowPasswordToggle: true,
  },
}
