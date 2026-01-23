import type { Meta, StoryObj } from '@storybook/react-vite'

import { PaperPlaneIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A paper plane (send) icon component.',
      },
    },
  },
  component: PaperPlaneIcon,
  tags: ['autodocs'],
  title: 'Icons/PaperPlaneIcon',
} satisfies Meta<typeof PaperPlaneIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
