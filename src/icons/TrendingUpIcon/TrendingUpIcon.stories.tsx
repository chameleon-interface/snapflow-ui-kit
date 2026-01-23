import type { Meta, StoryObj } from '@storybook/react-vite'

import { TrendingUpIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A trending up icon component.',
      },
    },
  },
  component: TrendingUpIcon,
  tags: ['autodocs'],
  title: 'Icons/TrendingUpIcon',
} satisfies Meta<typeof TrendingUpIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default trending up icon. */
export const Default: Story = {}
