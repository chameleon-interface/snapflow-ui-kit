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
    errorMessage: 'Ошибка ввода',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Textarea',
    placeholder: 'Textarea',
    value: 'Textarea',
    onChange: () => {},
    disabled: true,
  },
}
