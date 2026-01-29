import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'
import { SearchIcon } from '@/icons'
import { useState } from 'react'
import { InputProps } from './Input.types'

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
    endIcon: { control: false }, // для кастомных кнопок
    showPasswordToggle: { control: 'boolean' },
    disabled: { control: 'boolean' },
    type: { control: { type: 'select', options: ['text', 'email', 'password'] } },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

/** Template для всех stories с управляемым value */
const Template = (args: InputProps) => {
  const [value, setValue] = useState(args.value || args.defaultValue || '')
  return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
}

/** Default */
export const Default: Story = {
  render: Template,
  args: {
    label: 'Email',
    placeholder: 'Введите email',
  },
}

/** Error */
export const Error: Story = {
  render: Template,
  args: {
    label: 'Email',
    placeholder: 'Введите email',
    errorMessage: 'Неверный формат',
  },
}

/** Disabled */
export const Disabled: Story = {
  render: Template,
  args: {
    label: 'Email',
    placeholder: 'Введите email',
    defaultValue: 'Нельзя редактировать',
    disabled: true,
  },
}

/** Start icon */
export const WithStartIcon: Story = {
  render: Template,
  args: {
    label: 'Поиск',
    placeholder: 'Введите запрос',
    startIcon: 'Search',
  },
}

/** Password input с toggle eye */
export const Password: Story = {
  render: Template,
  args: {
    label: 'Пароль',
    placeholder: 'Введите пароль',
    type: 'password',
    showPasswordToggle: true,
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button') as HTMLButtonElement
    button?.click() // переключаем видимость пароля
  },
}
