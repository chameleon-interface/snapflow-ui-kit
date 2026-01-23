import type { Meta, StoryObj } from '@storybook/react-vite'

import { CloseIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A CloseIcon icon component.',
      },
    },
  },
  component: CloseIcon,
  tags: ['autodocs'],
  title: 'Icons/CloseIcon',
} satisfies Meta<typeof CloseIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default CloseIcon icon. */
export const Default: Story = {}
