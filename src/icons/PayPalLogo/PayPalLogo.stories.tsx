import type { Meta, StoryObj } from '@storybook/react-vite'

import { PayPalLogo } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A PayPal logo icon component.',
      },
    },
  },
  component: PayPalLogo,
  tags: ['autodocs', 'hidden'],
  title: 'Icons/PayPalLogo',
} satisfies Meta<typeof PayPalLogo>

export default meta
type Story = StoryObj<typeof meta>

/** Default PayPal logo icon. */
export const Default: Story = {}
