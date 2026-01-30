import { Meta, StoryObj } from '@storybook/react-vite'
import { Toaster } from 'react-hot-toast'

import { Alert } from './Alert'
import { toastError, toastSuccess } from './toast'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['error', 'success'],
      description: 'Alert type',
      table: { defaultValue: { summary: 'error' } },
    },
    message: {
      control: { type: 'text' },
      description: 'Alert text',
      table: { defaultValue: { summary: '' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Error: Story = {
  args: {
    variant: 'error',
    message: 'Error! Server is not available',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    message: 'Your settings are saved',
  },
}

export const WithToast: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <button type="button" onClick={() => toastSuccess('Data saved successfully')}>
        Show success toast
      </button>
      <button type="button" onClick={() => toastError('Please try again later')}>
        Show error toast
      </button>
      <Toaster position={'top-right'} />
    </div>
  ),
}
