import type { Meta, StoryObj } from '@storybook/react-vite'

import { RecaptchaLogo } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reCAPTCHA logo icon component.',
      },
    },
  },
  component: RecaptchaLogo,
  tags: ['autodocs', 'hidden'],
  title: 'Icons/RecaptchaLogo',
} satisfies Meta<typeof RecaptchaLogo>

export default meta
type Story = StoryObj<typeof meta>

/** Default reCAPTCHA logo icon. */
export const Default: Story = {}
