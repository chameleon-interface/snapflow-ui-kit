import type { Meta, StoryObj } from '@storybook/react-vite'

import { MicIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A microphone icon component with two visual variants: stroke (outline) and filled.',
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
  component: MicIcon,
  tags: ['autodocs'],
  title: 'Icons/MicIcon',
} satisfies Meta<typeof MicIcon>

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
