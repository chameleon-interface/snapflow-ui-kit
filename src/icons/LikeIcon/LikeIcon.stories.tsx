import type { Meta, StoryObj } from '@storybook/react-vite'

import { LikeIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A LikeIcon icon component with two visual variants: stroke and filled.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['stroke', 'filled'],
      description: 'Visual style of the icon',
      table: { defaultValue: { summary: 'stroke' } },
    },
  },
  component: LikeIcon,
  tags: ['autodocs'],
  title: 'Icons/LikeIcon',
} satisfies Meta<typeof LikeIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Stroke: Story = {
  args: {
    type: 'stroke',
  },
}

export const Filled: Story = {
  args: {
    type: 'filled',
  },
}
