import type { Meta, StoryObj } from '@storybook/react-vite'

import { SmartphoneIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Smartphone glyph for device lists. Variants: stroke (outline) and filled (solid with home button).',
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
  component: SmartphoneIcon,
  tags: ['autodocs'],
  title: 'Icons/SmartphoneIcon',
} satisfies Meta<typeof SmartphoneIcon>

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
