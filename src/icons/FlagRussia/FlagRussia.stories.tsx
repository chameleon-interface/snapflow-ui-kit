import type { Meta, StoryObj } from '@storybook/react-vite'

import { FlagRussia } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A FlagRussia icon component.',
      },
    },
  },
  component: FlagRussia,
  tags: ['autodocs'],
  title: 'Icons/FlagRussia',
} satisfies Meta<typeof FlagRussia>

export default meta
type Story = StoryObj<typeof meta>

/** Default FlagRussia icon. */
export const Default: Story = {}
