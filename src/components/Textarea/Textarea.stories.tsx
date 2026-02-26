import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from './Textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    errorMessage: { control: 'text' },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Textarea',
    placeholder: 'Textarea',
    value: '',
    onChange: () => {},
  },
}

export const Error: Story = {
  args: {
    label: 'Textarea',
    placeholder: 'Textarea',
    value: '',
    onChange: () => {},
    errorMessage: 'Input error',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Textarea',
    placeholder: 'Textarea',
    disabled: true,
  },
}

export const DisabledInFieldset: Story = {
  render: (args) => (
    <fieldset disabled style={{ border: 'none', margin: 0, padding: 0, width: 320 }}>
      <Textarea {...args} />
    </fieldset>
  ),
  args: {
    label: 'Textarea',
    placeholder: 'Textarea',
    value: 'Disabled by fieldset',
  },
}
