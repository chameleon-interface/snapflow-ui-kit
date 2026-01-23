import type { Meta, StoryObj } from '@storybook/react-vite'

import { BlockIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A BlockIcon icon component.',
      },
    },
  },
  component: BlockIcon,
  tags: ['autodocs'],
  title: 'Icons/BlockIcon',
} satisfies Meta<typeof BlockIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default block icon. */
export const Default: Story = {}
