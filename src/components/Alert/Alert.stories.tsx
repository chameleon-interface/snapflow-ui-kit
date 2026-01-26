import { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['error', 'success'],
      description: 'Тип алерта',
      table: { defaultValue: { summary: 'error' } },
    },
    message: {
      control: { type: 'text' },
      description: 'Текст алерта',
      table: { defaultValue: { summary: '' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/** Ошибка */
export const Error: Story = {
  args: {
    variant: 'error',
    message: 'Error! Server is not available',
  },
}

/** Успех */
export const Success: Story = {
  args: {
    variant: 'success',
    message: 'Your settings are saved',
  },
}
