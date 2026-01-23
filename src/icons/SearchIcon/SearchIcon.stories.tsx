import type { Meta, StoryObj } from '@storybook/react-vite'

import { SearchIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A SearchIcon icon component.',
      },
    },
  },
  component: SearchIcon,
  tags: ['autodocs'],
  title: 'Icons/SearchIcon',
} satisfies Meta<typeof SearchIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default SearchIcon icon. */
export const Default: Story = {}
