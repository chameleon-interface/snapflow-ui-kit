import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioButtonIcon } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A radio button icon component with checked and unchecked states.',
      },
    },
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the icon is checked',
      table: { defaultValue: { summary: false } },
    },
  },
  component: RadioButtonIcon,
  tags: ['autodocs', 'hidden'],
  title: 'Icons/RadioButtonIcon',
} satisfies Meta<typeof RadioButtonIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    checked: false,
  },
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}
