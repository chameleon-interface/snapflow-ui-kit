import type { Meta, StoryObj } from '@storybook/react-vite'

import { ArrowBackIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A ArrowBackIcon icon component.',
      },
    },
  },
  component: ArrowBackIcon,
  tags: ['autodocs'],
  title: 'Icons/ArrowBackIcon',
} satisfies Meta<typeof ArrowBackIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default ArrowBackIcon icon. */
export const Default: Story = {}
