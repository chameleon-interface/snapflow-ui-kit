import type { Meta, StoryObj } from '@storybook/react-vite'

import { GitHubIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A GitHub logo icon component.',
      },
    },
  },
  component: GitHubIcon,
  tags: ['autodocs', 'hidden'],
  title: 'Icons/GitHubIcon',
} satisfies Meta<typeof GitHubIcon>

export default meta
type Story = StoryObj<typeof meta>

/** Default GitHub logo icon. */
export const Default: Story = {}
