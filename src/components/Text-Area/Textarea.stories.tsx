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
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

/** Default состояние */
export const Default: Story = {
  args: {
    label: 'Text-area',
    placeholder: 'Text-area',
  },
}

/** Error состояние */
export const Error: Story = {
  args: {
    label: 'Text-area',
    placeholder: 'Text-area',
    errorMessage: 'Text-area',
  },
}

/** Focus состояние */
export const Focus: Story = {
  args: {
    label: 'Text-area',
    placeholder: 'Text-area',
    value: 'Text-area',
  },
  play: async ({ canvasElement }) => {
    const textarea = canvasElement.querySelector('textarea') as HTMLTextAreaElement
    textarea?.focus()
  },
}

/** Disabled состояние */
export const Disabled: Story = {
  args: {
    label: 'Text-area',
    placeholder: 'Text-area',
    value: 'Text-area',
    disabled: true,
  },
}
