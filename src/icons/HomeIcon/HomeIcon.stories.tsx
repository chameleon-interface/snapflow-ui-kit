import type { Meta, StoryObj } from '@storybook/react-vite'

import { HomeIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A home icon component with two visual variants: stroke (outline) and filled.',
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
  component: HomeIcon,
  tags: ['autodocs'],
  title: 'Icons/HomeIcon',
} satisfies Meta<typeof HomeIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Stroke (outline) variant of the home icon. Default style. */
export const Stroke: Story = {
  args: {
    type: 'stroke',
  },
}

/** Filled variant of the home icon. */
export const Filled: Story = {
  args: {
    type: 'filled',
  },
}
