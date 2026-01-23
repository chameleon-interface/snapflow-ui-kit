import type { Meta, StoryObj } from '@storybook/react-vite'

import { CheckmarkIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A CheckmarkIcon icon component.',
      },
    },
  },
  component: CheckmarkIcon,
  tags: ['autodocs'],
  title: 'Icons/CheckmarkIcon',
} satisfies Meta<typeof CheckmarkIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default CheckmarkIcon icon. */
export const Default: Story = {}
