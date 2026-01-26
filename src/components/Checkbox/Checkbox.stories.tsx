import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

/* uncontrolled */
export const Default: Story = {
  args: {
    children: 'Checkbox',
  },
}

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
    children: 'Default checked',
  },
}

/* controlled */
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(true)

    return <Checkbox {...args} checked={value} onChange={setValue} />
  },
  args: {
    children: 'Controlled checkbox',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled checkbox',
  },
}

export const CheckedDisabled: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    children: 'Checked disabled',
  },
}
