import type { Meta, StoryObj } from '@storybook/react-vite'

import { ExpandIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A ExpandIcon icon component.',
      },
    },
  },
  component: ExpandIcon,
  tags: ['autodocs'],
  title: 'Icons/ExpandIcon',
} satisfies Meta<typeof ExpandIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default ExpandIcon icon. */
export const Default: Story = {}
