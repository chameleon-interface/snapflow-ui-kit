import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio } from './Radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
    onChange: {
      action: 'change',
      description: 'Change handler (for controlled mode)',
    },
  },
}

export default meta

type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: {
    children: 'Option',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    children: 'Checked option',
  },
}
