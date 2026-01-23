import type { Meta, StoryObj } from '@storybook/react-vite'

import { PaidIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A paid icon component.',
      },
    },
  },
  component: PaidIcon,
  tags: ['autodocs', 'hidden'],
  title: 'Icons/PaidIcon',
} satisfies Meta<typeof PaidIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default paid icon. */
export const Default: Story = {}
