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

/** Template для всех stories с управляемым value */

/** Default */
export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Введите email',
  },
}

/** Error */
export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Введите email',
    errorMessage: 'Неверный формат',
  },
}

/** Disabled */
export const Disabled: Story = {
  args: {
    type: 'password',
    label: 'password',
    placeholder: 'Введите password',
    value: 'Нельзя редактировать',
    disabled: true,
    allowPasswordToggle: true,
  },
}

/** Start icon */
export const WithStartIcon: Story = {
  args: {
    label: 'Поиск',
    placeholder: 'Введите запрос',
    startIcon: 'Search',
  },
}

/** Password input с toggle eye */
export const Password: Story = {
  args: {
    label: 'Пароль',
    placeholder: 'Введите пароль',
    type: 'password',
    allowPasswordToggle: true,
  },
}
