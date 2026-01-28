import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Modal } from './Modal'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      canvas: {
        hidden: true,
      },
      description: {
        component: `
A modal dialog component used for confirmations, alerts, and critical user interactions.

Accessibility & keyboard support

- The modal can be opened using keyboard (**Tab + Enter**)
- Focus is trapped within the modal while it is open
- When the modal is closed, focus is restored to the trigger element
- The modal can be closed using Escape
        `,
      },
    },
  },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    open: true,
    title: 'Modal title',
    children: 'Modal content',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
}

export const Interactive: Story = {
  args: {
    title: 'Modal title',
    children: 'Modal content',
  },
  parameters: {
    docs: {
      description: {
        story: `
Interactive example

Use this example to test keyboard interaction:

1. Press Tab to focus the "Open modal" button  
2. Press Enter to open the modal  
3. Use Tab / Shift + Tab to verify focus trapping  
4. Press Escape or click the close button  
5. Focus should return to the "Open modal" button
        `,
      },
    },
  },
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <button>Focusable element before</button>

        <button onClick={() => setOpen(true)} style={{ marginLeft: 8 }}>
          Open modal
        </button>

        <Modal open={open} onClose={() => setOpen(false)} title={args.title}>
          {args.children}
        </Modal>
      </div>
    )
  },
}

export const LongTitle: Story = {
  args: {
    title:
      'This is a very long modal title that should wrap onto multiple lines and not break the layout',
    children: 'Modal content',
  },
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open modal</button>

        <Modal open={open} onClose={() => setOpen(false)} title={args.title}>
          {args.children}
        </Modal>
      </>
    )
  },
}

export const LongContent: Story = {
  args: {
    title: 'Modal title',
    children: (
      <>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>Very long content line {i + 1}</p>
        ))}
      </>
    ),
  },
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open modal</button>

        <Modal open={open} onClose={() => setOpen(false)} title={args.title}>
          {args.children}
        </Modal>
      </>
    )
  },
}

export const WithActions: Story = {
  args: {
    title: 'Modal title',
    children: null,
  },
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open modal</button>

        <Modal open={open} onClose={() => setOpen(false)} title={args.title}>
          <p>Are you sure you want to continue?</p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 8,
              marginTop: 16,
            }}
          >
            <button onClick={() => setOpen(false)}>Cancel</button>
            <button onClick={() => setOpen(false)}>Confirm</button>
          </div>
        </Modal>
      </>
    )
  },
}
