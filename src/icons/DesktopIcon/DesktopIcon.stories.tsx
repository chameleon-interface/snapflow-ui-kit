import type { Meta, StoryObj } from '@storybook/react-vite'

import { DesktopIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Desktop / monitor glyph for device lists. Variants: stroke (outline) and filled (solid).',
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
  component: DesktopIcon,
  tags: ['autodocs'],
  title: 'Icons/DesktopIcon',
} satisfies Meta<typeof DesktopIcon>

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
