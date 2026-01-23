import type { Meta, StoryObj } from '@storybook/react-vite'

import { FacebookLogo } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A Facebook logo icon component.',
      },
    },
  },
  component: FacebookLogo,
  tags: ['autodocs', 'hidden'],
  title: 'Icons/FacebookLogo',
} satisfies Meta<typeof FacebookLogo>

export default meta
type Story = StoryObj<typeof meta>

/** Default Facebook logo icon. */
export const Default: Story = {}
