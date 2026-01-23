import type { Meta, StoryObj } from '@storybook/react-vite'

import { MoreHozitontalIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A horizontal more (three dots) icon component.',
      },
    },
  },
  component: MoreHozitontalIcon,
  tags: ['autodocs'],
  title: 'Icons/MoreHozitontalIcon',
} satisfies Meta<typeof MoreHozitontalIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
