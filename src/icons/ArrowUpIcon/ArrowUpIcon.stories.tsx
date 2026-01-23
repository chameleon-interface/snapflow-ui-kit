import type { Meta, StoryObj } from '@storybook/react-vite'

import { ArrowUpIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A ArrowUpIcon icon component.',
      },
    },
  },
  component: ArrowUpIcon,
  tags: ['autodocs'],
  title: 'Icons/ArrowUpIcon',
} satisfies Meta<typeof ArrowUpIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default ArrowUpIcon icon. */
export const Default: Story = {}
