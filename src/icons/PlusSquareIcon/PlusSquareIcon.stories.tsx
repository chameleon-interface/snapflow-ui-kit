import type { Meta, StoryObj } from '@storybook/react-vite'

import { PlusSquareIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A plus square icon component with two visual variants: stroke (outline) and filled.',
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
  component: PlusSquareIcon,
  tags: ['autodocs'],
  title: 'Icons/PlusSquareIcon',
} satisfies Meta<typeof PlusSquareIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Stroke (outline) variant of the plus square icon. Default style. */
export const Stroke: Story = {
  args: {
    type: 'stroke',
  },
}

/** Filled variant of the plus square icon. */
export const Filled: Story = {
  args: {
    type: 'filled',
  },
}
