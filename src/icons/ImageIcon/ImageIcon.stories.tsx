import type { Meta, StoryObj } from '@storybook/react-vite'

import { ImageIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A ImageIcon icon component with two visual variants: stroke (outline) and filled.',
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
  component: ImageIcon,
  tags: ['autodocs'],
  title: 'Icons/ImageIcon',
} satisfies Meta<typeof ImageIcon>

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
