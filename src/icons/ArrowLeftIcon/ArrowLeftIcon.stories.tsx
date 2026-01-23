import type { Meta, StoryObj } from '@storybook/react-vite'

import { ArrowLeftIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A ArrowLeftIcon icon component.',
      },
    },
  },
  component: ArrowLeftIcon,
  tags: ['autodocs'],
  title: 'Icons/ArrowLeftIcon',
} satisfies Meta<typeof ArrowLeftIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default ArrowLeftIcon icon. */
export const Default: Story = {}
