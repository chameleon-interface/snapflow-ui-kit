import type { Meta, StoryObj } from '@storybook/react-vite'

import { EyeOffIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An eye-off icon component with two visual variants: stroke (outline) and filled.',
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
  component: EyeOffIcon,
  tags: ['autodocs'],
  title: 'Icons/EyeOffIcon',
} satisfies Meta<typeof EyeOffIcon>

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
