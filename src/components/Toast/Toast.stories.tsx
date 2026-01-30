import { Meta, StoryObj } from '@storybook/react-vite'
import { ToastAlert } from './ToastAlert'
import { toast, Toaster } from 'react-hot-toast'

const meta: Meta<typeof ToastAlert> = {
  title: 'Components/ToastAlert',
  component: ToastAlert,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: () => (
    <>
      <Toaster position="top-right" gutter={8}>
        {(t) => <ToastAlert t={t} />}
      </Toaster>

      <button onClick={() => toast.success('Your settings are saved')}>Show Success</button>
      <button onClick={() => toast.error('Server is not available')}>Show Error</button>
    </>
  ),
}
