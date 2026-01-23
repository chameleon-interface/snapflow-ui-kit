import type { Meta, StoryObj } from '@storybook/react-vite'

import { EyeIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An eye icon component with two visual variants: stroke (outline) and filled.',
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
  component: EyeIcon,
  tags: ['autodocs'],
  title: 'Icons/EyeIcon',
} satisfies Meta<typeof EyeIcon>

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
