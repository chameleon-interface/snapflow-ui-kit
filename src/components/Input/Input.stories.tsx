import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta = {
  component: Input,
  title: 'Components/Input',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    type: { control: 'select', options: ['email', 'search', 'text', 'password'] },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

/** Default состояние */
export const Default: Story = {
  args: {
    type: 'email',
    placeholder: 'Epam@epam.com',
  },
}

/** Error состояние */
export const Error: Story = {
  args: {
    type: 'email',
    placeholder: 'Epam@epam.com',
    error: true,
    errorMessage: 'Ошибка ввода',
  },
}

/** Focus состояние */
export const Focus: Story = {
  args: {
    type: 'email',
    placeholder: 'Epam@epam.com',
    value: 'Текст',
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input') as HTMLInputElement
    input?.focus()
  },
}

/** Disabled состояние */
export const Disabled: Story = {
  args: {
    type: 'email',
    placeholder: 'Epam@epam.com',
    disabled: true,
    value: 'Нельзя редактировать',
  },
}
