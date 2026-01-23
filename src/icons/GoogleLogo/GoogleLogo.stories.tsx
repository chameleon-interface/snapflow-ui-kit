import type { Meta, StoryObj } from '@storybook/react-vite'

import { GoogleLogo } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A Google logo icon component.',
      },
    },
  },
  component: GoogleLogo,
  tags: ['autodocs', 'hidden'],
  title: 'Icons/GoogleLogo',
} satisfies Meta<typeof GoogleLogo>

export default meta
type Story = StoryObj<typeof meta>

/** Default Google logo icon. */
export const Default: Story = {}
