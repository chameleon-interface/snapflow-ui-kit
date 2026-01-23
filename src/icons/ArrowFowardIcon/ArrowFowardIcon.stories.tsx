import type { Meta, StoryObj } from '@storybook/react-vite'

import { ArrowFowardIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A ArrowFowardIcon icon component.',
      },
    },
  },
  component: ArrowFowardIcon,
  tags: ['autodocs'],
  title: 'Icons/ArrowFowardIcon',
} satisfies Meta<typeof ArrowFowardIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default ArrowFowardIcon icon. */
export const Default: Story = {}
