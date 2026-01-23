import type { Meta, StoryObj } from '@storybook/react-vite'

import { AllDoneIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A AllDoneIcon icon component.',
      },
    },
  },
  component: AllDoneIcon,
  tags: ['autodocs'],
  title: 'Icons/AllDoneIcon',
} satisfies Meta<typeof AllDoneIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default AllDoneIcon icon. */
export const Default: Story = {}
