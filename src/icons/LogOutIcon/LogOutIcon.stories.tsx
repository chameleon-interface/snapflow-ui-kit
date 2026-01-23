import type { Meta, StoryObj } from '@storybook/react-vite'

import { LogOutIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A log out icon component.',
      },
    },
  },
  component: LogOutIcon,
  tags: ['autodocs'],
  title: 'Icons/LogOutIcon',
} satisfies Meta<typeof LogOutIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default log out icon. */
export const Default: Story = {}
