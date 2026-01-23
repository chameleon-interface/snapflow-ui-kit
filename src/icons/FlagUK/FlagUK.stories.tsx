import type { Meta, StoryObj } from '@storybook/react-vite'

import { FlagUK } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A FlagUK icon component.',
      },
    },
  },
  component: FlagUK,
  tags: ['autodocs'],
  title: 'Icons/FlagUK',
} satisfies Meta<typeof FlagUK>

export default meta
type Story = StoryObj<typeof meta>

/** Default FlagUK icon. */
export const Default: Story = {}
