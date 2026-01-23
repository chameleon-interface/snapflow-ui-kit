import type { Meta, StoryObj } from '@storybook/react-vite'

import { ArrowRightIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A ArrowRightIcon icon component.',
      },
    },
  },
  component: ArrowRightIcon,
  tags: ['autodocs'],
  title: 'Icons/ArrowRightIcon',
} satisfies Meta<typeof ArrowRightIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default ArrowRightIcon icon. */
export const Default: Story = {}
