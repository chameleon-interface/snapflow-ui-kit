import type { Meta, StoryObj } from '@storybook/react-vite'

import { ArrowDownIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A ArrowDownIcon icon component.',
      },
    },
  },
  component: ArrowDownIcon,
  tags: ['autodocs'],
  title: 'Icons/ArrowDownIcon',
} satisfies Meta<typeof ArrowDownIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default ArrowDownIcon icon. */
export const Default: Story = {}
