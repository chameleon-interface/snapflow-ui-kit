import type { Meta, StoryObj } from '@storybook/react-vite'

import { StripeLogo } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A Stripe logo icon component.',
      },
    },
  },
  component: StripeLogo,
  tags: ['autodocs', 'hidden'],
  title: 'Icons/StripeLogo',
} satisfies Meta<typeof StripeLogo>

export default meta
type Story = StoryObj<typeof meta>

/** Default Stripe logo icon. */
export const Default: Story = {}
