import type { Meta, StoryObj } from '@storybook/react-vite'

import { ColorPalleteIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A ColorPalleteIcon icon component.',
      },
    },
  },
  component: ColorPalleteIcon,
  tags: ['autodocs'],
  title: 'Icons/ColorPalleteIcon',
} satisfies Meta<typeof ColorPalleteIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default ColorPalleteIcon icon. */
export const Default: Story = {}
