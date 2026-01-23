import type { Meta, StoryObj } from '@storybook/react-vite'

import { PersonIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A person icon component with two visual variants: stroke (outline) and filled.',
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
  component: PersonIcon,
  tags: ['autodocs'],
  title: 'Icons/PersonIcon',
} satisfies Meta<typeof PersonIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Stroke (outline) variant of the person icon. Default style. */
export const Stroke: Story = {
  args: {
    type: 'stroke',
  },
}

/** Filled variant of the person icon. */
export const Filled: Story = {
  args: {
    type: 'filled',
  },
}
