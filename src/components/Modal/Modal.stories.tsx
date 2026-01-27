import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
}

export default meta

type Story = StoryObj<typeof Modal>

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open modal</button>

        <Modal open={open} title="Modal title" onClose={() => setOpen(false)}>
          Modal content
        </Modal>
      </>
    )
  },
}
