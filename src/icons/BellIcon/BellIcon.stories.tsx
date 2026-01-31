import type { Meta, StoryObj } from '@storybook/react-vite'

import { BellIcon } from './'

const meta = {
  title: 'Icons/BellIcon',
  component: BellIcon,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['stroke', 'filled'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'stroke' } },
    },
    color: {
      control: 'color',
      description: 'Inherited via currentColor',
    },
    width: {
      control: 'number',
      description: 'SVG width',
    },
    height: {
      control: 'number',
      description: 'SVG height',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Bell icon with stroke and filled variants. Uses currentColor.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BellIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Stroke: Story = {
  args: {
    type: 'stroke',
    color: '#fff',
    width: 18,
    height: 20,
  },
}

export const Filled: Story = {
  args: {
    type: 'filled',
    color: '#fff',
    width: 18,
    height: 20,
  },
}
